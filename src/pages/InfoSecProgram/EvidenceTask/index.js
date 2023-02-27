import React, { useState } from 'react';
import {
    Button,
    Container,
    CardHeader,
    Row,
    Col,
    Card,
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

const evidenceTasksTableData = [
    [
        'Signed Customer Contract or EULA',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'in progress',
    ],
    [
        'Documented and Approved Privacy Policy',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'in progress',
    ],
    [
        'Population 8 - List of Customers',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'idle',
    ],
    [
        'Backup and Restore Policy',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'idle',
    ],
    [
        'Backup Schedule',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'success',
    ],
    [
        'Population 4 - List of In-scope Systems and Permissions',
        'Flagship Product',
        'TBL20 - Privacy Statement and Terms of Business',
        'Yearly',
        'Abhishek',
        '—',
        'success',
    ],
];

const EvidenceTask = () => {
    document.title = 'Evidence Task';

    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    const collectionInterval = ['One-Time'];
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Evidence Task" pageTitle="Dashboard" pageTitleUrl="/" />
                    <Row>
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-end">
                                <button className="btn btn-primary" onClick={() => tog_standard()}>
                                    <i className="las la-plus mr-sm-2"></i>
                                </button>
                            </CardHeader>
                            <CardBody>
                                <Grid
                                    data={evidenceTasksTableData}
                                    columns={[
                                        {
                                            name: 'Evidence Task',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        'Product Scope',
                                        {
                                            name: 'Associated Controls/Policies',
                                            formatter: cell => _(<span>{cell}</span>),
                                        },
                                        'Interval',
                                        {
                                            name: 'Assignee',
                                            formatter: cell => _(<span>{cell}</span>),
                                        },
                                        'Last Collected',
                                        {
                                            name: 'Overall Status',
                                            formatter: cell =>
                                                _(
                                                    cell === 'idle' ? (
                                                        <i className="mdi mdi-circle text-light"></i>
                                                    ) : cell === 'in progress' ? (
                                                        <i className="mdi mdi-circle text-warning"></i>
                                                    ) : (
                                                        <i className="mdi mdi-circle text-success"></i>
                                                    ),
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
                    <p>Create Evidence Task(s)</p>
                </ModalHeader>
                <ModalBody>
                    <form action="#">
                        <div className="row g-3">
                            <Col sm="12">
                                <div>
                                    <label htmlFor="Name" className="form-label">
                                        Evidence Task Name
                                    </label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="Name"
                                        placeholder="Enter Name"
                                    />
                                </div>
                            </Col>

                            <Col sm="12" lg="6">
                                <div>
                                    <label htmlFor="collectionInterval" className="form-label">
                                        Product Scope
                                    </label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={collectionInterval[0]}
                                        isSearchable={true}
                                        name="color"
                                        options={collectionInterval}
                                    />
                                </div>
                            </Col>

                            <Col sm="12">
                                <div>
                                    <label htmlFor="Summary" className="form-label">
                                        Evidence Task Description
                                    </label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        id="summary"
                                        placeholder="Describe the evidence you wish to collect"
                                    />
                                </div>
                            </Col>
                            <Col sm="12">
                                <div>
                                    <label htmlFor="Summary" className="form-label">
                                        Evidence Task Guidance
                                    </label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        id="summary"
                                        placeholder="Provide additional information on how to collect this evidence."
                                    />
                                </div>
                            </Col>
                            <Col sm="12">
                                <div>
                                    <label htmlFor="Summary" className="form-label">
                                        Evidence Date
                                    </label>
                                    <Input name="date" placeholder="Select Date" type="date" />
                                </div>
                            </Col>
                            <Col sm="12">
                                <div>
                                    <label htmlFor="Summary" className="form-label">
                                        Note
                                    </label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        id="summary"
                                        placeholder="Enter Summary"
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

export default EvidenceTask;
