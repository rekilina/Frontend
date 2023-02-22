export class Modal {
	constructor(contentId, fallbackText) {
		this.contentTemplateEl = document.getElementById(contentId);
		this.modalTemplateEl = document.getElementById('modal-template');
		this.fallbackText = fallbackText;
	}

	show() {
		// check if Browser supports templates
		if ('content' in document.createElement('template')) {
			const modalElements = document.importNode(this.modalTemplateEl.content, true);
			this.modalElement = modalElements.querySelector('.modal');
			this.backdropElement = modalElements.querySelector('.backdrop');
			const contentElemet = document.importNode(
				this.contentTemplateEl.content, true);

			this.modalElement.appendChild(contentElemet);

			document.body.insertAdjacentElement('afterbegin', this.modalElement);
			document.body.insertAdjacentElement('afterbegin', this.backdropElement);

		} else {
			// fallback code
			alert(this.fallbackText);
		}
	}

	hide() {
		// const backdropElement = document.querySelector('.backdrop');
		// const modalElement = document.querySelector('.modal');
		// backdropElement.parentNode.removeChild(backdropElement);
		// modalElement.parentNode.removeChild(modalElement);
		this.modalElement.parentNode.removeChild(this.modalElement);
		this.backdropElement.parentNode.removeChild(this.backdropElement);
		this.modalElement = null;
		this.backdropElement = null;
	}
}