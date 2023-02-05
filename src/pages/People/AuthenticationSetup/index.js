import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Label,
    Input,
    FormGroup,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

const AuthenticationSetup = () => {
    document.title = 'Authentication';
    const [state, setState] = useState(true);
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Authentication" pageTitle="Authentication" />
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader className="d-flex">
                                    <FormGroup switch>
                                        <Input type="switch" role="switch" />
                                        <Label check>Disabled</Label>
                                    </FormGroup>
                                </CardHeader>
                                <CardBody>
                                    <p>
                                        Multifactor authentication (MFA) is a security system that
                                        requires more than one method of authentication from
                                        independent categories of credentials to verify the user's
                                        identity for a login or other transaction. Tugboat Logic
                                        supports the SMS-based and Time-Based One-Time Password
                                        (TOTP) methods of MFA. In the TOTP method, you will be asked
                                        to scan a QR image using a TOTP application, such as Google
                                        Authenticator, Authy, or a similar app.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AuthenticationSetup;
