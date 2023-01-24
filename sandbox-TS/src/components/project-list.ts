namespace DDInterfaces {
	export class ProjectList extends Component<HTMLDivElement, HTMLElement>
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
			}
		}

		@autobind
		dragLeaveHandler(event: DragEvent): void {
			const listEl = this.element.querySelector('ul')!;
			listEl.classList.remove('droppable');
		}

		@autobind
		dropHandler(event: DragEvent): void {
			const prjId = event.dataTransfer!.getData('text/plain');
			const newStatus = this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished;
			projectState.moveProject(prjId, newStatus);
		}
	}
}