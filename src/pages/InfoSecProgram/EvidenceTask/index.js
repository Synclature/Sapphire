import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const evidenceTasksTableData = [
    [
        'Signed Customer Contract or EULA',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'in progress',
    ],
    [
        'Documented and Approved Privacy Policy',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'in progress',
    ],
    [
        'Population 8 - List of Customers',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'idle',
    ],
    [
        'Backup and Restore Policy',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'idle',
    ],
    [
        'Backup Schedule',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'success',
    ],
    [
        'Population 4 - List of In-scope Systems and Permissions',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'success',
    ],
];

const EvidenceTask = () => {
    document.title = 'Evidence Task';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Evidence Task" pageTitle="Dashboard" pageTitleUrl="/" />
                    <Row>
                        <Col>
                            <p></p>
                            <Grid
                                data={evidenceTasksTableData}
                                columns={[
                                    {
                                        name: 'Evidence Task',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    'Product Scope',
                                    {
                                        name: 'Associated Controls/Policies',
                                        formatter: cell => _(<span>{cell}</span>),
                                    },
                                    'Interval',
                                    {
                                        name: 'Assignee',
                                        formatter: cell => _(<span>{cell}</span>),
                                    },
                                    'Last Collected',
                                    {
                                        name: 'Overall Status',
                                        formatter: cell =>
                                            _(
                                                cell === 'idle' ? (
                                                    <i className="mdi mdi-circle text-light"></i>
                                                ) : cell === 'in progress' ? (
                                                    <i className="mdi mdi-circle text-warning"></i>
                                                ) : (
                                                    <i className="mdi mdi-circle text-success"></i>
                                                ),
                                            ),
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

export default EvidenceTask;
