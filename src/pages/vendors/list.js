import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import { Link } from 'react-router-dom';

const RiskRegisterData = [
    [
        'Amazon.com Inc',
        'Sync',
        'Technology',
        'High',
        'A',
        'Frederick.Smith@aws.com',
        'Arshdeep Sood',
        'Critical',
        'Active',
    ],
    [
        'Alphabet Inc',
        'Sync',
        'Technology',
        'Low',
        'A',
        'Frederick.Smith@aws.com',
        'Arshdeep Sood',
        'low',
        'Active',
    ],
];

const VendorList = () => {
    document.title = 'Vendor List';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Vendor List" pageTitle="Vendor List" />
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader className="d-flex align-items-center justify-content-end">
                                    <Link
                                        to="/third-party-vendor/questionnaire"
                                        className="btn btn-primary">
                                        <i className="las la-plus mr-sm-2"></i>Add New
                                    </Link>
                                </CardHeader>
                                <CardBody>
                                    <Grid
                                        data={RiskRegisterData}
                                        columns={[
                                            {
                                                name: 'Name',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Organization',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Type',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Criticility',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Vendor Rating',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Primary Vendor Contact',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Business Owner',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Aggregate Risk Level',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '100px',
                                            },
                                            {
                                                name: 'Status',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '100px',
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

export default VendorList;
