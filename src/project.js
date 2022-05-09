class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get todos() {
        return this.todos;
    }

    set todos(todos) {
        this.todos = todos;
    }

    addTodo(newTodo) {
        this.todos.push(newTodo);
    }
}