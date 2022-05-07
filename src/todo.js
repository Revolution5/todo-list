class Todo {
    constructor(title, dueDate, isComplete) {
        this.title = title;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
    }

    get title() {
        return this.title;
    }

    set title(title) {
        this.title = title;
    }

    get dueDate() {
        return this.dueDate;
    }

    set dueDate(dueDate) {
        this.dueDate = dueDate;
    }

    get isComplete() {
        return this.isComplete;
    }

    set isComplete(isComplete) {
        this.isComplete = isComplete;
    }
}
