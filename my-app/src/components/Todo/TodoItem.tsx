import React from 'react';
import {Todo} from "../../types/todo";
import {useAction} from "../../hooks/useAction";

const TodoItem = ({ todo }: {todo: Todo}) => {
    const {changeTodoStatus} = useAction()

    return (
        <div className="row w-100 d-flex justify-content-center">
            <div className="col-lg-6 col-12 d-flex align-items-center rounded-2 border border-2 border-success mb-4 p-3">
                    <div className="w-100 d-flex">
                        <div className="w-75 d-flex flex-wrap">
                            <div className="me-3 fs-5">{todo.id}</div>
                            <div className="m-0 fs-5 w-auto text-break">{todo.name}</div>
                            <div className="m-0 fs-6 w-100 text-break">{todo.description}</div>
                        </div>

                        <div className="w-25 d-flex justify-content-end align-items-center">
                            <div className="form-check form-switch">
                                <input className="form-check-input"
                                       type="checkbox"
                                       role="switch"
                                       id="flexSwitchCheckDefault"
                                       checked={todo.isDone}
                                       onChange={() => {changeTodoStatus(todo)}}
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    );
};

export default TodoItem;