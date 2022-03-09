import React, {useRef, useState} from 'react';
import {useAction} from "../../hooks/useAction";
import {Todo} from "../../types/todo";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const TodoAddForm: React.FC = () => {
    const {todos} = useTypedSelector(state => state.todoReducer)
    const {addTodo} = useAction()

    let [inputName, setInputName] = useState('')
    let [inputDescription, setDescriptionName] = useState('')

    const add = (event: any) => {
        event.preventDefault()
        const newTodo: Todo = {
            id: todos.length + 1,
            name: inputName,
            description: inputDescription,
            isDone: false
        }

        addTodo(newTodo)
        setDescriptionName('')
        setInputName('')
    }

    const handleInputNameChanges = (event: any) => {
        setInputName(event.target.value)
    }

    const handleInputDescriptionChanges = (event: any) => {
        setDescriptionName(event.target.value)
    }

    return (
        <div className="row d-flex justify-content-center mb-2">
            <div className="col-6">
                <form onSubmit={add}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name" placeholder="Name..."
                               value={inputName}
                               onChange={handleInputNameChanges}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               placeholder="Description..."
                               value={inputDescription}
                               onChange={handleInputDescriptionChanges}/>
                    </div>

                    <button className="btn btn-success w-100" type="submit">Add todo</button>
                </form>
            </div>
        </div>
    );
};

export default TodoAddForm;