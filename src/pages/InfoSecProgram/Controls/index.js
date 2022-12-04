import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const ControlTableData = [
    [
        'A.5.1.1 - Policies for Information Sec',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.6.1.1 - Information Security Roles and Responsibilities',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    ['A.6.1.2 - Segregation of Duties', 'Access Control', '', '', 'No Assignee', 'Not Implemented'],
    [
        'A.6.1.3 - Contact with Authorities',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.6.2.2 - Teleworking',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.7.1.1 - Screening',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.7.2.1 - Management Responsibilities',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.7.2.2 - Information Security Aware',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
];

const Controls = () => {
    document.title = 'Control';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Control" pageTitle="Dashboard" pageTitleUrl="/" />
                    <Row>
                        <Col>
                            <Grid
                                data={ControlTableData}
                                columns={[
                                    {
                                        name: 'Name',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    'Category',
                                    'Framework Codes',
                                    'Tag',
                                    {
                                        name: 'Assignee',
                                        formatter: cell =>
                                            _(<span className="badge bg-primary">{cell}</span>),
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

export default Controls;
