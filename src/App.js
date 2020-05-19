import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/ContactUs/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="app-wrapper">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
