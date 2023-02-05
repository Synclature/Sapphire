import React from 'react';
import { Container, Button, Row, Col, Card, ListGroup, CardBody, ListGroupItem } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const TrainingGroup = () => {
    document.title = 'Training Group';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Technical Staff" pageTitle="Technical Staff" />
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <h5>Group Description</h5>
                                    <p>
                                        Training group for users who require technical awareness
                                        training.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <div>
                                        <p className="fw-bold">Policies</p>
                                    </div>

                                    <ListGroup flush>
                                        <ListGroupItem>Server Security</ListGroupItem>
                                        <ListGroupItem>Workstation and Mobile Device</ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Card>
                                <CardBody>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="fw-bold">Users</p>
                                        <Button
                                            color="primary"
                                            outline
                                            className="btn btn-ghost-primary">
                                            Add Users
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TrainingGroup;
