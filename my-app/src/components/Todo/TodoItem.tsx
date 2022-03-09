import React from 'react';
import {Todo} from "../../types/todo";

const TodoItem = ({ todo }: {todo: Todo}) => {
    return (
        <div className="d-flex align-items-center w-50 border border-2 border-success mb-4 p-3">
            <div className="w-100 d-flex">
                <div className="w-75 d-flex flex-wrap">
                    <div className="me-3 fs-5">{todo.id}</div>
                    <div className="m-0 fs-5 w-auto text-break">{todo.name}</div>
                    <div className="m-0 fs-6 w-100 text-break">{todo.description}</div>
                </div>

                <div className="w-25 d-flex justify-content-end align-items-center">
                    <button
                        className="btn btn-success"
                    >Done</button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;