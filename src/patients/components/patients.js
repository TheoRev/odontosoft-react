import React from "react";
import { Table, Card, Button, CardTitle, Row, Col, CardBody } from "reactstrap";
import * as FontAwesome from "react-icons/lib/fa";
import "./patients.css";

function Patients(props) {
  console.log("Resp 2.");
  console.log(props.listPatients);
  console.log(props.dark);

  const styles = {
    propContainer: { width: 200, overflow: "hidden", margin: "20px auto 0" },
    propToggleHeader: { margin: "20px auto 10px" }
  };

  var moment = require("moment");

  return (
    <div>
      <Row>
        <Col sm="12">
          <Card outline color="primary" className="myCard">
            <CardBody>
              <CardTitle>
                PACIENTES{" "}
                <Button className="newButton" color="info">
                  <FontAwesome.FaPlus />
                  Add
                </Button>
              </CardTitle>
              <Table dark={props.dark} striped>
                <thead className="headerTable">
                  <tr>
                    <th className="smallContentCol">ID</th>
                    <th>Fec. Inicio</th>
                    <th>Nom. y Ape.</th>
                    <th className="smallContentCol">Edad</th>
                    <th className="smallContentCol">Sexo</th>
                    <th>Fec. Nac.</th>
                    <th>Telef./Cel.</th>
                    <th className="smallContentCol">Diab.</th>
                    <th className="smallContentCol">Hiper.</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {props.listPatients.map((row, index) => (
                    <tr key={index}>
                      <td className="smallContentCol">{row.ID}</td>
                      <td>{moment(row.date_init).format("DD/MM/YYYY")}</td>
                      <td>{row.nom_ape}</td>
                      <td className="smallContentCol">{row.age}</td>
                      <td className="smallContentCol">{row.sex}</td>
                      <td>{moment(row.date_nac).format("DD/MM/YYYY")}</td>
                      <td>{row.tel_cel}</td>
                      <td className="smallContentCol">
                        {(() => {
                          return row.diabettes ? (
                            <FontAwesome.FaCheck />
                          ) : (
                            <FontAwesome.FaClose />
                          );
                        })()}
                      </td>
                      <td className="smallContentCol">
                        {(() => {
                          return row.hipertension ? (
                            <FontAwesome.FaCheck />
                          ) : (
                            <FontAwesome.FaClose />
                          );
                        })()}
                      </td>
                      <td className="smallContentCol">
                        <Button
                          color="warning"
                          title={"Modificar - " + row.nom_ape}
                          size="sm"
                        >
                          <FontAwesome.FaPencil />
                        </Button>&nbsp;{" "}
                        <Button
                          color="danger"
                          title={"Eliminar - " + row.nom_ape}
                          size="sm"
                        >
                          <FontAwesome.FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Patients;
