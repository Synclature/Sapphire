import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const auditFindingsTableData = [];

const AuditsFindings = () => {
    document.title = 'Audits Findings';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Audits Findings" pageTitle="Audits Findings" />
                    <Row>
                        <Col>
                            <p>Use a Readiness Project to start an Audit</p>
                            <Grid
                                data={auditFindingsTableData}
                                columns={[
                                    {
                                        name: 'Finding',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Control name',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'ID',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Assignee',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Due Date',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Audit Project',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    {
                                        name: 'Status',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
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

export default AuditsFindings;
