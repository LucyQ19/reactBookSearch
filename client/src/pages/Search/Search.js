import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import Container from '../../components/Grid/Container'
import SearchForm from '../../components/SearchForm/SearchForm';
import Footer from '../../components/Footer/Footer'

import API from "../../utils/API";


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
            const title = this.state.title;

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
        if (this.state.toResults) {
            return <Redirect to={{
                pathname: "/resulsts",
                data: { results: this.state.results }
            }} />
        }
        return (
            <div>
                <NavBar />
                <Jumbotron />
                <Container />
                    <SearchForm 
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit} />
                <Footer />
            </div>
        );
    }
};

export default Search;