import React, {useEffect} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Todo} from "../../types/todo";
import {useAction} from "../../hooks/useAction";
import TodoItem from "../Todo/TodoItem";

const TodoList: React.FC = () => {
    const reducer = useTypedSelector(state => state.todoReducer)
    let todos = reducer.todos
    let limit = reducer.limit

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
        </div>
    );
};

export default TodoList;