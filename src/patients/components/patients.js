import React from "react";
import { DataTable, Column } from "primereact/components/datatable/DataTable";

function Patients(props) {
  // console.log("Resp 2.");
  // console.log(props.listPatients);

  return (
    <div>
      <DataTable value={props.listPatients}>
        <Column field="ID" header="ID" />
        <Column field="date_init" header="Fec. Inicio" />
        <Column field="nom_ape" header="Nomb. y Ape." filter={true} />
        <Column field="age" header="Edad" />
      </DataTable>
    </div>
  );
}

export default Patients;
