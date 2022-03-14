import {Todo, TodoAction, TodoActions, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    doneTodos: 0,
    notDoneTodos: 0,
    limit: null,

    showModal: false,

    inputName: '',
    inputDescription: ''
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            let todos: Todo[] = state.todos;
            todos.push(action.payload);
            return {...state, todos: todos, doneTodos: state.doneTodos, notDoneTodos: state.notDoneTodos + 1, limit: null}
        case TodoActions.CHANGE_LIMIT:
            let todos2: Todo[] = state.todos
            return {...state, todos: todos2, doneTodos: state.doneTodos, notDoneTodos: state.notDoneTodos, limit: action.payload}
        case TodoActions.DONE_TODO:
            let todos3 = state.todos;
            let todo: Todo = todos3.find(todo => todo === action.payload[0]) ?? {id: 0, name: '', description: '', isDone: false}
            todo.isDone = action.payload[1]
            return {...state, todos: todos3, doneTodos: action.payload[1] ? state.doneTodos + 1 : state.doneTodos - 1, notDoneTodos: action.payload[1] ? state.notDoneTodos - 1 : state.notDoneTodos + 1,limit: null}
        case TodoActions.SHOW_MODAL:
            return {...state, showModal: action.payload}
        case TodoActions.CHANGE_INPUT_NAME:
            return {...state, inputName: action.payload}
        case TodoActions.CHANGE_INPUT_DESCRIPTION:
            return {...state, inputDescription: action.payload}
        default:
            return state
    }
}