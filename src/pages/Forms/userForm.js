import React from 'react';
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
} from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';

//Import Flatepicker
import Flatpickr from 'react-flatpickr';

import Select from 'react-select';

// Formik validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
const UserForm = () => {
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            firstName: '',
            fatherName: '',
            lastName: '',
            dob: '',
            designation: '',
            reportingManager: '',
            assetAssigned: '',
            comment: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('Please Enter Your First Name'),
            lastName: Yup.string().required('Please Enter Your Last Name'),
            dob: Yup.string().required('Please Enter Your Date Of Birth'),
            designation: Yup.string().required('Please Enter Your Designation'),
            reportingManager: Yup.string().required('Please Select Your Reporting Manager'),
        }),
    });

    const reportingManagers = [
        { value: 'abhishek', label: 'Abhishek' },
        { value: 'akhilesh', label: 'Akhilesh' },
        { value: 'abhay', label: 'Abhay' },
    ];

    const assetAssigned = [
        {
            value: 'yes',
            label: 'Yes',
        },
        {
            value: 'no',
            label: 'No',
        },
    ];

    document.title = 'User Form';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="User Form" pageTitle="User Form" />
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <Form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                        action="#">
                                        <Row className="mb-4">
                                            <Col sm="12" md="6" xl="4">
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

                                            <Col sm="12" md="6" xl="4">
                                                <Label htmlFor="fatherName" className="form-label">
                                                    Father Name
                                                </Label>
                                                <Input
                                                    name="fatherName"
                                                    className="form-control"
                                                    placeholder="Enter Father Name"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.fatherName || ''}
                                                    invalid={
                                                        validation.touched.fatherName &&
                                                        validation.errors.fatherName
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.fatherName &&
                                                validation.errors.fatherName ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.fatherName}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4">
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
                                        </Row>

                                        <Row className="mb-4">
                                            <Col sm="12" md="6">
                                                <Label htmlFor="dob" className="form-label">
                                                    Date Of Birth
                                                </Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                        altInput: true,
                                                        altFormat: 'F j, Y',
                                                        dateFormat: 'Y-m-d',
                                                    }}
                                                    onChange={validation.handleChange}
                                                    value={validation.values.dob || ''}
                                                    invalid={
                                                        validation.touched.dob &&
                                                        validation.errors.dob
                                                            ? true
                                                            : false
                                                    }
                                                    placeholder="Select Date of Birth"
                                                />
                                                {validation.touched.dob && validation.errors.dob ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.dob}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6">
                                                <Label htmlFor="designation" className="form-label">
                                                    Designation
                                                </Label>
                                                <Input
                                                    name="designation"
                                                    className="form-control"
                                                    placeholder="Enter Designation"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.designation || ''}
                                                    invalid={
                                                        validation.touched.designation &&
                                                        validation.errors.designation
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.designation &&
                                                validation.errors.designation ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.designation}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>
                                        </Row>

                                        <Row className="mb-4">
                                            <Col sm="12" md="6">
                                                <Label htmlFor="dob" className="form-label">
                                                    Reporting Manager
                                                </Label>
                                                <Select
                                                    name="reportingManager"
                                                    options={reportingManagers}
                                                    onChange={validation.handleChange}
                                                    invalid={
                                                        validation.touched.reportingManager &&
                                                        validation.errors.reportingManager
                                                            ? true
                                                            : false
                                                    }></Select>
                                                {validation.touched.dob && validation.errors.dob ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.dob}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>
                                            <Col sm="12" md="6">
                                                <Label htmlFor="dob" className="form-label">
                                                    Assets Assigned
                                                </Label>
                                                <Select options={assetAssigned}></Select>
                                                {validation.touched.dob && validation.errors.dob ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.dob}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>
                                        </Row>

                                        <Row className="mb-4">
                                            <Col>
                                                <Label htmlFor="lastName" className="form-label">
                                                    Comment
                                                </Label>
                                                <Input
                                                    name="lastName"
                                                    className="form-control"
                                                    placeholder="Enter Comment"
                                                    type="textarea"
                                                    bsSize="lg"
                                                />
                                            </Col>
                                        </Row>

                                        <div className="mt-4 text-end">
                                            <Button
                                                color="success"
                                                className="btn btn-success"
                                                type="submit">
                                                Save User
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
export default UserForm;
