export interface Todo {
    id?: number,
    name: string,
    description: string,
    isDone: boolean
}

export interface TodoState {
    todos: Todo[],
    doneTodos: number,
    notDoneTodos: number
    limit: boolean | null
}

export enum TodoActions {
    ADD_TODO ='ADD_TODO',
    CHANGE_LIMIT = 'CHANGE_LIMIT',
    DONE_TODO = 'DONE_LIMIT'
}

interface AddTodoAction {
    type: TodoActions.ADD_TODO,
    payload: Todo
}

interface ChangeLimitAction {
    type: TodoActions.CHANGE_LIMIT,
    payload: boolean | null
}

interface DoneTodoAction {
    type: TodoActions.DONE_TODO,
    payload: any[]
}


export type TodoAction = AddTodoAction | ChangeLimitAction | DoneTodoAction