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

export const doneTodo = (todo: Todo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.DONE_TODO, payload: [todo, !todo.isDone]})
    }
}

export const changeShowModal = (show: boolean) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.SHOW_MODAL, payload: show})
    }
}

export const changeInputName = (newName: string) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.CHANGE_INPUT_NAME, payload: newName})
    }
}

export const changeInputDescription = (newDesc: string) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.CHANGE_INPUT_DESCRIPTION, payload: newDesc})
    }
}

