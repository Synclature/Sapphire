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

const ITAssetCreate = () => {
    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            assetTag: '',
            serialNumber: '',
            assetType: '',
            desktop: '',
            oem: '',
            model: '',
            uefi: '',
            description: '',
            assetAssignee: '',
            condition: '',
            vendor: '',
            invoice: '',
            warranty: '',
        },
        validationSchema: Yup.object({
            assetTag: Yup.string().required('Please Enter Asset Tag'),
            serialNumber: Yup.string().required('Please Enter Serial Number'),
            oem: Yup.string().required('Please Enter OEM'),
            model: Yup.string().required('Please Enter Model'),
            uefi: Yup.string().required('Please Enter UEFI'),
            description: Yup.string().required('Please Enter Description'),
            vendor: Yup.string().required('Please Enter Vendor'),
            invoice: Yup.string().required('Please Enter Invoice'),
            warranty: Yup.string().required('Please Enter Warrenty'),
        }),
    });

    const assetType = [
        { value: 'Endpoint', label: 'Endpoint' },
        { value: 'Software', label: 'Software' },
        { value: 'Mobile Device', label: 'Mobile Device' },
        { value: 'Peripheral', label: 'Peripheral' },
        { value: 'Network', label: 'Network' },
    ];

    const desktop = [
        { value: 'Notebook PC', label: 'Notebook PC' },
        { value: 'Desktop', label: 'Desktop' },
        { value: 'Chromebook', label: 'Chromebook' },
        { value: 'Keyboard', label: 'Keyboard' },
        { value: 'Mouse', label: 'Mouse' },
        { value: 'iPad', label: 'iPad' },
        { value: 'iPhone', label: 'iPhone' },
        { value: 'Router', label: 'Router' },
        { value: 'Removable Storage', label: 'Removable Storage' },
        { value: 'Internal SSD', label: 'Internal SSD' },
        { value: 'Monitor', label: 'Monitor' },
        { value: 'Display', label: 'Display' },
        { value: 'OS Licence', label: 'OS Licence' },
        { value: 'AC-DC Adapter', label: 'AC-DC Adapter' },
        { value: 'WLAN Adapter', label: 'WLAN Adapter' },
        { value: 'Apple Pencil', label: 'Apple Pencil' },
    ];

    const condition = [
        { value: 'OK(unassigned)', label: 'OK(unassigned)' },
        { value: 'OK(assigned)', label: 'OK(assigned)' },
        { value: 'Under Repair', label: 'Under Repair' },
        { value: 'Pending Repair', label: 'Pending Repair' },
        { value: 'Decommissioned', label: 'Decommissioned' },
    ];

    const assetAssignee = [
        { value: 'abhishek', label: 'Abhishek' },
        { value: 'akhilesh', label: 'Akhilesh' },
        { value: 'abhay', label: 'Abhay' },
    ];

    const assetsUsed = [{ value: 'laptop', label: 'Laptop' }];

    document.title = 'Create IT Asset';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Create IT Asset" pageTitle="Create IT Asset" />
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
                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="assetTag" className="form-label">
                                                    Asset Tag
                                                </Label>
                                                <Input
                                                    name="assetTag"
                                                    className="form-control"
                                                    placeholder="Enter Asset Tag"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.assetTag || ''}
                                                    invalid={
                                                        validation.touched.assetTag &&
                                                        validation.errors.assetTag
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.assetTag &&
                                                validation.errors.assetTag ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.assetTag}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="serialNumber"
                                                    className="form-label">
                                                    Serial Number
                                                </Label>
                                                <Input
                                                    name="serialNumber"
                                                    className="form-control"
                                                    placeholder="Enter Serial Number"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.serialNumber || ''}
                                                    invalid={
                                                        validation.touched.serialNumber &&
                                                        validation.errors.serialNumber
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.serialNumber &&
                                                validation.errors.serialNumber ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.serialNumber}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="assetType" className="form-label">
                                                    Asset Type
                                                </Label>
                                                <Select
                                                    name="assetType"
                                                    options={assetType}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="desktop" className="form-label">
                                                    Desktop
                                                </Label>
                                                <Select name="desktop" options={desktop}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="model" className="form-label">
                                                    Model
                                                </Label>
                                                <Input
                                                    name="model"
                                                    className="form-control"
                                                    placeholder="Enter Model"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.model || ''}
                                                    invalid={
                                                        validation.touched.model &&
                                                        validation.errors.model
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.model &&
                                                validation.errors.model ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.model}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="condition" className="form-label">
                                                    Condition
                                                </Label>
                                                <Select
                                                    name="condition"
                                                    options={condition}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="oem" className="form-label">
                                                    OEM
                                                </Label>
                                                <Input
                                                    name="oem"
                                                    className="form-control"
                                                    placeholder="Enter OEM"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.oem || ''}
                                                    invalid={
                                                        validation.touched.oem &&
                                                        validation.errors.oem
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.oem && validation.errors.oem ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.oem}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="uefi" className="form-label">
                                                    UEFI
                                                </Label>
                                                <Input
                                                    name="uefi"
                                                    className="form-control"
                                                    placeholder="Enter UEFI"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.uefi || ''}
                                                    invalid={
                                                        validation.touched.uefi &&
                                                        validation.errors.uefi
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.uefi &&
                                                validation.errors.uefi ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.uefi}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="assetAssignee"
                                                    className="form-label">
                                                    Asset Assignee
                                                </Label>
                                                <Select
                                                    name="assetAssignee"
                                                    options={assetAssignee}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="vendor" className="form-label">
                                                    Vendor
                                                </Label>
                                                <Input
                                                    name="vendor"
                                                    className="form-control"
                                                    placeholder="Enter Vendor"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.vendor || ''}
                                                    invalid={
                                                        validation.touched.vendor &&
                                                        validation.errors.vendor
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.vendor &&
                                                validation.errors.vendor ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.vendor}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="invoice" className="form-label">
                                                    Invoice
                                                </Label>
                                                <Input
                                                    name="invoice"
                                                    className="form-control"
                                                    placeholder="Enter Invoice"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.invoice || ''}
                                                    invalid={
                                                        validation.touched.invoice &&
                                                        validation.errors.invoice
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.invoice &&
                                                validation.errors.invoice ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.invoice}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="warranty" className="form-label">
                                                    Warranty
                                                </Label>
                                                <Input
                                                    name="warranty"
                                                    className="form-control"
                                                    placeholder="Enter Warranty"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.warranty || ''}
                                                    invalid={
                                                        validation.touched.warranty &&
                                                        validation.errors.warranty
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.warranty &&
                                                validation.errors.warranty ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.warranty}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>
                                        </Row>

                                        <div className="mt-4 text-end">
                                            <Button
                                                color="success"
                                                className="btn btn-success"
                                                type="submit">
                                                Create
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
export default ITAssetCreate;
