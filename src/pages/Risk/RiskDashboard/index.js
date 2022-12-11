import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const RiskDashboard = () => {
    document.title = 'Risk Dashboard';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Risk Dashboard" pageTitle="Risk Dashboard" />
                    <Row></Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default RiskDashboard;
