import React from 'react';
import Title from "../Title/Title";
import TodoNavigate from "../TodoNavigate/TodoNavigate";
import TodoList from "../TodoList/TodoList";
import Modal from "../Modal/Modal";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Page = () => {
    const {showModal} = useTypedSelector(state => state.todoReducer)

    return (
        <main className="py-4 min-vh-100">
            <div className="container">
                <Title/>
                <TodoNavigate/>
                <TodoList/>

                {
                    showModal && <Modal/>
                }
            </div>
        </main>
    );
};

export default Page;