import React from 'react';
import Container from '../Grid/Container';
import './SearchForm.css';

function SearchForm(props) {
    return (
        <Container>
            <div className="card border-danger">
                <div className="card-body text-danger">
                    <h5 className="card-title">Book Search</h5>
                    <form>
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
        <br />
    </Container>
    )
};

export default SearchForm;