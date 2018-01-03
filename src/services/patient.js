import fetch from "isomorphic-fetch";

class PatientService {
  getAllPatients() {
    // debugger;
    const baseUrl = "http://localhost:3030/api/patients/";

    const api = {
      pacientes: {
        async getPatients() {
          const response = await fetch(`${baseUrl}`);
          const data = await response.json();
          // console.log(data);
          return data;
        }
      }
    };

    return api;

    // console.log(api.pacientes);
  }
}

export default PatientService;
