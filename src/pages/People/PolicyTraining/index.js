import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const users = [
    {
        name: 'Technical Staff',
        description: 'Training group for users who require technical awareness training.',
        policies: '2',
        users: '0',
    },
];

const PolicyTraining = () => {
    document.title = 'Policy Training';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Policy Training" pageTitle="Policy Training" />
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader className="d-flex align-items-center justify-content-end"></CardHeader>
                                <CardBody>
                                    <Grid
                                        data={users}
                                        columns={[
                                            {
                                                name: 'Name',
                                                formatter: (cell, row) =>
                                                    _(
                                                        <a
                                                            href={`/people/training-group/sample`}
                                                            className="fw-semibold">
                                                            {cell}
                                                        </a>,
                                                    ),
                                            },
                                            {
                                                name: 'Description',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                            {
                                                name: 'Policies',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                            {
                                                name: 'Users',
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
                </Container>
            </div>
        </React.Fragment>
    );
};

export default PolicyTraining;
