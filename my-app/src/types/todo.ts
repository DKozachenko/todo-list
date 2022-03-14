export interface Todo {
    id?: number,
    name: string,
    description: string,
    isDone: boolean
}

export interface TodoState {
    todos: Todo[],
    doneTodos: Todo[],
    notDoneTodos: Todo[],
    currentTodos: Todo[],
    currentTodosName: string,

    showModal: boolean,

    inputName: string,
    inputDescription: string,

    searchQuery: string
}

export enum TodoActions {
    ADD_TODO ='ADD_TODO',
    CHANGE_CURRENT_TODOS = 'CHANGE_CURRENT_TODOS',
    CHANGE_TODO_STATUS = 'CHANGE_TODO_STATUS',

    SHOW_MODAL = 'SHOW_MODAL',

    CHANGE_INPUT_NAME = 'CHANGE_INPUT_NAME',
    CHANGE_INPUT_DESCRIPTION = 'CHANGE_INPUT_DESCRIPTION',

    CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY'
}

interface AddTodoAction {
    type: TodoActions.ADD_TODO,
    payload: Todo
}

interface DoneTodoAction {
    type: TodoActions.CHANGE_TODO_STATUS,
    payload: [Todo, boolean]
}

interface ChangeCurrentTodos {
    type: TodoActions.CHANGE_CURRENT_TODOS,
    payload: number
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

interface ChangeSearchQuery {
    type: TodoActions.CHANGE_SEARCH_QUERY,
    payload: string
}


export type TodoAction = AddTodoAction | DoneTodoAction | ChangeCurrentTodos | ShowModalAction
    | ChangeInputName | ChangeInputDescription | ChangeSearchQuery