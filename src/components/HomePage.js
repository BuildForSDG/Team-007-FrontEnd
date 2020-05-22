import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.handleNavbar = this.handleNavbar.bind(this);
    this.navState = this.navState.bind(this);
    this.state = {
      navbarOpen: false
    };
  }

  handleNavbar() {
    this.setState((prevState) => ({
      navbarOpen: !prevState.navbarOpen
    }));
  }

  navState() {
    this.setState((prevState) => ({
      navbarOpen: prevState.navbarOpen
    }));
  }

  render() {
    return (
      <>
        <Navbar
          navbarOpen={this.navState}
          handleNavbar={this.handleNavbar}
        />
        <Footer />
      </>
    );
  }
}

export default HomePage;
