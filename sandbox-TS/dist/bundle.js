"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DDInterfaces;
(function (DDInterfaces) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
        ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
    })(ProjectStatus = DDInterfaces.ProjectStatus || (DDInterfaces.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, people, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.status = status;
        }
    }
    DDInterfaces.Project = Project;
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    class State {
        constructor() {
            this.listeners = [];
        }
        addListener(listenerFn) {
            this.listeners.push(listenerFn);
        }
    }
    class ProjectState extends State {
        constructor() {
            super();
            this.projects = [];
        }
        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState;
            return this.instance;
        }
        addProject(title, description, numOfPeople) {
            const newProject = new DDInterfaces.Project(Math.random().toString(), title, description, numOfPeople, DDInterfaces.ProjectStatus.Active);
            this.projects.push(newProject);
            this.updateListeners();
        }
        moveProject(prjId, newStatus) {
            const targetProject = this.projects.find(prj => prj.id === prjId);
            if (targetProject && targetProject.status !== newStatus) {
                targetProject.status = newStatus;
                this.updateListeners();
            }
        }
        updateListeners() {
            for (const listenerFn of this.listeners) {
                listenerFn(this.projects.slice());
            }
        }
    }
    DDInterfaces.ProjectState = ProjectState;
    DDInterfaces.projectState = ProjectState.getInstance();
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    function validate(ValidatableInput) {
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
    DDInterfaces.validate = validate;
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    function autobind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };
        return adjDescriptor;
    }
    DDInterfaces.autobind = autobind;
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    class Component {
        constructor(templateId, hostElementId, insertAtStart, newElementId) {
            this.templateElement = document.getElementById(templateId);
            this.hostElement = document.getElementById(hostElementId);
            const importedNode = document.importNode(this.templateElement.content, true);
            this.element = importedNode.firstElementChild;
            if (newElementId) {
                this.element.id = newElementId;
            }
            this.attach(insertAtStart);
        }
        attach(insertAtBeginning) {
            this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
        }
    }
    DDInterfaces.Component = Component;
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    class ProjectInput extends DDInterfaces.Component {
        constructor() {
            super('project-input', 'app', true, 'user-input');
            this.titleInputElement = this.element.querySelector('#title');
            this.descriptionInputElement = this.element.querySelector('#description');
            this.peopleInputElement = this.element.querySelector('#people');
            this.configure();
        }
        configure() {
            this.element.addEventListener('submit', this.submitHandler);
        }
        renderContent() { }
        gatherUserInput() {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = this.peopleInputElement.value;
            const titleValidatable = {
                value: enteredTitle,
                required: true
            };
            const descriptionValidatable = {
                value: enteredDescription,
                required: true,
                minLength: 5
            };
            const peopleValidatable = {
                value: +enteredPeople,
                required: true,
                min: 1,
                max: 8
            };
            if (!DDInterfaces.validate(titleValidatable) &&
                !DDInterfaces.validate(descriptionValidatable) &&
                !DDInterfaces.validate(peopleValidatable)) {
                alert('Invalid input');
            }
            else {
                return [enteredTitle, enteredDescription, +enteredPeople];
            }
        }
        clearInputs() {
            this.titleInputElement.value = '';
            this.descriptionInputElement.value = '';
            this.peopleInputElement.value = '';
        }
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                DDInterfaces.projectState.addProject(title, desc, people);
                this.clearInputs();
            }
        }
    }
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ProjectInput.prototype, "submitHandler", null);
    DDInterfaces.ProjectInput = ProjectInput;
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    class ProjectItem extends DDInterfaces.Component {
        get persons() {
            if (this.project.people === 1) {
                return '1 person';
            }
            else {
                return `${this.project.people} persons`;
            }
        }
        constructor(hostId, project) {
            super('single-project', hostId + '-list', false, project.id);
            this.hostId = hostId;
            this.project = project;
            this.configure();
            this.renderContent();
        }
        configure() {
            this.element.addEventListener('dragstart', this.dragStartHandler);
            this.element.addEventListener('dragend', this.dragEndHandler);
        }
        renderContent() {
            this.element.querySelector('h2').textContent = this.project.title;
            this.element.querySelector('h3').textContent = this.persons + ' assigned';
            this.element.querySelector('p').textContent = this.project.description;
        }
        dragStartHandler(event) {
            event.dataTransfer.setData('text/plain', this.project.id);
            event.dataTransfer.effectAllowed = 'move';
        }
        dragEndHandler(event) { }
    }
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProjectItem.prototype, "configure", null);
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProjectItem.prototype, "renderContent", null);
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], ProjectItem.prototype, "dragStartHandler", null);
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], ProjectItem.prototype, "dragEndHandler", null);
    DDInterfaces.ProjectItem = ProjectItem;
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    class ProjectList extends DDInterfaces.Component {
        constructor(type) {
            super('project-list', 'app', false, `${type}-projects`);
            this.type = type;
            this.assignedProjects = [];
            this.configure();
            this.renderContent();
        }
        renderProjects() {
            const listEl = document.getElementById(`${this.type}-projects-list`);
            listEl.innerHTML = '';
            for (const prjItem of this.assignedProjects) {
                new DDInterfaces.ProjectItem(this.element.id, prjItem);
            }
        }
        configure() {
            this.element.addEventListener('dragover', this.dragOverHandler);
            this.element.addEventListener('dragleave', this.dragLeaveHandler);
            this.element.addEventListener('drop', this.dropHandler);
            DDInterfaces.projectState.addListener((projects) => {
                const relevantProjects = projects.filter(prj => {
                    if (this.type === 'active') {
                        return prj.status === DDInterfaces.ProjectStatus.Active;
                    }
                    return prj.status === DDInterfaces.ProjectStatus.Finished;
                });
                this.assignedProjects = relevantProjects;
                this.renderProjects();
            });
        }
        renderContent() {
            const listId = `${this.type}-projects-list`;
            this.element.querySelector('ul').id = listId;
            this.element.querySelector('h2').textContent =
                this.type.toUpperCase() + ' PROJECTS';
        }
        dragOverHandler(event) {
            if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                event.preventDefault();
                const listEl = this.element.querySelector('ul');
                listEl.classList.add('droppable');
            }
        }
        dragLeaveHandler(event) {
            const listEl = this.element.querySelector('ul');
            listEl.classList.remove('droppable');
        }
        dropHandler(event) {
            const prjId = event.dataTransfer.getData('text/plain');
            const newStatus = this.type === 'active' ? DDInterfaces.ProjectStatus.Active : DDInterfaces.ProjectStatus.Finished;
            DDInterfaces.projectState.moveProject(prjId, newStatus);
        }
    }
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], ProjectList.prototype, "dragOverHandler", null);
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], ProjectList.prototype, "dragLeaveHandler", null);
    __decorate([
        DDInterfaces.autobind,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [DragEvent]),
        __metadata("design:returntype", void 0)
    ], ProjectList.prototype, "dropHandler", null);
    DDInterfaces.ProjectList = ProjectList;
})(DDInterfaces || (DDInterfaces = {}));
var DDInterfaces;
(function (DDInterfaces) {
    new DDInterfaces.ProjectInput();
    new DDInterfaces.ProjectList('active');
    new DDInterfaces.ProjectList('finished');
})(DDInterfaces || (DDInterfaces = {}));
//# sourceMappingURL=bundle.js.map