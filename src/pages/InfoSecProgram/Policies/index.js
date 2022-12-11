import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
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
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Policies" pageTitle="Policies" />
                    <Row>
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
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Policies;
