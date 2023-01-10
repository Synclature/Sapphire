import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const VendorQuestionnaire = () => {
    document.title = 'Vendor Questionnaire';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Vendor Questionnaire" pageTitle="Vendor Questionnaire" />
                    <Row></Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default VendorQuestionnaire;
