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

const evidenceTasksTableData = [['Sales', 'Abhishek Nimbalkar', '26/05/2023']];

const EmployeeGroup = () => {
    document.title = 'Employee Group';

    const [modal_standard, setmodal_standard] = useState(false);

    function tog_standard() {
        setmodal_standard(!modal_standard);
    }

    const collectionInterval = ['Abhishek', 'Akhilesh', 'Himanshu'];
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Employee Group" pageTitle="Dashboard" pageTitleUrl="/" />
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
                                            name: 'Created By',
                                            formatter: cell => _(<span>{cell}</span>),
                                        },
                                        'Date Created',
                                        {
                                            name: 'Action',
                                            formatter: cell =>
                                                _(
                                                    <div className="hstack gap-2">
                                                        <button className="btn btn-sm btn-soft-info edit-list">
                                                            <i className="ri-pencil-fill align-bottom" />
                                                        </button>
                                                        <button className="btn btn-sm btn-soft-danger remove-list">
                                                            <i className="ri-delete-bin-5-fill align-bottom" />
                                                        </button>
                                                    </div>,
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
                    <p>Create Employee Group(s)</p>
                </ModalHeader>
                <ModalBody>
                    <form action="#">
                        <div className="row g-3">
                            <Col sm="12">
                                <div>
                                    <label htmlFor="Name" className="form-label">
                                        Employee Group Name
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
                                        Employee Group Description
                                    </label>
                                    <Input
                                        type="textarea"
                                        className="form-control"
                                        id="summary"
                                        placeholder="Describe the evidence you wish to collect"
                                    />
                                </div>
                            </Col>

                            <Col sm="12" lg="12">
                                <div>
                                    <label htmlFor="collectionInterval" className="form-label">
                                        Add employee(s) to group
                                    </label>
                                    <Select
                                        className="basic-single"
                                        classNamePrefix="select"
                                        defaultValue={'Select Employees'}
                                        isSearchable={true}
                                        name="collectionInterval"
                                        options={collectionInterval}
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

export default EmployeeGroup;
