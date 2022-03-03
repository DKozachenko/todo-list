import React from 'react';

const Sort = ({ setSort }) => {
  return (
    <div className="row mb-4">
      <div className="col-12 d-flex justify-content-center">
        <select className="form-select w-50" aria-label="Default select example" onChange={(e) => setSort(e.target.value)}>
          <option disabled selected>Select</option>
          <option value="name">By name</option>
        </select>
      </div>
    </div>
  );
};

export default Sort;