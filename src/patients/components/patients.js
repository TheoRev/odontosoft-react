import React from "react";
import { Table, Card, Button, CardTitle, Row, Col } from "reactstrap";
import * as FontAwesome from 'react-icons/lib/fa';
import './patients.css';


function Patients(props) {
  console.log("Resp 2.");
  console.log(props.listPatients);
  console.log(props.dark);

  const styles = {
    propContainer: { width: 200, overflow: "hidden", margin: "20px auto 0" },
    propToggleHeader: { margin: "20px auto 10px" }
  };

  var moment = require('moment');

  return (
    <div>

      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>PACIENTES <Button className="newButton" color='info'>
              <FontAwesome.FaPlus />
              Add</Button></CardTitle>
            <Table dark={props.dark} striped>
              <thead className="headerTable">
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
                    <td>{
                      moment(row.dateInit).format('DD/MM/YYYY')
                    }</td>
                    <td>{row.nomApe}</td>
                    <td>{row.age}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>


    </div>
  );
}

export default Patients;
