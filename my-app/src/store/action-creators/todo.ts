import {Todo, TodoAction, TodoActions} from "../../types/todo";
import {Dispatch} from "redux";

export const addTodo = (todo: Todo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.ADD_TODO, payload: todo})
    }
}

export const changeTodoStatus = (todo: Todo) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.CHANGE_TODO_STATUS, payload: [todo, !todo.isDone]})
    }
}

export const changeCurrentTodos = (code: number) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.CHANGE_CURRENT_TODOS, payload: code})
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

export const changeSearch = (query: string) => {
    return (dispatch: Dispatch<TodoAction>) => {
        dispatch({type: TodoActions.CHANGE_SEARCH_QUERY, payload: query})
    }
}

