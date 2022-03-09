import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";

const TodoNavigate = () => {
    const reducer = useTypedSelector(state => state.todoReducer)
    let limit = reducer.limit
    const {changeLimit} = useAction()

    return (
        <div className="row mb-2 d-flex justify-content-center">
            <div className="col-6">
                <nav className="navbar navbar-light bg-light">
                    <form className="container-fluid justify-content-start">
                        <button className="btn btn-outline-secondary me-2"
                                type="button"
                                // onClick={() => {changeLimit(null)}}
                                onClick={() => {changeLimit(null)}}
                        >All todos</button>
                        <button className="btn btn-outline-secondary me-2"
                                type="button"
                                onClick={() => {changeLimit(true)}}
                        >Done todos</button>
                        <button className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => {changeLimit(false)}}
                        >Not done todos</button>
                    </form>
                </nav>
            </div>

        </div>
    );
};

export default TodoNavigate;