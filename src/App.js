import React from 'react';
import logo from './ispanskijshuanom.png';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import GoogleAuth from './GoogleAuth';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="card mx-auto text-center shadow p-3 mb-5 bg-white rounded" style={{width: "18rem", marginTop: "40px"}}>
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Испанский с Хуаном</h5>
            <p className="card-text">Youtube Analytics for channel Испанский с Хуаном.</p>
            <GoogleAuth />
          </div>
        </div>
      </div> 
    );

  }
}


export default App;
