import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const RiskRegister = () => {
    document.title = 'Risk Register';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Risk Register" pageTitle="Risk Register" />
                    <Row></Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default RiskRegister;
