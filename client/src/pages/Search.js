import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import ResultsContainer from '../components/ResultsContainer';
import API from "../utils/API";

class Search extends Component {
    state ={
        title: "",
        toResults: false,
        results: []
    };

    handleInputChange = event =>{
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        if(this.state.title) {
            const title = this.state.title.trim();

            API.getNewBooks(title) 
                .then(res => {
                    console.log(res.data.items);

                    this.setState({
                        toResults: true,
                        results: res.data.items
                    });
                }).catch(err => console.log(err));
        }
    }


    render () {
        return (
            <main>
                <div className="container">
                <SearchForm 
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit} />
                </div>
            </main>
        );
    }
};

export default Search;