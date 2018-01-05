import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import BarMenu from "../components/bar-menu";
import Patient from "../../patients/containers/patient";

class HomeView extends Component {
  state = {
    isOpen: false
  };

  toggle = event => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <HomeLayout>
        <BarMenu isOpen={this.state.isOpen} onClick={this.toggle} />
        <Patient />
      </HomeLayout>
    );
  }
}

export default HomeView;
