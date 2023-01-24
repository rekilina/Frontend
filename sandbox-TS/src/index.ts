// drag & drop interfaces
// dragstart --> dragover --> dragleave --> dragend
interface Dragable {
	dragStartHandler(event: DragEvent): void;
	dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
	dragOverHandler(event: DragEvent): void;
	dropHandler(event: DragEvent): void;
	dragLeaveHandler(event: DragEvent): void;
}

enum ProjectStatus { Active, Finished }

class Project {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public people: number,
		public status: ProjectStatus
	) { }
}

type Listener<T> = (items: T[]) => void;

class State<T> {
	protected listeners: Listener<T>[] = [];

	addListener(listenerFn: Listener<T>) {
		this.listeners.push(listenerFn);
	}
}

// Project State Management class
// singleton
class ProjectState extends State<Project> {

	private projects: Project[] = [
		// list of projects here
	]

	private static instance: ProjectState;

	private constructor() {
		super();
	}

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}
		this.instance = new ProjectState;
		return this.instance;
	}

	public addProject(title: string,
		description: string,
		numOfPeople: number) {
		const newProject = new Project(Math.random().toString(), title, description, numOfPeople, ProjectStatus.Active);
		this.projects.push(newProject);
		this.updateListeners();
	}

	public moveProject(prjId: string, newStatus: ProjectStatus) {
		const targetProject = this.projects.find(prj => prj.id === prjId);
		if (targetProject) {
			targetProject.status = newStatus;
			this.updateListeners();
		}
	}

	public updateListeners() {
		for (const listenerFn of this.listeners) {
			listenerFn(this.projects.slice());
		}
	}
}

const projectState = ProjectState.getInstance();


abstract class Component<T extends HTMLElement, U extends HTMLElement> {
	templateElement: HTMLTemplateElement;
	hostElement: T;
	element: U;
	constructor(
		templateId: string,
		hostElementId: string,
		insertAtStart: boolean,
		newElementId?: string) {

		this.templateElement = document.getElementById(
			templateId
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById(hostElementId)! as T;

		const importedNode = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedNode.firstElementChild as U;
		if (newElementId) {
			this.element.id = newElementId;
		}
		this.attach(insertAtStart);
	}
	private attach(insertAtBeginning: boolean) {
		this.hostElement.insertAdjacentElement(
			insertAtBeginning ? 'afterbegin' : 'beforeend',
			this.element);
	}
	abstract configure?(): void;
	abstract renderContent(): void;
}

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
	implements Dragable {

	private project: Project;

	get persons(): string {
		if (this.project.people === 1) {
			return '1 person'
		} else {
			return `${this.project.people} persons`;
		}
	}

	constructor(protected hostId: string, project: Project) {
		super('single-project', hostId + '-list', false, project.id);
		this.project = project;

		this.configure();
		this.renderContent();
	}

	@autobind
	configure() {
		this.element.addEventListener('dragstart', this.dragStartHandler);
		this.element.addEventListener('dragend', this.dragEndHandler);
	}

	@autobind
	renderContent(): void {
		this.element.querySelector('h2')!.textContent = this.project.title;
		this.element.querySelector('h3')!.textContent = this.persons + ' assigned';
		this.element.querySelector('p')!.textContent = this.project.description;
	}

	@autobind
	dragStartHandler(event: DragEvent): void {
		event.dataTransfer!.setData('text/plain', this.project.id);
		event.dataTransfer!.effectAllowed = 'move';
	}

	@autobind
	dragEndHandler(event: DragEvent): void {
		console.log('drag end', event);
	}

}


class ProjectList extends Component<HTMLDivElement, HTMLElement>
	implements DragTarget {
	assignedProjects: Project[];

	constructor(private type: 'active' | 'finished') {
		super('project-list', 'app', false, `${type}-projects`);

		this.assignedProjects = [];


		this.configure();
		this.renderContent();
	}

	renderProjects() {
		const listEl = <HTMLUListElement>document.getElementById(`${this.type}-projects-list`)!;
		listEl.innerHTML = '';
		for (const prjItem of this.assignedProjects) {
			new ProjectItem(this.element.id, prjItem);
		}
	}

	configure() {
		this.element.addEventListener('dragover', this.dragOverHandler);
		this.element.addEventListener('dragleave', this.dragLeaveHandler);
		this.element.addEventListener('drop', this.dropHandler);
		projectState.addListener((projects: Project[]) => {
			const relevantProjects = projects.filter(prj => {
				if (this.type === 'active') {
					return prj.status === ProjectStatus.Active;
				}
				return prj.status === ProjectStatus.Finished;
			});
			this.assignedProjects = relevantProjects;
			this.renderProjects();
		});
	}

	renderContent() {
		const listId = `${this.type}-projects-list`;
		this.element.querySelector('ul')!.id = listId;
		this.element.querySelector('h2')!.textContent =
			this.type.toUpperCase() + ' PROJECTS';

	}

	@autobind
	dragOverHandler(event: DragEvent): void {
		if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
			event.preventDefault(); // allow dropping
			const listEl = this.element.querySelector('ul')!;
			listEl.classList.add('droppable');
			console.log(event)
		}
	}

