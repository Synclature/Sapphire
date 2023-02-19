import React, { useState } from 'react';
import {
    Container,
    Row,
    Button,
    Col,
    Card,
    CardBody,
    CardHeader,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const policiesTableData = [
    ['Network Security', 'Information and Communication', 'Abhishek', 'Gajodhar', 'Published'],
    ['Access Control', 'Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    ['Change Management', 'Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    ['Server Security', 'Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    [
        'Business Continuity and Disaster Recovery',
        'Access Control',
        'Akhilesh',
        'Ramesh',
        'Published',
    ],
];

const Policies = () => {
    document.title = 'Policies';

    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Policies" pageTitle="Policies" />
                    <Row>
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-end">
                                <button className="btn btn-primary" onClick={() => tog_standard()}>
                                    <i className="las la-plus mr-sm-2"></i>Create Policy
                                </button>
                            </CardHeader>
                            <CardBody>
                                <Grid
                                    data={policiesTableData}
                                    columns={[
                                        {
                                            name: 'Policy Name',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        'Category',
                                        {
                                            name: 'Assignee',
                                            formatter: cell =>
                                                _(<span className="badge bg-primary">{cell}</span>),
                                        },
                                        {
                                            name: 'Reviewer',
                                            formatter: cell =>
                                                _(<span className="badge bg-info">{cell}</span>),
                                        },
                                        'Status',
                                    ]}
                                    search={true}
                                    sort={true}
                                    pagination={{ enabled: true, limit: 20 }}
                                />
                            </CardBody>
                        </Card>
                    </Row>

                    <Modal
                        id="myModal"
                        isOpen={modal_standard}
                        toggle={() => {
                            tog_standard();
                        }}>
                        <ModalHeader>
                            <p>Create Policy</p>
                        </ModalHeader>
                        <ModalBody>
                            <form action="#">
                                <div className="row g-3">
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Name" className="form-label">
                                                Name
                                            </label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="Name"
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Summary" className="form-label">
                                                Summary
                                            </label>
                                            <Input
                                                type="textarea"
                                                className="form-control"
                                                id="summary"
                                                placeholder="Enter Summary"
                                            />
                                        </div>
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

export default Policies;
