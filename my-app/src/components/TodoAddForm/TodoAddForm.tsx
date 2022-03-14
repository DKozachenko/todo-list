import React from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const TodoAddForm: React.FC = () => {
    const {inputName, inputDescription} = useTypedSelector(state => state.todoReducer)
    const {changeInputName, changeInputDescription} = useAction()

    return (
        <div className="row d-flex justify-content-center mb-2">
            <div className="col-12">
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"
                               className="form-control"
                               id="name" placeholder="Name..."
                               value={inputName}
                               onChange={(e) => {changeInputName(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea
                               className="form-control"
                               id="description"
                               placeholder="Description..."
                               value={inputDescription}
                               onChange={(e) => {changeInputDescription(e.target.value)}}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoAddForm;