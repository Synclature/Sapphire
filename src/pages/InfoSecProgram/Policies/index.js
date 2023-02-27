import React, { useState } from 'react';
import {
    Container,
    Row,
    Button,
    Col,
    Card,
    CardBody,
    CardHeader,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Grid, _ } from 'gridjs-react';

const policiesTableData = [
    [
        'dkkjd233j234k5j42e321k3',
        'Network Security',
        'Information and Communication',
        'Abhishek',
        'Gajodhar',
        'Draft',
    ],
    [
        'kjsjkdjksjdkjsdlsdsdsdd',
        'Access Control',
        'Access Control',
        'Akhilesh',
        'Ramesh',
        'Published',
    ],
    [
        'jl3j23nljklhd82242k4hkd',
        'Change Management',
        'Access Control',
        'Akhilesh',
        'Ramesh',
        'Published',
    ],
    [
        'djk2jh3kjhdiuudqiug33od',
        'Server Security',
        'Access Control',
        'Akhilesh',
        'Ramesh',
        'Published',
    ],
];

const category = [
    { value: 'categoory1', label: 'Category1' },
    { value: 'categoory2', label: 'Category2' },
];

const Policies = () => {
    document.title = 'Policies';

    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Policies" pageTitle="Policies" />
                    <Row>
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-end">
                                <button className="btn btn-primary" onClick={() => tog_standard()}>
                                    <i className="las la-plus mr-sm-2"></i>Create Policy
                                </button>
                            </CardHeader>
                            <CardBody>
                                <Grid
                                    data={policiesTableData}
                                    columns={[
                                        {
                                            name: 'Policy Name',
                                            formatter: row =>
                                                _(
                                                    <a
                                                        href={`/infosec-program/policy/${row.cells[0].data}`}
                                                        className="fw-semibold">
                                                        {row.cells[1].data}
                                                    </a>,
                                                ),
                                        },
                                        'Category',
                                        {
                                            name: 'Assignee',
                                            formatter: row =>
                                                _(
                                                    <span className="badge bg-primary">
                                                        {row.cells[2].data}
                                                    </span>,
                                                ),
                                        },
                                        {
                                            name: 'Reviewer',
                                            formatter: row =>
                                                _(
                                                    <span className="badge bg-info">
                                                        {row.cells[3].data}
                                                    </span>,
                                                ),
                                        },
                                        {
                                            name: 'status',
                                            formatter: row =>
                                                _(
                                                    <span className="badge bg-info">
                                                        {row.cells[4].data}
                                                    </span>,
                                                ),
                                        },
                                    ]}
                                    search={true}
                                    sort={true}
                                    pagination={{ enabled: true, limit: 20 }}
                                />
                            </CardBody>
                        </Card>
                    </Row>

                    <Modal
                        id="myModal"
                        isOpen={modal_standard}
                        toggle={() => {
                            tog_standard();
                        }}
                        size="lg">
                        <ModalHeader>
                            <p>Create Policy</p>
                        </ModalHeader>
                        <ModalBody>
                            <form action="#">
                                <div className="row g-3">
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Name" className="form-label">
                                                Name
                                            </label>
                                            <Input
                                                type="text"
                                                className="form-control"
                                                id="Name"
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Summary" className="form-label">
                                                Summary
                                            </label>
                                            <Input
                                                type="textarea"
                                                className="form-control"
                                                id="summary"
                                                placeholder="Enter Summary"
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Category" className="form-label">
                                                Category
                                            </label>
                                            <Select
                                                className="basic-single"
                                                classNamePrefix="select"
                                                defaultValue={category[0]}
                                                isSearchable={true}
                                                name="color"
                                                options={category}
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <div>
                                            <label htmlFor="Details" className="form-label">
                                                Details
                                            </label>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data=""
                                                onReady={editor => {
                                                    // You can store the "editor" and use when it is needed.
                                                }}
                                                onChange={editor => {
                                                    editor.getData();
                                                }}
                                            />
                                        </div>
                                    </Col>
                                    <Col sm="12">
                                        <p className="fs-14">
                                            Once you select OK, this policy will be assigned a draft
                                            status and placed inside your InfoSec Program Policy
                                            page.
                                        </p>
                                    </Col>
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="light"
                                onClick={() => {
                                    tog_standard();
                                }}>
                                Close
                            </Button>
                            <Button color="primary">Ok</Button>
                        </ModalFooter>
                    </Modal>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Policies;
