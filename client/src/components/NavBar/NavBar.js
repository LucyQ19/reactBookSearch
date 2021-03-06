import React from 'react';
import './NavBar.css';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <a className="navbar-brand" href="/"><i className="fas fa-book-reader"></i> Google Books</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className ="nav-item nav-link active" href="/">New Search <i className="fas fa-search"></i></a>
                <a className ="nav-item nav-link active" href="/saved">Saved Books <i className="fas fa-save"></i></a>
            </div>
        </div>
    </nav>
);

export default NavBar;