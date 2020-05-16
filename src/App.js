import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from './styles/Global'

class App extends React.Component {

  state = {
    openNavbar: false
  }

  handleNavbar = () => {
    this.setState({
      openNavbar: !this.state.openNavbar
    })
  }

  render() {

    return (
      <div>
        <Navbar
          navbarState={this.state.openNavbar}
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
      </div>
    )
  }
}

export default App;
