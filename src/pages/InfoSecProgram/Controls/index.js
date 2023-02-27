import React, { useState } from 'react';
import {
    Container,
    Button,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const ControlTableData = [
    [
        'A.5.1.1 - Policies for Information Sec',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.6.1.1 - Information Security Roles and Responsibilities',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    ['A.6.1.2 - Segregation of Duties', 'Access Control', '', '', 'No Assignee', 'Not Implemented'],
    [
        'A.6.1.3 - Contact with Authorities',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.6.2.2 - Teleworking',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.7.1.1 - Screening',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.7.2.1 - Management Responsibilities',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
    [
        'A.7.2.2 - Information Security Aware',
        'Organization and Management',
        '',
        '',

        'No Assignee',
        'Not Implemented',
    ],
];

const productScope = [];

const controlCategory = [];

const Controls = () => {
    document.title = 'Control';

    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Control" pageTitle="Dashboard" pageTitleUrl="/" />
                    <Row>
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-end">
                                <button className="btn btn-primary" onClick={() => tog_standard()}>
                                    <i className="las la-plus mr-sm-2"></i>
                                </button>
                            </CardHeader>
                            <CardBody>
                                <Grid
                                    data={ControlTableData}
                                    columns={[
                                        {
                                            name: 'Name',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        'Category',
                                        'Framework Codes',
                                        'Tag',
                                        {
                                            name: 'Assignee',
                                            formatter: cell =>
                                                _(<span className="badge bg-primary">{cell}</span>),
                                        },
                                        'Status',
                                    ]}
                                    search={true}
                                    sort={true}
                                    pagination={{ enabled: true, limit: 20 }}
                                />
                            </CardBody>
                        </Card>
                    </Row>
                </Container>
            </div>

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
                                        Control Name
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
                                        Control Description
                                    </label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        id="summary"
                                        placeholder="Enter Summary"
                                    />
                                </div>
                            </Col>

                            <Col sm="12" lg="6">
                                <div>
                                    <label htmlFor="productScope" className="form-label">
                                        Product Scope
                                    </label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={productScope[0]}
                                        isSearchable={true}
                                        name="color"
                                        options={productScope}
                                    />
                                </div>
                            </Col>

                            <Col sm="12" lg="6">
                                <div>
                                    <label htmlFor="productScope" className="form-label">
                                        Control Category
                                    </label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={controlCategory[0]}
                                        isSearchable={true}
                                        name="color"
                                        options={controlCategory}
                                    />
                                </div>
                            </Col>

                            <Col sm="12">
                                <div>
                                    <label htmlFor="Name" className="form-label">
                                        Reference Codes
                                    </label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="Name"
                                        placeholder="Optional Reference code"
                                    />
                                </div>
                            </Col>

                            <Col sm="12">
                                <div>
                                    <label htmlFor="Details" className="form-label">
                                        Implementation Details
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
        </React.Fragment>
    );
};

export default Controls;
