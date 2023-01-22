import React, { useState } from 'react';
import {
    Container,
    Row,
    Button,
    Col,
    Card,
    CardBody,
    CardHeader,
    Input,
    Modal,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import { Link } from 'react-router-dom';

const users = [
    {
        name: 'Super Admin',
        description: 'All Permission',
        slug: 'super-admin',
    },
    {
        name: 'Admin',
        description: 'All Permission',
        slug: 'admin',
    },
];

const editHandler = e => {
    console.log(e);
};

const Permissions = () => {
    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    document.title = 'Permissions';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Permissions" pageTitle="Permissions" />
                    <Row>
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-end">
                                <button className="btn btn-primary" onClick={() => tog_standard()}>
                                    <i className="las la-plus mr-sm-2"></i>Create Permission
                                </button>
                            </CardHeader>
                            <CardBody>
                                <Grid
                                    data={users}
                                    columns={[
                                        {
                                            name: 'Name',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        {
                                            name: 'Description',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        {
                                            name: 'Action',
                                            formatter: cell =>
                                                _(
                                                    <div className="hstack gap-2">
                                                        <button
                                                            className="btn btn-sm btn-soft-info edit-list"
                                                            onClick={() => editHandler(cell)}>
                                                            <i className="ri-pencil-fill align-bottom" />
                                                        </button>
                                                        <button className="btn btn-sm btn-soft-danger remove-list">
                                                            <i className="ri-delete-bin-5-fill align-bottom" />
                                                        </button>
                                                    </div>,
                                                ),
                                        },
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
                        <ModalBody>
                            <form action="#">
                                <div className="row g-3">
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Name" className="form-label">
                                                Permission Name
                                            </label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="Name"
                                                placeholder="Enter Permission Name"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <label htmlFor="permissionDesc" className="form-label">
                                            Permission Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="permissionDesc"
                                            rows="3"></textarea>
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

export default Permissions;
