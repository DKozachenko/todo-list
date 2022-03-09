import {TodoAction, TodoActions, TodoState} from "../../types/todo";

const initialState: TodoState = {
    todos: []
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            let todos = state.todos;
            todos.push(action.payload);
            return {todos: todos}
        default:
            return state
    }
}