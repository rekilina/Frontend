namespace DDInterfaces {
	export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
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
		dragEndHandler(event: DragEvent): void { }

	}
}