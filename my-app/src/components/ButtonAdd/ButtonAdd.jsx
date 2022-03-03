import React from 'react';

const ButtonAdd = ({ add, len }) => {
  const defaultTodo = {number: len + 1, name: 'Default'};

  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <button
          className="btn btn-success button__add rounded rounded-circle"
          onClick={() => {add(defaultTodo)}}
        >+</button>
      </div>
    </div>
  );
};

export default ButtonAdd;