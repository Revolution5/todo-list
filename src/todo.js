class Todo {
    constructor(title, dueDate, isComplete) {
        this.title = title;
        this.dueDate = dueDate;
        this.isComplete = isComplete;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get dueDate() {
        return this._dueDate;
    }

    set dueDate(dueDate) {
        this._dueDate = dueDate;
    }

    get isComplete() {
        return this._isComplete;
    }

    set isComplete(isComplete) {
        this._isComplete = isComplete;
    }
}
