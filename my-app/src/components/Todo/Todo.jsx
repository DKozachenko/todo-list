import React, {useState} from 'react';

const Todo = ({ todo, done, change }) => {
  let [name, setName] = useState(todo.name)

  return (
    <div className="d-flex align-items-center w-50 border border-2 border-success mb-4 p-3">
      <div className="fs-3 me-3">{todo.number}</div>
      <div className="input-group w-50 me-2">
        <input type="text" className="form-control" placeholder="Name..."
               aria-describedby="basic-addon1"
               value={name}
               onChange={(e) => setName(e.target.value)}
        />
      </div>

      <button
        className="btn btn-success button__add rounded rounded-"
        onClick={() => {change(todo.number, name)}}
      >Save
      </button>

      <button
        className="ms-auto btn btn-success"
        onClick={() => done(todo)}
      >Done</button>
    </div>
  );
};

export default Todo;