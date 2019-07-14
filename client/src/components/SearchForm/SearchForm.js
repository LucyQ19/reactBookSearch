import React from 'react';
import './SearchForm.css';

function SearchForm(props) {
    return (
        <div className="card border-danger searchContainer">
            <div className="card-body text-danger">
                <h5 className="card-title">Book Search</h5>
                <form>
                    <div class="form-group">
                        <label className="bookSearchLabel">Book Search: </label>
                        <input className="col-12 form-control" 
                                value={props.search}
                                type="text"
                                name="searchBook"
                                placeholder="Book Title"
                                onChange={props.handleInputChange}/>
                    </div>
                    <button type="submit" className="btn btn-outline-danger" onClick={props.handleFormSubmit}>Search <i class="fas fa-search"></i></button>
                </form>
            </div>
        </div>
    )
};

export default SearchForm;