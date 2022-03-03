import React, {useMemo, useState} from "react";
import './App.css';
import Todo from "./components/Todo/Todo";
import ButtonAdd from "./components/ButtonAdd/ButtonAdd";
import Title from "./components/Title/Title";
import Search from "./components/Search/Search";
import Sort from "./components/Sort/Sort";


function App() {
  let [todos, setTodos] = useState([
    {number: 1, name: 'Buy bread'},
    {number: 2, name: 'Buy milk'},
  ])

  let [query, setQuery] = useState('')
  let [sort, setSort] = useState('')

  let searchTodos = useMemo(() => {
      return todos.filter(todo => todo.name.toLowerCase().includes(query.toLowerCase()));
  }, [query, todos])

  let sortAndSearchTodos = useMemo(() => {
    if (sort) {
      return [...searchTodos].sort((a, b) => a[sort].localeCompare(b[sort]));;
    } else {
      return searchTodos;
    }
  }, [searchTodos, sort])

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
    for (let i = 0; i < newTodos.length; ++i) {
      newTodos[i].number = i + 1;
    }
    setTodos(newTodos);
  }

  return (
    <main className="p-4">
      <div className="container">
        <Title/>
        <Search setQuery={setQuery}/>
        <Sort setSort={setSort}/>
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            {
              sortAndSearchTodos.map(todo => {
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
