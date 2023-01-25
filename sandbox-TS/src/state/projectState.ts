import { Project } from '../interfaces/project';
import { ProjectStatus } from '../interfaces/project';

type Listener<T> = (items: T[]) => void;

class State<T> {
	protected listeners: Listener<T>[] = [];

	addListener(listenerFn: Listener<T>) {
		this.listeners.push(listenerFn);
	}
}

// Project State Management class
// singleton
export class ProjectState extends State<Project> {

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
		if (targetProject && targetProject.status !== newStatus) {
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

export const projectState = ProjectState.getInstance();
