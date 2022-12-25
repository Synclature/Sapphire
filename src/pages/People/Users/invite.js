import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Input,
    Label,
    Button,
    Form,
    FormFeedback,
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';

import Select from 'react-select';

// Formik validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const InviteUser = () => {
    const [departmentSelect, setDepartmentSelect] = useState(null);
    const [rolesSelect, setRolesSelect] = useState(null);

    function handleDepartmentSelect(departmentSelect) {
        setDepartmentSelect(departmentSelect);
    }

    function handledRolesSelect(rolesSelect) {
        setRolesSelect(rolesSelect);
    }

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({}),
    });

    const department = [{ value: 'Information Security', label: 'Information Security' }];

    const roles = [{ value: 'Information Security', label: 'Information Security' }];

    document.title = 'Invite User';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Invite User" pageTitle="Invite User" />
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader className="d-flex align-items-center justify-content-end">
                                    <Link to="/people/users">
                                        <i className="las la-arrow-left mr-sm-2"></i>Go Back
                                    </Link>
                                </CardHeader>
                                <CardBody>
                                    <Form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                        action="#">
                                        <Row className="mb-4">
                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="firstName" className="form-label">
                                                    First Name
                                                </Label>
                                                <Input
                                                    name="firstName"
                                                    className="form-control"
                                                    placeholder="Enter First Name"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.firstName || ''}
                                                    invalid={
                                                        validation.touched.firstName &&
                                                        validation.errors.firstName
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.firstName &&
                                                validation.errors.firstName ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.firstName}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="lastName" className="form-label">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    name="lastName"
                                                    className="form-control"
                                                    placeholder="Enter Last Name"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.lastName || ''}
                                                    invalid={
                                                        validation.touched.lastName &&
                                                        validation.errors.lastName
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.lastName &&
                                                validation.errors.lastName ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.lastName}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="email" className="form-label">
                                                    Email
                                                </Label>
                                                <Input
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Enter Email"
                                                    type="email"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.email || ''}
                                                    invalid={
                                                        validation.touched.email &&
                                                        validation.errors.email
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.email &&
                                                validation.errors.email ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.email}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="department" className="form-label">
                                                    Department
                                                </Label>
                                                <Select
                                                    name="department"
                                                    value={departmentSelect}
                                                    options={department}
                                                    isMulti={true}
                                                    onChange={() => {
                                                        handleDepartmentSelect();
                                                    }}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="roles" className="form-label">
                                                    Roles
                                                </Label>
                                                <Select
                                                    name="roles"
                                                    value={rolesSelect}
                                                    options={roles}
                                                    isMulti={true}
                                                    onChange={() => {
                                                        handledRolesSelect();
                                                    }}></Select>
                                            </Col>
                                        </Row>

                                        <div className="mt-4 text-end">
                                            <Button
                                                color="success"
                                                className="btn btn-success"
                                                type="submit">
                                                Invite
                                            </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default InviteUser;
