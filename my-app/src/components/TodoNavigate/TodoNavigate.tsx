import React from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
const TodoNavigate = () => {
    const reducer = useTypedSelector(state => state.todoReducer)
    const allTodosCount = reducer.todos.length
    const doneTodosCount = reducer.doneTodos.length
    const notDoneTodosCount = reducer.notDoneTodos.length
    const {changeCurrentTodos} = useAction()

    return (
        <div className="row mb-4 d-flex justify-content-center">
            <div className="col-lg-7 col-12">
                <nav className="navbar navbar-light">
                    <form className="container flex-sm-row flex-column justify-content-between">
                        <button className="btn btn-outline-secondary me-2"
                                type="button"
                                onClick={() => {changeCurrentTodos(1)}}
                        >All todos
                            <span className="ms-2 badge bg-success">{allTodosCount}</span>
                        </button>
                        <button className="btn btn-outline-secondary me-2 mt-sm-0 mt-3"
                                type="button"
                                onClick={() => {changeCurrentTodos(2)}}
                        >Done todos
                            <span className="ms-2 badge bg-success">{doneTodosCount}</span>
                        </button>
                        <button className="btn btn-outline-secondary mt-sm-0 mt-3"
                                type="button"
                                onClick={() => {changeCurrentTodos(3)}}
                        >Not done todos
                            <span className="ms-2 badge bg-success">{notDoneTodosCount}</span>
                        </button>
                    </form>
                </nav>
            </div>

        </div>
    );
};

export default TodoNavigate;