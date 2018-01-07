import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup
} from "reactstrap";

function FomPatient(props) {
    // console.log(props.modal);

    return (
        <div>
            <Modal
                isOpen={props.modal}
                toggle={props.toggle}
                backdrop={"static"}
                size={"lg"}
            >
                <form onSubmit={props.execute}>
                    <ModalHeader toggle={props.toggle}>PACIENTE</ModalHeader>
                    <ModalBody>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <FormGroup>
                                        <Label for="" size="sm">
                                            ID
                                        </Label>
                                        <Input type="text" name="txtId" disabled bsSize="sm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Fecha</Label>
                                        <Input type="date" name="txtFecha" bsSize="sm" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Nombre y Ape.</Label>
                                        <Input type="text" name="txtNomApe" bsSize="sm" required />
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label size="sm">Sexo:</Label>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id="rbMasc" name="rbSex" />
                                                Masculino
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id="rbFem" name="rbSex" />
                                                Femenino
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Fec. Nacimiento</Label>
                                        <Input type="date" name="txtFecNac" bsSize="sm" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Dirección</Label>
                                        <Input type="text" name="txtDir" bsSize="sm" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Ocupación</Label>
                                        <Input type="text" name="txtOcup" bsSize="sm" required />
                                    </FormGroup>
                                </div>
                                <div className="col-sm-6">
                                    <FormGroup>
                                        <Label size="sm">Telef. / Cel.</Label>
                                        <Input type="text" name="txtTelefCel" bsSize="sm" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Alergias</Label>
                                        <Input type="text" name="txtAlergias" bsSize="sm" required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Operaciones</Label>
                                        <Input type="text" name="txtOperaciones" bsSize="sm" required />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="cbDiab" />
                                            Diabettes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="cbHiper" />
                                            Hipertension
                                        </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Otros</Label>
                                        <Input type="textarea" name="txtOtros" bsSize="sm" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Trat. Médicos</Label>
                                        <Input type="textarea" name="txtTratMed" bsSize="sm" />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="success">
                            GUARDAR
                        </Button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>
    );
}

export default FomPatient;
