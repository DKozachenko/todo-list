import React from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
const TodoNavigate = () => {
    const reducer = useTypedSelector(state => state.todoReducer)
    const allTodos = reducer.todos.length
    const doneTodos = reducer.doneTodos
    const notDoneTodos = reducer.notDoneTodos
    const {changeLimit} = useAction()



    return (
        <div className="row mb-4 d-flex justify-content-center">
            <div className="col-7">
                <nav className="navbar navbar-light bg-light">
                    <form className="container justify-content-between">
                        <button className="btn btn-outline-secondary me-2"
                                type="button"
                                onClick={() => {changeLimit(null)}}
                        >All todos
                            <span className="ms-2 badge bg-success">{allTodos}</span>
                        </button>
                        <button className="btn btn-outline-secondary me-2"
                                type="button"
                                onClick={() => {changeLimit(true)}}
                        >Done todos
                            <span className="ms-2 badge bg-success">{doneTodos}</span>
                        </button>
                        <button className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => {changeLimit(false)}}
                        >Not done todos
                            <span className="ms-2 badge bg-success">{notDoneTodos}</span>
                        </button>
                    </form>
                </nav>
            </div>

        </div>
    );
};

export default TodoNavigate;