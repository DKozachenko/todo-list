import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import TodoAddForm from "../TodoAddForm/TodoAddForm";
import {Todo} from "../../types/todo";

const Modal = () => {
    const {showModal, inputName, inputDescription, todos} = useTypedSelector(state => state.todoReducer)
    const { addTodo, changeShowModal, changeInputName, changeInputDescription} = useAction()

    const closeModalAndAddTodo = () => {
        changeShowModal(false);

        const newTodo: Todo = {
            id: todos.length + 1,
            name: inputName,
            description: inputDescription,
            isDone: false
        }
        addTodo(newTodo)
        changeInputName('')
        changeInputDescription('')
    }

    if (showModal) {
        return (
            <div className="modal d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add todo</h5>
                        </div>
                        <div className="modal-body">
                            <TodoAddForm/>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-outline-success"
                                    data-bs-dismiss="modal"
                                    onClick={() => {changeShowModal(false)}}>Close</button>
                            <button type="button"
                                    className="btn btn-success"
                                    onClick={() => {closeModalAndAddTodo()}}
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Modal;