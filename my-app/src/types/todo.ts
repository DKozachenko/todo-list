export interface Todo {
    id?: number,
    name: string,
    description: string,
    isDone: boolean
}

export interface TodoState {
    todos: Todo[],
    limit: boolean | null
}

export enum TodoActions {
    ADD_TODO ='ADD_TODO',
    CHANGE_LIMIT = 'CHANGE_LIMIT'
}

interface AddTodoAction {
    type: TodoActions.ADD_TODO,
    payload: Todo
}

interface ChangeLimitAction {
    type: TodoActions.CHANGE_LIMIT,
    payload: boolean | null
}


export type TodoAction = AddTodoAction | ChangeLimitAction