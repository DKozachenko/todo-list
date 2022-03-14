import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {myStore} from "./store";
import TodoList from "./components/TodoList/TodoList";
import Title from "./components/Title/Title";
import TodoNavigate from "./components/TodoNavigate/TodoNavigate";
import Modal from "./components/Modal/Modal";

function App() {
  return (
      <Provider store={myStore}>
          <main className="p-4">
              <div className="container">
                  <Title/>
                  <TodoNavigate/>
                  <TodoList/>
                  <Modal/>
              </div>

          </main>

      </Provider>
  );
}

export default App;
