import React, {useState} from "react";
import './App.css';
import Todo from "./components/Todo/Todo";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";


function App() {
  let [todos, setTodos] = useState([
    {number: 1, name: 'Buy bread'},
    {number: 2, name: 'Buy milk'},
  ])

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const changeTodo = (number, name) => {
    let newTodos = [...todos];
    newTodos[number - 1].name = name;
    console.log(newTodos);
  }

  const doneTodo = (todo) => {
    let newTodos = todos.filter(t => t.number !== todo.number);
    console.log(newTodos)
    for (let i = 0; i < newTodos.length; ++i) {
      newTodos[i].number = i + 1;
    }
    setTodos(newTodos);
  }


  return (
    <main className="p-4">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="title">Todo list</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            {
              todos.map(todo => {
                return <Todo key={todo.number} todo={todo} done={doneTodo} change={changeTodo}/>
              })
            }
          </div>
        </div>
        <ButtonAdd add={addTodo} len={todos.length}/>

      </div>

    </main>
  );
}

export default App;
