import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const itAssets = [
    ['EP-003', 'Endpoints', '5', 'Medium', '01/01/1970', 'Rejected'],
    ['EP-002', 'Endpoints', '5', 'Medium', '01/01/1970', 'Pending'],
    ['EP-001', 'Endpoints', '5', 'Medium', '01/01/1970', 'Approved'],
    ['NW-001', 'Network Devices', '5', 'Medium', '01/01/1970', 'Pending'],
    ['EP-002', 'Endpoints', '5', 'Medium', '01/01/1970', 'Pending'],
    ['SRV-001', 'Servers', '5', 'Medium', '01/01/1970', 'Approved'],
];

const ITAssetManagement = () => {
    document.title = 'IT Asset Management';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="IT Asset Management"
                        pageTitle="Dashboard"
                        pageTitleUrl="/"
                    />
                    <Row>
                        <Col>
                            <p></p>
                            <Grid
                                data={itAssets}
                                columns={[
                                    {
                                        name: 'Asset ID',
                                        formatter: cell =>
                                            _(<span className="fw-semibold">{cell}</span>),
                                    },
                                    'Asset Type',
                                    'Ratings',
                                    'Criticality',
                                    'Warranty',
                                    {
                                        name: 'Status',
                                        formatter: cell =>
                                            _(
                                                cell.toLowerCase() === 'pending' ? (
                                                    <span className="fw-semibold text-warning">
                                                        Pending
                                                    </span>
                                                ) : cell.toLowerCase() === 'rejected' ? (
                                                    <span className="fw-semibold text-danger">
                                                        Rejected
                                                    </span>
                                                ) : (
                                                    <span className="fw-semibold text-success">
                                                        Approved
                                                    </span>
                                                ),
                                            ),
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ITAssetManagement;
