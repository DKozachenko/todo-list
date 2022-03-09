import {Todo, TodoAction, TodoActions} from "../../types/todo";
import {Dispatch} from "redux";

export const addTodo = (todo: Todo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.ADD_TODO, payload: todo})
    }
}

export const changeLimit = (limit: boolean | null) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.CHANGE_LIMIT, payload: limit})
    }
}

