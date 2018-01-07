import React, {Component} from "react";
import Patients from "../components/patients";
import PatientService from "../../services/patient";
import request from "superagent";
import FormPatient from "../components/form-patient";

class Patient extends Component {
  moment = require("moment");
  state = {
    dark: "true",
    height: "300px",
    servPatients: new PatientService(),
    listPatients: [],
    modal: false,
    ID: 0,
    dateInit: this
      .moment(new Date())
      .format("YYYY-MM-DD"),
    // dateInit:'',
    nomApe: '',
    age: '',
    masc: true,
    fem: false,
    sex: '',
    dateNac: '',
    address: '',
    ocupation: '',
    telCel: '',
    alergies: '',
    operations: '',
    diabettes: false,
    hipertension: false,
    others: '',
    treatMedics: '',
    state: true
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  setId = (event) => {
    this.setState({ID: event.target.value})
  };

  setDateInit = (event) => {
    this.setState({dateInit: event.target.value});
  };

  setNomApe = (event) => {
    this.setState({nomApe: event.target.value});
  };

  setAge = (event) => {
    this.setState({age: event.target.value});
  };

  setSex = (event) => {
    // console.log(event.target.value);
    this.setState({sex: event.target.value});
  };

  setFecNac = (event) => {
    this.setState({dateNac: event.target.value});
  };

  setAddress = (event) => {
    this.setState({address: event.target.value});
  };

  setOcupation = (event) => {
    this.setState({ocupation: event.target.value});
  };

  setTelefCel = (event) => {
    this.setState({telCel: event.target.value});
  };
  setAlergies = (event) => {
    this.setState({alergies: event.target.value});
  };
  setOperations = (event) => {
    this.setState({operations: event.target.value});
  };

  setDiabettes = (event) => {
    this.setState({diabettes: event.target.checked});
  };

  setHipertension = (event) => {
    this.setState({hipertension: event.target.checked});
  };

  setOthers = (event) => {
    this.setState({others: event.target.value});
  };

  setTreatMedics = (event) => {
    this.setState({treatMedics: event.target.value});
  };

  execute = (event) => {
    this.createPatient();
    event.preventDefault();
    // console.log(event.target.value);
  };

  createPatient = () => {
    console.log("Creating patient...")
    request
      .post("localhost:3030/api/crud/patients/")
      .send({
        ID: 0,
        dateInit: this
          .moment(this.state.dateInit)
          .format(),
        nomApe: this.state.nomApe,
        age: this.state.age,
        sex: this.state.sex,
        dateNac: this
          .moment(this.state)
          .format(),
        address: this.state.address,
        ocupation: this.state.ocupation,
        telCel: this.state.telCel,
        alergies: this.state.alergies,
        operations: this.state.operations,
        diabettes: this.state.diabettes,
        hipertension: this.state.hipertension,
        others: this.state.others,
        treatMedics: this.state.treatMedics,
        state: true
      })
      .set('Accept', 'application/json')
      .then((res) => {
        console.log(res);
        alert(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    request
      .get("http://localhost:3030/api/patients/")
      .end((err, resp) => {
        const pacientes = JSON.parse(resp.text);
        // console.log(pacientes);
        this.setState({listPatients: pacientes});
      });
  }

  render() {
    // console.log("Response:");
    console.log(this.state.listPatients);
    // console.log(JSON.stringify(this.state.listPatients));
    return (
      <div>
        <Patients
          dark={this.state.dark}
          listPatients={this.state.listPatients}
          toggle={this.toggle}/>
        <FormPatient
          modal={this.state.modal}
          toggle={this.toggle}
          execute={this.execute}
          ID={this.state.ID}
          dateInit={this.state.dateInit}
          nomApe={this.state.nomApe}
          age={this.state.age}
          masc={this.state.masc}
          fem={this.state.fem}
          sex={this.state.sex}
          dateNac={this.state.dateNac}
          address={this.state.address}
          ocupation={this.state.ocupation}
          telCel={this.state.telCel}
          alergies={this.state.alergies}
          operations={this.state.operations}
          diabettes={this.state.diabettes}
          hipertension={this.state.hipertension}
          others={this.state.others}
          treatMedics={this.state.treatMedics}
          setId={this.setId}
          setDateInit={this.setDateInit}
          setNomApe={this.setNomApe}
          setAge={this.setAge}
          setSex={this.setSex}
          setFecNac={this.setFecNac}
          setAddress={this.setAddress}
          setOcupation={this.setOcupation}
          setTelefCel={this.setTelefCel}
          setAlergies={this.setAlergies}
          setOperations={this.setOperations}
          setDiabettes={this.setDiabettes}
          setHipertension={this.setHipertension}
          setOthers={this.setOthers}
          setTreatMedics={this.setTreatMedics}/>
      </div>
    );
  }
}

export default Patient;
