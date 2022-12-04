import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const proceduresTableData = [
    ['Network Security', 'Abhishek', 'Gajodhar', 'Published'],
    ['Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    ['Change Management', 'Akhilesh', 'Ramesh', 'Published'],
    ['Server Security', 'Akhilesh', 'Ramesh', 'Published'],
    ['Business Continuity and Disaster Recovery', 'Akhilesh', 'Ramesh', 'Published'],
];

const Procedures = () => {
    document.title = 'Procedures';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Procedures" pageTitle="Dashboard" pageTitleUrl="/" />
                    <Row>
                        <Col>
                            <Grid
                                data={proceduresTableData}
                                columns={[
                                    {
                                        name: 'Name',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                        width: '520',
                                    },
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Procedures;
