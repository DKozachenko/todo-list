import React from 'react';
import {useAction} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Search = () => {
    const {searchQuery} = useTypedSelector(state => state.todoReducer)
    const {changeSearch} = useAction()

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search..."
                        value={searchQuery}
                           onChange={(e) => {changeSearch(e.target.value)}}
                    />
                </div>
            </div>
        </div>

    );
};

export default Search;