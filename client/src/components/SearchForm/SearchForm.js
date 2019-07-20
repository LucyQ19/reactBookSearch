import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
    return (
        <div className="card border-danger searchContainer">
            <div className="card-body text-danger">
                <h5 className="card-title">Book Search</h5>
                <form id="searchContainer">
                    <div className="form-group">
                        <label form="bookSearch" className="bookSearchLabel">Book Search: </label>
                        <input className="col-12 form-control" 
                                type="text"
                                name="title"
                                label="bookSearch"
                                placeholder="Book Title (required)"
                                onChange={props.handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-outline-danger" onClick={props.handleFormSubmit}>Search <i className="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
};

export default SearchForm;