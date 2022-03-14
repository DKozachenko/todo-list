import React from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Todo} from "../../types/todo";
import TodoItem from "../Todo/TodoItem";
import {useAction} from "../../hooks/useAction";

const TodoList: React.FC = () => {
    const reducer = useTypedSelector(state => state.todoReducer)
    let todos = reducer.todos
    let limit = reducer.limit
    let {changeShowModal} = useAction()

    return (
        <div className="row">
            <div className="col-12 d-flex flex-column align-items-center">
                {todos.map((todo: Todo) => {
                    if (limit !== null) {
                        if (todo.isDone === limit) {
                            return <TodoItem key={todo.id} todo={todo}/>
                        }
                    }
                    else {
                        return <TodoItem key={todo.id} todo={todo}/>
                    }
                })}
            </div>

            <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-outline-success w-50"
                        onClick={() => {changeShowModal(true)}}>Add</button>
            </div>
        </div>
    );
};

export default TodoList;