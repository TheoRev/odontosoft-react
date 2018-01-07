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
                size={"lg"}>
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
                                        <Input
                                            type="text"
                                            name="txtId"
                                            disabled
                                            bsSize="sm"
                                            value={props.ID}
                                            onChange={props.setId}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Fecha</Label>
                                        <Input
                                            type="date"
                                            name="txtFecha"
                                            bsSize="sm"
                                            value={props.dateInit}
                                            onChange={props.setDateInit}
                                            required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Nombre y Ape.</Label>
                                        <Input
                                            type="text"
                                            name="txtNomApe"
                                            bsSize="sm"
                                            value={props.nomApe}
                                            onChange={props.setNomApe}
                                            required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Edad</Label>
                                        <Input
                                            type="text"
                                            name="txtAge"
                                            bsSize="sm"
                                            value={props.age}
                                            onChange={props.setAge}
                                            required/>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Label size="sm">Sexo:</Label>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id="rbMasc" name="rbSex" value='M' onChange={props.setSex} required />
                                                Masculino
                                            </Label>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="radio" id="rbFem" name="rbSex" value='F' onChange={props.setSex} required />
                                                Femenino
                                            </Label>
                                        </FormGroup>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Fec. Nacimiento</Label>
                                        <Input
                                            type="date"
                                            name="txtFecNac"
                                            bsSize="sm"
                                            value={props.dateNac}
                                            onChange={props.setFecNac}
                                            required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Dirección</Label>
                                        <Input
                                            type="text"
                                            name="txtDir"
                                            bsSize="sm"
                                            value={props.address}
                                            onChange={props.setAddress}
                                            required/>
                                    </FormGroup>
                                </div>
                                <div className="col-sm-6">
                                    <FormGroup>
                                        <Label size="sm">Ocupación</Label>
                                        <Input
                                            type="text"
                                            name="txtOcup"
                                            bsSize="sm"
                                            value={props.ocupation}
                                            onChange={props.setOcupation}
                                            required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Telef. / Cel.</Label>
                                        <Input
                                            type="text"
                                            name="txtTelefCel"
                                            bsSize="sm"
                                            value={props.telCel}
                                            onChange={props.setTelefCel}
                                            required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Alergias</Label>
                                        <Input
                                            type="text"
                                            name="txtAlergias"
                                            bsSize="sm"
                                            value={props.alergies}
                                            onChange={props.setAlergies}
                                            required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Operaciones</Label>
                                        <Input
                                            type="text"
                                            name="txtOperaciones"
                                            bsSize="sm"
                                            value={props.operations}
                                            onChange={props.setOperations}
                                            required/>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="cbDiab"
                                                checked={props.diabettes}
                                                onChange={props.setDiabettes}/>
                                            Diabettes
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="cbHiper"
                                                checked={props.hipertension}
                                                onChange={props.setHipertension}/>
                                            Hipertension
                                        </Label>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Otros</Label>
                                        <Input
                                            type="textarea"
                                            name="txtOtros"
                                            bsSize="sm"
                                            value={props.others}
                                            onChange={props.setOthers}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label size="sm">Trat. Médicos</Label>
                                        <Input
                                            type="textarea"
                                            name="txtTratMed"
                                            bsSize="sm"
                                            value={props.treatMedics}
                                            onChange={props.setTreatMedics}/>
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
