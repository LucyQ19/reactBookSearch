import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './pages/Search/Search';
// import Saved from './pages/Saved';

// import NavBar from './components/NavBar/NavBar';
// import Jumbotron from './components/Jumbotron/Jumbotron';
// import Footer from './components/Footer/Footer';

class App extends Component {
  render () {
    return (
      <Search />
//       <Router>
//         <div>
//           <NavBar />
//           <Jumbotron />
//           <Switch>
//             <Route exact path="/" component={ Search }/>
//             <Route path="/saved" component={ Saved }/>
//           </Switch>
//           <Footer />
//         </div>
//       </Router>
    );
  }
}

export default App;
