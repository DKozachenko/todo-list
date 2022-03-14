import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Todo} from "../../types/todo";
import TodoItem from "../Todo/TodoItem";
import {useAction} from "../../hooks/useAction";

const TodoList: React.FC = () => {
    const reducer = useTypedSelector(state => state.todoReducer)
    let currentTodos = reducer.currentTodos
    let {changeShowModal} = useAction()

    return (
        <div className="row justify-content-center">
            <div className="col-12 d-flex flex-column align-items-center">
                {currentTodos.map((todo: Todo) => {
                    return <TodoItem key={todo.id} todo={todo}/>
                })}
            </div>

            <div className="col-md-6 col-12 d-flex justify-content-center">
                <button className="btn btn-outline-success w-100"
                        onClick={() => {changeShowModal(true)}}>Add</button>
            </div>
        </div>
    );
};

export default TodoList;