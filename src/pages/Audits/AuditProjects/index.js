import React, { useState } from 'react';
import {
    Container,
    Row,
    Button,
    Col,
    FormGroup,
    Card,
    CardHeader,
    CardBody,
    Label,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import { Link } from 'react-router-dom';

const auditProjectTableData = [];

const AuditProjects = () => {
    document.title = 'Audit Projects';
    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Audit Projects" pageTitle="Audit Projects" />
                    <Row>
                        <Col>
                            <p>Use a Readiness Project to start an Audit</p>
                            <Card>
                                <CardHeader className="d-flex align-items-center justify-content-end">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => tog_standard()}>
                                        <i className="las la-plus mr-sm-2"></i>Create Permission
                                    </button>
                                </CardHeader>
                                <CardBody>
                                    <Grid
                                        data={auditProjectTableData}
                                        columns={[
                                            {
                                                name: 'Name',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                            {
                                                name: 'Readiness Project',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                            {
                                                name: 'Framework',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                            {
                                                name: 'Request Date',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                            {
                                                name: 'Observation Period',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                        ]}
                                        search={true}
                                        sort={true}
                                        pagination={{ enabled: true, limit: 20 }}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Modal
                        id="myModal"
                        isOpen={modal_standard}
                        toggle={() => {
                            tog_standard();
                        }}>
                        <ModalBody>
                            <form action="#">
                                <div className="row g-3">
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Name" className="form-label">
                                                Audit Name
                                            </label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="Name"
                                                placeholder="Enter Audit Name"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <div>
                                            <label
                                                htmlFor="SearchReadinessProject"
                                                className="form-label">
                                                Associated Readiness Project
                                            </label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="SearchReadinessProject"
                                                placeholder="Search for Readiness Project"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Frameworks" className="form-label">
                                                Framework(s)
                                            </label>
                                            <Input id="Frameworks" name="select" type="select">
                                                <option>Choose Framework</option>
                                            </Input>
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <FormGroup check>
                                            <Input type="checkbox" id="procedureOption" />
                                            <Label for="procedureOption" check>
                                                Include procedures in the project
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="12">
                                        <FormGroup>
                                            <Label for="AuditRequestDate">Audit Request Date</Label>
                                            <Input
                                                id="AuditRequestDate"
                                                name="date"
                                                placeholder="Select Date"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <p className='fw-bold'>Observation Period</p>
                                    <Col
                                        sm="12"
                                        className="d-flex align-items-center justify-content-between">
                                        <FormGroup>
                                            <Label for="AuditRequestDate"> Start Date</Label>
                                            <Input
                                                id="AuditRequestDate"
                                                name="date"
                                                placeholder="Select Date"
                                                type="date"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="AuditRequestDate">End Date</Label>
                                            <Input
                                                id="AuditRequestDate"
                                                name="date"
                                                placeholder="Select Date"
                                                type="date"
                                            />
                                        </FormGroup>
                                    </Col>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="light"
                                onClick={() => {
                                    tog_standard();
                                }}>
                                Close
                            </Button>
                            <Button color="primary">Create</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AuditProjects;
