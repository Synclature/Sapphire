import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Card,
    Progress,
    Nav,
    NavItem,
    Input,
    NavLink,
    TabPane,
    TabContent,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import classnames from 'classnames';
import { Grid, _ } from 'gridjs-react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';

const Policy = () => {
    document.title = 'Policy';

    const [customActiveTab, setcustomActiveTab] = useState('policy');
    const toggleCustom = tab => {
        if (customActiveTab !== tab) {
            setcustomActiveTab(tab);
        }
    };

    const [justifyPillsTab, setjustifyPillsTab] = useState('view');
    const justifyPillsToggle = tab => {
        if (justifyPillsTab !== tab) {
            setjustifyPillsTab(tab);
        }
    };

    const [modal_event, setmodal_event] = useState(false);

    function tog_event() {
        setmodal_event(!modal_event);
    }

    const [modal_evidence, setmodal_evidence] = useState(false);

    function tog_evidence() {
        setmodal_evidence(!modal_evidence);
    }

    const history = [
        '1',
        'draft',
        '',
        'November 23, 2023 4:31 PM',
        'Himanshu Jain',
        'Abhishek Nimbalkar',
    ];

    const product = [{ value: 'All Products', label: 'All Products' }];

    const evidenceTask = [{ value: 'Evidence Task 1', label: 'Evidence Task 1' }];

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Policy" pageTitle="Policy" />
                    <Row>
                        <Col lg="8">
                            <Card>
                                <Nav
                                    tabs
                                    className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 ">
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: 'pointer' }}
                                            className={classnames({
                                                active: customActiveTab === 'policy',
                                            })}
                                            onClick={() => {
                                                toggleCustom('policy');
                                            }}>
                                            Policy
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: 'pointer' }}
                                            className={classnames({
                                                active: customActiveTab === 'events',
                                            })}
                                            onClick={() => {
                                                toggleCustom('events');
                                            }}>
                                            Events
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            style={{ cursor: 'pointer' }}
                                            className={classnames({
                                                active: customActiveTab === 'evidence',
                                            })}
                                            onClick={() => {
                                                toggleCustom('evidence');
                                            }}>
                                            Evidence Task
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <TabContent activeTab={customActiveTab} className="text-muted">
                                    <TabPane tabId="policy">
                                        <Nav
                                            tabs
                                            className="nav nav-tabs nav-tabs-custom nav-success nav-justified mb-3 ">
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: 'pointer' }}
                                                    className={classnames({
                                                        active: justifyPillsTab === 'view',
                                                    })}
                                                    onClick={() => {
                                                        justifyPillsToggle('view');
                                                    }}>
                                                    View
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: 'pointer' }}
                                                    className={classnames({
                                                        active: justifyPillsTab === 'draft',
                                                    })}
                                                    onClick={() => {
                                                        justifyPillsToggle('draft');
                                                    }}>
                                                    Draft
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: 'pointer' }}
                                                    className={classnames({
                                                        active: justifyPillsTab === 'history',
                                                    })}
                                                    onClick={() => {
                                                        justifyPillsToggle('history');
                                                    }}>
                                                    History
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    style={{ cursor: 'pointer' }}
                                                    className={classnames({
                                                        active: justifyPillsTab === 'instructions',
                                                    })}
                                                    onClick={() => {
                                                        justifyPillsToggle('instructions');
                                                    }}>
                                                    Instructions
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent
                                            activeTab={justifyPillsTab}
                                            className="text-muted">
                                            <TabPane tabId="view" className="p-2">
                                                <p className="fs-14 text-secondary">
                                                    Access Control
                                                </p>
                                                <p className="fs-14 text-secondary">
                                                    Access Control Policy define high-level
                                                    requirements and guidelines on user account
                                                    management.
                                                </p>
                                                <hr />

                                                <h3 className="mb-2 text-center">
                                                    Synclature Access Control Policy
                                                </h3>

                                                <h4 className="mb-2">1.0 Purpose</h4>
                                                <p className="fs-14 text-secondary">
                                                    The purpose of the policy is to establish
                                                    direction and requirements for access to
                                                    Synclature data.
                                                </p>
                                            </TabPane>
                                            <TabPane tabId="draft" className="p-2">
                                                <div className="d-flex align-item-cemter justify-content-between">
                                                    <div className="mb-4">
                                                        <div>
                                                            <span className="fs-14 fw-bold">
                                                                Status:
                                                            </span>{' '}
                                                            Draft
                                                        </div>
                                                        <div>
                                                            <span className="fs-14 fw-bold">
                                                                Last Saved:
                                                            </span>{' '}
                                                            2 minutes ago
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-primary px-4 py-1">
                                                            Publish
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="row g-3">
                                                    <Col sm="12">
                                                        <div>
                                                            <label
                                                                htmlFor="Name"
                                                                className="form-label">
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
                                                            <label
                                                                htmlFor="Summary"
                                                                className="form-label">
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
                                                            <label
                                                                htmlFor="Details"
                                                                className="form-label">
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
                                                </div>
                                            </TabPane>
                                            <TabPane tabId="history">
                                                <Grid
                                                    data={history}
                                                    columns={[
                                                        {
                                                            name: 'Version',
                                                            formatter: cell =>
                                                                _(
                                                                    <span className="fw-semibold">
                                                                        {cell}
                                                                    </span>,
                                                                ),
                                                        },
                                                        {
                                                            name: 'Status',
                                                            formatter: cell =>
                                                                _(
                                                                    <span className="fw-semibold">
                                                                        {cell}
                                                                    </span>,
                                                                ),
                                                        },
                                                        {
                                                            name: 'Summary Of Changes',
                                                            formatter: cell =>
                                                                _(
                                                                    <span className="fw-semibold">
                                                                        {cell}
                                                                    </span>,
                                                                ),
                                                        },
                                                        {
                                                            name: 'Last Update On',
                                                            formatter: cell =>
                                                                _(
                                                                    <span className="fw-semibold">
                                                                        {cell}
                                                                    </span>,
                                                                ),
                                                        },
                                                        {
                                                            name: 'Approved By',
                                                            formatter: cell =>
                                                                _(
                                                                    <span className="fw-semibold">
                                                                        {cell}
                                                                    </span>,
                                                                ),
                                                        },
                                                        {
                                                            name: 'Published By',
                                                            formatter: cell =>
                                                                _(
                                                                    <span className="fw-semibold">
                                                                        {cell}
                                                                    </span>,
                                                                ),
                                                        },
                                                    ]}
                                                    search={true}
                                                    sort={true}
                                                    pagination={{ enabled: true, limit: 20 }}
                                                />
                                            </TabPane>
                                            <TabPane tabId="instructions" className="p-2">
                                                <p className="fs-20 fw-bold">Policy Setup steps</p>
                                                <ol>
                                                    <li>Review the policy details</li>
                                                    <li>
                                                        Assign the policy to another user or users
                                                        (if necessary).
                                                    </li>
                                                    <li>
                                                        Updated the policy Status to 'Mark Not
                                                        Applicable' if the policy does not apply to
                                                        your organization.
                                                    </li>
                                                    <li>
                                                        Updated the policy with changes that are
                                                        unique to your organization (if applicable)
                                                    </li>
                                                    <li>
                                                        Publish the policy so it can be used in
                                                        Awareness Training and Security
                                                        Questionnaire Responses
                                                    </li>
                                                    <li>
                                                        Review, assign and implement the controls
                                                        associated with the policy
                                                    </li>
                                                </ol>
                                            </TabPane>
                                        </TabContent>
                                    </TabPane>
                                    <TabPane tabId="events" className="p-2">
                                        <p>
                                            Events and Tasks related to a policy may be logged here.
                                            Example include security voilations, data breaches, or
                                            test of controls
                                        </p>
                                        <div className="d-flex align-item-cemter justify-content-between">
                                            <div className="mb-4"></div>
                                            <div>
                                                <button
                                                    className="btn btn-primary px-4 py-1"
                                                    onClick={() => tog_event()}>
                                                    New Event
                                                </button>
                                            </div>
                                        </div>

                                        <Modal
                                            id="myModal"
                                            isOpen={modal_event}
                                            toggle={() => {
                                                tog_event();
                                            }}
                                            size="lg">
                                            <ModalHeader>
                                                <p>Create Event</p>
                                            </ModalHeader>
                                            <ModalBody>
                                                <form action="#">
                                                    <div className="row g-3">
                                                        <Col sm="12">
                                                            <div>
                                                                <label
                                                                    htmlFor="Event"
                                                                    className="form-label">
                                                                    Event
                                                                </label>
                                                                <Input
                                                                    type="text"
                                                                    className="form-control"
                                                                    id="Event"
                                                                    placeholder="Enter Event"
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
                                                        tog_event();
                                                    }}>
                                                    Close
                                                </Button>
                                                <Button color="primary">Ok</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </TabPane>
                                    <TabPane tabId="evidence" className="p-2">
                                        <div className="d-flex align-item-cemter justify-content-between">
                                            <div className="mb-4"></div>
                                            <div>
                                                <button
                                                    className="btn btn-primary px-4 py-1"
                                                    onClick={() => tog_evidence()}>
                                                    Add Evidence Task
                                                </button>
                                            </div>
                                        </div>

                                        <Modal
                                            id="myModal"
                                            isOpen={modal_evidence}
                                            toggle={() => {
                                                tog_evidence();
                                            }}
                                            size="lg">
                                            <ModalHeader>
                                                <p>Add Evidence</p>
                                            </ModalHeader>
                                            <ModalBody>
                                                <form action="#">
                                                    <div className="row g-3">
                                                        <Col sm="12">
                                                            <div className="d-flex align-item-center gap-2">
                                                                <div className="w-50">
                                                                    <label
                                                                        htmlFor="Products"
                                                                        className="form-label">
                                                                        Products
                                                                    </label>
                                                                    <Select
                                                                        className="basic-single w-100"
                                                                        classNamePrefix="select"
                                                                        isSearchable={true}
                                                                        name="color"
                                                                        options={product}
                                                                    />
                                                                </div>

                                                                <div className="w-50">
                                                                    <label
                                                                        htmlFor="EvidenceTask"
                                                                        className="form-label">
                                                                        Evidence Tasks
                                                                    </label>
                                                                    <Select
                                                                        className="basic-single w-100"
                                                                        classNamePrefix="select"
                                                                        isSearchable={true}
                                                                        name="color"
                                                                        options={evidenceTask}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </form>
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button
                                                    color="light"
                                                    onClick={() => {
                                                        tog_evidence();
                                                    }}>
                                                    Close
                                                </Button>
                                                <Button color="primary">
                                                    Associate evidence task(s)
                                                </Button>
                                            </ModalFooter>
                                        </Modal>
                                    </TabPane>
                                </TabContent>
                            </Card>
                        </Col>

                        <Col lg="4">
                            <Card className="p-2">
                                <p className="fs-20 text-secondary">Compliance</p>
                                <div className="d-flex align-item-center justify-content-start gap-2">
                                    <i className="ri-record-circle-line text-secondary"></i>
                                    <p>In Progress</p>
                                    <p className="bg-light text-secondary px-2 fs-12">Editing</p>
                                </div>
                                <p className="fs-14 text-secondary mb-0">Training Group assigned</p>
                                <p className="fs-16">All Staff</p>
                                <p className="fs-14 text-secondary mb-2">Training completion</p>
                                <Progress value={0} className="progress-sm" />
                            </Card>
                            <Card className="p-2">
                                <p className="fs-20 text-secondary">Details</p>
                                <p className="fs-14 text-secondary mb-2">Category</p>
                                <p className="fs-16">Access Control</p>
                                <p className="fs-14 text-secondary mb-2">Assignee</p>
                                <p className="fs-16">Add Asignee(s)</p>
                                <p className="fs-14 text-secondary mb-2">Reviewer</p>
                                <p className="fs-16">Add Reviewer(s)</p>
                                <p className="fs-14 text-secondary mb-2">Review Date</p>
                                <p className="fs-16">Set review date</p>
                                <p className="fs-14 text-secondary mb-2">Tags</p>
                                <p className="fs-16">Add Tags</p>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Policy;
