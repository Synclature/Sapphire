import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';

const Permission = () => {
    document.title = 'Permission';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Permission" pageTitle="Permission" />
                    <Row>
                        <Card></Card>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Permission;
