import {Todo, TodoAction, TodoActions, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    doneTodos: [],
    notDoneTodos: [],
    currentTodos: [],

    showModal: false,

    inputName: '',
    inputDescription: '',

    searchQuery: ''
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            let todos: Todo[] = state.todos;
            let notDoneTodos = state.notDoneTodos
            todos.push(action.payload);
            notDoneTodos.push(action.payload)
            return {...state, todos: todos, currentTodos: todos, notDoneTodos: notDoneTodos}
        case TodoActions.CHANGE_TODO_STATUS:
            let todo: Todo = state.todos.find(todo => todo === action.payload[0]) ?? {id: 0, name: '', description: '', isDone: false}
            todo.isDone = action.payload[1]
            if (todo.isDone) {
                let doneTodos = state.doneTodos
                doneTodos.push(todo)
                let notDoneTodos = state.notDoneTodos.filter(t => t.id !== todo.id)
                if (state.currentTodos === state.notDoneTodos) {
                    return {...state, doneTodos: doneTodos, notDoneTodos: notDoneTodos, currentTodos: notDoneTodos}
                }

                return {...state, doneTodos: doneTodos, notDoneTodos: notDoneTodos}
            } else {
                let notDoneTodos = state.notDoneTodos
                notDoneTodos.push(todo)
                let doneTodos = state.doneTodos.filter(t => t.id !== todo.id)
                if (state.currentTodos === state.doneTodos) {
                    return {...state, doneTodos: doneTodos, notDoneTodos: notDoneTodos, currentTodos: doneTodos}
                }

                return {...state, doneTodos: doneTodos, notDoneTodos: notDoneTodos}
            }
        case TodoActions.CHANGE_CURRENT_TODOS:
            let current: Todo[] = [];
            if (action.payload === 1) {
                current = state.todos
            }
            if (action.payload === 2) {
                current = state.doneTodos
            }
            if (action.payload === 3) {
                current = state.notDoneTodos
            }
            return {...state, currentTodos: current}
        case TodoActions.SHOW_MODAL:
            return {...state, showModal: action.payload}
        case TodoActions.CHANGE_INPUT_NAME:
            return {...state, inputName: action.payload}
        case TodoActions.CHANGE_INPUT_DESCRIPTION:
            return {...state, inputDescription: action.payload}
        case TodoActions.CHANGE_SEARCH_QUERY:
            let query = action.payload
            if (!query) {
                if (state.currentTodos === state.doneTodos) {
                    return {...state, searchQuery: query, currentTodos: state.doneTodos}
                }
                if (state.currentTodos === state.notDoneTodos) {
                    return {...state, searchQuery: query, currentTodos: state.notDoneTodos}
                }

                return {...state, searchQuery: query, currentTodos: state.todos}
            } else {
                let newCurrent: Todo[] = state.todos.filter((todo: Todo) => {
                    return todo.name.toLowerCase().includes(query.toLowerCase())
                })

                return {...state, searchQuery: query, currentTodos: newCurrent}
            }
        default:
            return state
    }
}