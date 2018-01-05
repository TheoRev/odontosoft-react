import React, { Component } from "react";
import Patients from "../components/patients";
import PatientService from "../../services/patient";
import request from "superagent";
import FormPatient from "../components/form-patient";
// import axios from "axios";

class Patient extends Component {
  state = {
    dark: "true",
    height: "300px",
    servPatients: new PatientService(),
    listPatients: [],
    modal: false
  };
  componentDidMount() {
    request.get("http://localhost:3030/api/patients/").end((err, resp) => {
      const pacientes = JSON.parse(resp.text);
      // console.log(pacientes);
      this.setState({ listPatients: pacientes });
    });
  }

  newPtient() {

  }

  render() {
    // console.log("Response:");
    // console.log(this.state.listPatients);
    return (
      <div>
        <Patients dark={this.state.dark} listPatients={this.state.listPatients} newPtient={this.newPtient} />

        <FormPatient />
      </div>
    );
  }
}

export default Patient;
