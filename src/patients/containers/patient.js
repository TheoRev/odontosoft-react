import React, { Component } from "react";
import Patients from "../components/patients";
import PatientService from "../../services/patient";
import request from "superagent";
import FormPatient from "../components/frmPatient";

class Patient extends Component {
  state = {
    dark: "true",
    height: "300px",
    servPatients: new PatientService(),
    listPatients: [],
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  componentDidMount() {
    request.get("http://localhost:3030/api/patients/").end((err, resp) => {
      const pacientes = JSON.parse(resp.text);
      // console.log(pacientes);
      this.setState({ listPatients: pacientes });
    });
  }
  render() {
    // console.log("Response:");
    // console.log(this.state.listPatients);
    return (
      <div>
        <Patients
          dark={this.state.dark}
          listPatients={this.state.listPatients}
          toggle={this.toggle}
        />
        <FormPatient modal={this.state.modal} toggle={this.toggle} />
      </div>
    );
  }
}

export default Patient;
