import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {myStore} from "./store";
import TodoList from "./components/TodoList/TodoList";
import Title from "./components/Title/Title";
import TodoAddForm from "./components/TodoAddForm/TodoAddForm";
import TodoNavigate from "./components/TodoNavigate/TodoNavigate";

function App() {
  return (
      <Provider store={myStore}>
          <main className="p-4">
              <div className="container">
                  <Title/>
                  <TodoAddForm/>
                  <TodoNavigate/>
                  <TodoList/>
              </div>
          </main>
      </Provider>
  );
}

export default App;
