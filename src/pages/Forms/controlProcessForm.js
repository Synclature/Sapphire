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
const ControlProcessForm = () => {
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            processName: '',
            processDesc: '',
            department: '',
            processOwner: '',
            processApprover: '',
            processCreationDate: '',
            processCompletionDate: '',
            assetsUsed: '',
        },
        validationSchema: Yup.object({
            processName: Yup.string().required('Please Enter Your Process Name'),
            processDesc: Yup.string().required('Please Enter Your First Name'),
            department: Yup.string().required('Please Enter Your First Name'),
            processOwner: Yup.string().required('Please Enter Your First Name'),
            processApprover: Yup.string().required('Please Enter Your First Name'),
            processCreationDate: Yup.string().required('Please Enter Your First Name'),
            processCompletionDate: Yup.string().required('Please Enter Your First Name'),
            assetsUsed: Yup.string().required('Please Enter Your First Name'),
        }),
    });

    const department = [
        { value: 'sales', label: 'Sales' },
        { value: 'pre sale', label: 'Pre Sales' },
        { value: 'security', label: 'Security' },
    ];

    const processOwner = [
        { value: 'abhishek', label: 'Abhishek' },
        { value: 'akhilesh', label: 'Akhilesh' },
        { value: 'abhay', label: 'Abhay' },
    ];

    const processApprover = [
        { value: 'abhishek', label: 'Abhishek' },
        { value: 'akhilesh', label: 'Akhilesh' },
        { value: 'abhay', label: 'Abhay' },
    ];

    const assetsUsed = [{ value: 'laptop', label: 'Laptop' }];

    document.title = 'Control or Process Form';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Control or Process Form"
                        pageTitle="Control or Process Form"
                    />
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
                                            <Col sm="12" className="mb-3">
                                                <Label htmlFor="processName" className="form-label">
                                                    Process Name
                                                </Label>
                                                <Input
                                                    name="processName"
                                                    className="form-control"
                                                    placeholder="Enter Process Name"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.processName || ''}
                                                    invalid={
                                                        validation.touched.processName &&
                                                        validation.errors.processName
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.processName &&
                                                validation.errors.processName ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.processName}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" className="mb-3">
                                                <Label htmlFor="processDesc" className="form-label">
                                                    Process Description
                                                </Label>
                                                <Input
                                                    name="processDesc"
                                                    className="form-control"
                                                    placeholder="Enter Process Description"
                                                    type="textarea"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.processDesc || ''}
                                                    invalid={
                                                        validation.touched.processDesc &&
                                                        validation.errors.processDesc
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.processDesc &&
                                                validation.errors.processDesc ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.processDesc}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="department" className="form-label">
                                                    Department
                                                </Label>
                                                <Select
                                                    name="department"
                                                    options={department}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="processOwner"
                                                    className="form-label">
                                                    Process Owner
                                                </Label>
                                                <Select
                                                    name="processOwner"
                                                    options={processOwner}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="processApprover"
                                                    className="form-label">
                                                    Process Approver
                                                </Label>
                                                <Select
                                                    name="processApprover"
                                                    options={processApprover}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="processCreationDate"
                                                    className="form-label">
                                                    Process Creation Date
                                                </Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                        altInput: true,
                                                        altFormat: 'F j, Y',
                                                        dateFormat: 'Y-m-d',
                                                    }}
                                                    onChange={validation.handleChange}
                                                    value={
                                                        validation.values.processCreationDate || ''
                                                    }
                                                    invalid={
                                                        validation.touched.processCreationDate &&
                                                        validation.errors.processCreationDate
                                                            ? true
                                                            : false
                                                    }
                                                    placeholder="Select Process Creation Date 
"
                                                />
                                                {validation.touched.processCreationDate &&
                                                validation.errors.processCreationDate ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.processCreationDate}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="processCompletionDate"
                                                    className="form-label">
                                                    Process Completion Date
                                                </Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                        altInput: true,
                                                        altFormat: 'F j, Y',
                                                        dateFormat: 'Y-m-d',
                                                    }}
                                                    onChange={validation.handleChange}
                                                    value={
                                                        validation.values.processCompletionDate ||
                                                        ''
                                                    }
                                                    invalid={
                                                        validation.touched.processCompletionDate &&
                                                        validation.errors.processCompletionDate
                                                            ? true
                                                            : false
                                                    }
                                                    placeholder="Select Process Completion Date 
"
                                                />
                                                {validation.touched.processCompletionDate &&
                                                validation.errors.processCompletionDate ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.processCompletionDate}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="assetsUsed" className="form-label">
                                                    Assets
                                                </Label>
                                                <Select
                                                    name="assetsUsed"
                                                    options={assetsUsed}></Select>
                                            </Col>
                                        </Row>

                                        <div className="mt-4 text-end">
                                            <Button
                                                color="success"
                                                className="btn btn-success"
                                                type="submit">
                                                Save Control
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
export default ControlProcessForm;