	@autobind
	dragLeaveHandler(event: DragEvent): void {
		const listEl = this.element.querySelector('ul')!;
		listEl.classList.remove('droppable');
		console.log(event)
	}

	@autobind
	dropHandler(event: DragEvent): void {
		const prjId = event.dataTransfer!.getData('text/plain');
		const newStatus = this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished;
		projectState.moveProject(prjId, newStatus);
		console.log(event)
	}
}


interface Validatable {
	value: string | number;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	min?: number;
	max?: number;
}

function validate(ValidatableInput: Validatable): boolean {
	let isValid = true;
	if (ValidatableInput.required) {
		isValid = isValid && ValidatableInput.value.toString().trim().length !== 0;
	}
	if (ValidatableInput.minLength !== undefined &&
		typeof ValidatableInput.value === 'string') {
		isValid = isValid &&
			ValidatableInput.value.toString().trim().length >= ValidatableInput.minLength;
	}
	if (ValidatableInput.maxLength !== undefined &&
		typeof ValidatableInput.value === 'string') {
		isValid = isValid &&
			ValidatableInput.value.toString().trim().length <= ValidatableInput.maxLength;
	}
	if (ValidatableInput.min != undefined
		&& typeof ValidatableInput.value === 'number') {
		isValid = isValid &&
			ValidatableInput.value >= ValidatableInput.min;
	}
	if (ValidatableInput.max != undefined
		&& typeof ValidatableInput.value === 'number') {
		isValid = isValid &&
			ValidatableInput.value <= ValidatableInput.max;
	}
	return isValid;
}

// autobind decorator
function autobind(
	_: any,
	_2: string,
	descriptor: TypedPropertyDescriptor<any>
) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		get() {
			const boundFn = originalMethod.bind(this);
			return boundFn;
		}
	};
	return adjDescriptor;
}

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
	titleInputElement: HTMLInputElement;
	descriptionInputElement: HTMLInputElement;
	peopleInputElement: HTMLInputElement;

	constructor() {
		super('project-input', 'app', true, 'user-input');

		this.titleInputElement = this.element.querySelector(
			'#title'
		) as HTMLInputElement;
		this.descriptionInputElement = this.element.querySelector(
			'#description'
		) as HTMLInputElement;
		this.peopleInputElement = this.element.querySelector(
			'#people'
		) as HTMLInputElement;

		this.configure();

	}

	configure() {
		this.element.addEventListener('submit', this.submitHandler);
	}

	renderContent(): void { }

	private gatherUserInput(): [string, string, number] | void {
		const enteredTitle = this.titleInputElement.value;
		const enteredDescription = this.descriptionInputElement.value;
		const enteredPeople = this.peopleInputElement.value;

		const titleValidatable: Validatable = {
			value: enteredTitle,
			required: true
		};
		const descriptionValidatable: Validatable = {
			value: enteredDescription,
			required: true,
			minLength: 5
		};
		const peopleValidatable: Validatable = {
			value: +enteredPeople,
			required: true,
			min: 1,
			max: 8
		};

		if (
			!validate(titleValidatable) &&
			!validate(descriptionValidatable) &&
			!validate(peopleValidatable)
		) {
			alert('Invalid input');
			// return;
		} else {
			return [enteredTitle, enteredDescription, +enteredPeople];
		}
	}

	private clearInputs(): void {
		this.titleInputElement.value = '';
		this.descriptionInputElement.value = '';
		this.peopleInputElement.value = '';
	}

	@autobind
	private submitHandler(event: Event) {
		event.preventDefault();
		const userInput = this.gatherUserInput();
		if (Array.isArray(userInput)) {
			const [title, desc, people] = userInput;
			projectState.addProject(title, desc, people);
			this.clearInputs();
		}
	}
}

const prjInput = new ProjectInput();


const activeProject = new ProjectList('active');
const finishedProject = new ProjectList('finished');