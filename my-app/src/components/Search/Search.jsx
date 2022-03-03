import React from 'react';

const Search = ({setQuery}) => {
  return (
    <div className="row mb-4">
      <div className="col-12 d-flex justify-content-center align-items-center">
        <p className="fs-4 me-3 mb-0">Search: </p>
        <input type="text" className="form-control w-50" placeholder="Search..."
               onChange={(e) => {setQuery(e.target.value)}}
        />
      </div>
    </div>
  );
};

export default Search;