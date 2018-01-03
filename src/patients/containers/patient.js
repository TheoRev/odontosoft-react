import React, { Component } from "react";
import Patients from "../components/patients";
import PatientService from "../../services/patient";
import request from "superagent";
// import axios from "axios";

class Patient extends Component {
  state = {
    servPatients: new PatientService(),
    listPatients: []
  };
  componentDidMount() {
    // debugger;

    // this.state.listPatients = this.state.servPatients.getAllPatients();

    request.get("http://localhost:3030/api/patients/").end((err, resp) => {
      const pacientes = JSON.parse(resp.text);
      // console.log(pacientes);
      this.setState({ listPatients: pacientes });
    });

    // this.state.listPatients = this.state.servPatients.getAllPatients();

    // this.state.listPatients = axios({
    //   method: "get",
    //   url: "http://localhost:3030/api/patients/"
    // }).then(data => data.data);
    // console.log(this.state.listPatients);
  }
  render() {
    // console.log("Response:");
    // console.log(this.state.listPatients);
    return <Patients listPatients={this.state.listPatients} />;
  }
}

export default Patient;
