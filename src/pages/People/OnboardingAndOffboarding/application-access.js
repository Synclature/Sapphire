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

const evidenceTasksTableData = [['Adobe Illustrator', 'Active', '', '', '']];

const ApplicationAccess = () => {
    document.title = 'Application Access';

    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    const collectionInterval = ['Abhishek', 'Akhilesh', 'Himanshu'];
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Application Access" pageTitle="Dashboard" pageTitleUrl="/" />
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
                                            name: 'Name',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        {
                                            name: 'Status',
                                            formatter: cell => _(<span>{cell}</span>),
                                        },
                                        'App Owner',
                                        'MFA Enabled',
                                        'Last Reviewed',
                                        {
                                            name: 'Action',
                                            formatter: cell => _(<a href="#">Manage Access</a>),
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
                    <p>Add Application Access(s)</p>
                </ModalHeader>
                <ModalBody>
                    <form action="#">
                        <div className="row g-3">
                            <Col sm="12" lg="12">
                                <div>
                                    <label htmlFor="selectApplication" className="form-label">
                                        Select Application
                                    </label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={'Select Application'}
                                        isSearchable={true}
                                        name="selectApplication"
                                        options={[]}
                                    />
                                </div>
                            </Col>

                            <Col sm="12" lg="12">
                                <div>
                                    <label htmlFor="status" className="form-label">
                                        Status
                                    </label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={'Status'}
                                        isSearchable={true}
                                        name="status"
                                        options={['Active', 'Not Active']}
                                    />
                                </div>
                            </Col>

                            <Col sm="12" lg="12">
                                <div>
                                    <label htmlFor="status" className="form-label">
                                        App Owner
                                    </label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={'Status Employees'}
                                        isSearchable={true}
                                        name="status"
                                        options={['Abhishek', 'Rohit', 'Himanshu']}
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

export default ApplicationAccess;
