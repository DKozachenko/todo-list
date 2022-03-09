import {TodoAction, TodoActions, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: [],
    limit: null
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            let todos = state.todos;
            todos.push(action.payload);
            return {todos: todos, limit: null}
        case TodoActions.CHANGE_LIMIT:
            let todos2 = state.todos
            return {todos: todos2, limit: action.payload}
        default:
            return state
    }
}