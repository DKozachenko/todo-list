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
    limit: boolean | null,

    showModal: boolean,

    inputName: string,
    inputDescription: string
}

export enum TodoActions {
    ADD_TODO ='ADD_TODO',
    CHANGE_LIMIT = 'CHANGE_LIMIT',
    DONE_TODO = 'DONE_LIMIT',

    SHOW_MODAL = 'SHOW_MODAL',

    CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME',
    CHANGE_INPUT_DESCRIPTION = 'CHANGE_INPUT_DESCRIPTION'
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

interface ShowModalAction {
    type: TodoActions.SHOW_MODAL,
    payload: boolean
}

interface ChangeInputName {
    type: TodoActions.CHANGE_INPUT_NAME,
    payload: string
}

interface ChangeInputDescription {
    type: TodoActions.CHANGE_INPUT_DESCRIPTION,
    payload: string
}


export type TodoAction = AddTodoAction | ChangeLimitAction | DoneTodoAction | ShowModalAction | ChangeInputName | ChangeInputDescription