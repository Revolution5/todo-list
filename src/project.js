export class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get todos() {
        return this._todos;
    }

    set todos(todos) {
        this._todos = todos;
    }

    addTodo(newTodo) {
        this.todos.push(newTodo);
    }
}