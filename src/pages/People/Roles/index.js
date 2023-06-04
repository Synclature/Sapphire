import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import { Link } from 'react-router-dom';

const users = [
    {
        name: 'Admin',
        slug: 'admin',
        description: 'Admin User',
    },
    {
        name: 'CISO',
        slug: 'ciso',
        description: 'CISO User',
    },
];

const Roles = () => {
    document.title = 'Roles';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Roles" pageTitle="Roles" />
                    <Row>
                        <Card>
                            <CardBody>
                                <Grid
                                    data={users}
                                    columns={[
                                        {
                                            name: 'Name',
                                            formatter: (cell, row) =>
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
                                                        <button className="btn btn-sm btn-soft-info edit-list">
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
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Roles;
