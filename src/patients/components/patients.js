import React from "react";
import { Table } from "reactstrap";

function Patients(props) {
  console.log("Resp 2.");
  console.log(props.listPatients);
  console.log(props.dark);

  const styles = {
    propContainer: { width: 200, overflow: "hidden", margin: "20px auto 0" },
    propToggleHeader: { margin: "20px auto 10px" }
  };

  return (
    <div>
      <Table dark={props.dark} striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fec. Inicio</th>
            <th>Nom. y Ape.</th>
            <th>Edad</th>
          </tr>
        </thead>

        <tbody>
          {props.listPatients.map((row, index) => (
            <tr key={index}>
              <td>{row.ID}</td>
              <td>{row.date_init}</td>
              <td>{row.nom_ape}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Patients;
