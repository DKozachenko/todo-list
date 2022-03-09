import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {myStore} from "./store";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
      <Provider store={myStore}>
        <h1>Hello world</h1>
          <TodoList/>
      </Provider>
  );
}

export default App;
