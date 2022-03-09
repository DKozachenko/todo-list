interface Todo {
    id?: number,
    name: string,
    description: string,
    isDone: boolean
}

export interface TodoState {
    todos: Todo[]
}

export enum TodoActions {
    ADD_TODO ='ADD_TODO',
}

interface AddTodoAction {
    type: TodoActions.ADD_TODO,
    payload: Todo
}

export type TodoAction = AddTodoAction