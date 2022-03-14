import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useAction} from "../../hooks/useAction";
import TodoAddForm from "../TodoAddForm/TodoAddForm";
import {Todo} from "../../types/todo";

const Modal = () => {
    const {inputName, inputDescription, todos} = useTypedSelector(state => state.todoReducer)
    const { addTodo, changeShowModal, changeInputName, changeInputDescription} = useAction()

    useEffect(() => {
        document.querySelector('main')?.classList.add('main_modal')
    }, [])


    const closeModal = () => {
        changeShowModal(false);
        document.querySelector('main')?.classList.remove('main_modal')
    }

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
        document.querySelector('main')?.classList.remove('main_modal')
    }

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
                                onClick={() => {closeModal()}}>Close</button>
                        <button type="button"
                                className="btn btn-success"
                                onClick={() => {closeModalAndAddTodo()}}
                        >Add</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Modal;