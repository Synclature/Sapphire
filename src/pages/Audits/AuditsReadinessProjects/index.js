import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Grid, _ } from 'gridjs-react';

const policiesTableData = [
    ['Network Security', 'Information and Communication', 'Abhishek', 'Gajodhar', 'Published'],
    ['Access Control', 'Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    ['Change Management', 'Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    ['Server Security', 'Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    [
        'Business Continuity and Disaster Recovery',
        'Access Control',
        'Akhilesh',
        'Ramesh',
        'Published',
    ],
];

const proceduresTableData = [
    ['Network Security', 'Abhishek', 'Gajodhar', 'Published'],
    ['Access Control', 'Akhilesh', 'Ramesh', 'Published'],
    ['Change Management', 'Akhilesh', 'Ramesh', 'Published'],
    ['Server Security', 'Akhilesh', 'Ramesh', 'Published'],
    ['Business Continuity and Disaster Recovery', 'Akhilesh', 'Ramesh', 'Published'],
];

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

const complianceCalendarTableData = [
    ['Information Security Policies and Procedures', 'idle', 'Dec 2022', 'due soon'],
    ['Access Control / Registration and De-registration', 'idle', 'Dec 2022', 'due soon'],
    ['Workstation Anti-malware Settings', 'idle', 'Dec 2022', 'due soon'],
    ['Vendor Risk Assessment Report', 'idle', 'Dec 2022', 'overdue'],
    ['Population 7 - List of Third Party Vendors/Contrac', 'idle', 'Dec 2022', 'overdue'],
    ['Data Encryption at Rest', 'idle', 'Dec 2022', 'completed'],
    ['Awareness Training Report', 'idle', 'Dec 2022', 'completed'],
    ['Population 2 - List of Employees and Contractors', 'idle', 'Dec 2022', 'completed'],
    ['Workstation Passwords', 'idle', 'Dec 2022', 'completed'],
];

const AuditsReadinessProjects = () => {
    const [arrowNavTab, setarrowNavTab] = useState('1');
    const arrowNavToggle = tab => {
        if (arrowNavTab !== tab) {
            setarrowNavTab(tab);
        }
    };

    document.title = 'Audits Readiness Projects';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Audits Readiness Projects"
                        pageTitle="Audits Readiness Projects"
                    />
                    <Row lg="4">
                        <Col>
                            <Card>
                                <CardBody>
                                    <p className="mb-2 text-center fs-18 fw-bold">Policies </p>
                                    <div className="progress animated-progress custom-progress mb-2">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: '85%' }}
                                            aria-valuenow="85"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                                        11 of 18 Published
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardBody>
                                    <p className="mb-2 text-center fs-18 fw-bold">Procedures </p>
                                    <div className="progress animated-progress custom-progress mb-2">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: '0%' }}
                                            aria-valuenow="0"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                                        0 of 0 Approved
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardBody>
                                    <p className="mb-2 text-center fs-18 fw-bold">Controls </p>
                                    <div className="progress animated-progress custom-progress mb-2">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: '2%' }}
                                            aria-valuenow="2"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                                        2 of 138 Implemented
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardBody>
                                    <p className="mb-2 text-center fs-18 fw-bold">
                                        Evidence Tasks{' '}
                                    </p>
                                    <div className="progress animated-progress custom-progress mb-2">
                                        <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            style={{ width: '4%' }}
                                            aria-valuenow="4"
                                            aria-valuemin="0"
                                            aria-valuemax="100"></div>
                                    </div>
                                    <p className="mt-2 mb-0 text-center text-muted fs-14 fw-bold">
                                        4 of 108 Tasks Completed
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <Nav
                                        pills
                                        className="nav nav-pills arrow-navtabs nav-primary bg-light mb-3">
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: 'pointer' }}
                                                className={classnames({
                                                    active: arrowNavTab === '1',
                                                })}
                                                onClick={() => {
                                                    arrowNavToggle('1');
                                                }}>
                                                Policies
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: 'pointer' }}
                                                className={classnames({
                                                    active: arrowNavTab === '2',
                                                })}
                                                onClick={() => {
                                                    arrowNavToggle('2');
                                                }}>
                                                Procedures
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: 'pointer' }}
                                                className={classnames({
                                                    active: arrowNavTab === '3',
                                                })}
                                                onClick={() => {
                                                    arrowNavToggle('3');
                                                }}>
                                                Controls
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: 'pointer' }}
                                                className={classnames({
                                                    active: arrowNavTab === '4',
                                                })}
                                                onClick={() => {
                                                    arrowNavToggle('4');
                                                }}>
                                                Evidence Tasks
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: 'pointer' }}
                                                className={classnames({
                                                    active: arrowNavTab === '5',
                                                })}
                                                onClick={() => {
                                                    arrowNavToggle('5');
                                                }}>
                                                Compliance Calendar
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: 'pointer' }}
                                                className={classnames({
                                                    active: arrowNavTab === '6',
                                                })}
                                                onClick={() => {
                                                    arrowNavToggle('6');
                                                }}>
                                                Readiness Project Calendar
                                            </NavLink>
                                        </NavItem>
                                    </Nav>

                                    <TabContent activeTab={arrowNavTab} className="text-muted">
                                        <TabPane tabId="1" id="arrow-overview">
                                            <Grid
                                                data={policiesTableData}
                                                columns={[
                                                    {
                                                        name: 'Policy Name',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="fw-semibold">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    'Category',
                                                    {
                                                        name: 'Assignee',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="badge bg-primary">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    {
                                                        name: 'Reviewer',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="badge bg-info">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    'Status',
                                                ]}
                                                search={true}
                                                sort={true}
                                                pagination={{ enabled: true, limit: 20 }}
                                            />
                                        </TabPane>
                                        <TabPane tabId="2" id="arrow-profile">
                                            <Grid
                                                data={proceduresTableData}
                                                columns={[
                                                    {
                                                        name: 'Name',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="fw-semibold">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                        width: '520',
                                                    },
                                                    {
                                                        name: 'Assignee',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="badge bg-primary">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    {
                                                        name: 'Reviewer',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="badge bg-info">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    'Status',
                                                ]}
                                                search={true}
                                                sort={true}
                                                pagination={{ enabled: true, limit: 20 }}
                                            />
                                        </TabPane>
                                        <TabPane tabId="3" id="arrow-contact">
                                            <Grid
                                                data={ControlTableData}
                                                columns={[
                                                    {
                                                        name: 'Name',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="fw-semibold">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    'Category',
                                                    'Framework Codes',
                                                    'Tag',
                                                    {
                                                        name: 'Assignee',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="badge bg-primary">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    'Status',
                                                ]}
                                                search={true}
                                                sort={true}
                                                pagination={{ enabled: true, limit: 20 }}
                                            />
                                        </TabPane>
                                        <TabPane tabId="4" id="arrow-contact">
                                            <p></p>
                                            <Grid
                                                data={evidenceTasksTableData}
                                                columns={[
                                                    {
                                                        name: 'Evidence Task',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="fw-semibold">
                                                                    {cell}
                                                                </span>,
                                                            ),
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
                                        </TabPane>
                                        <TabPane tabId="5" id="arrow-contact">
                                            <p>
                                                Use this calendar to collect evidence and view your
                                                readiness project's compliance status by evidence
                                                task.
                                            </p>
                                            <div className="d-flex mb-3">
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-danger"></i>
                                                    <span className="fw-medium text-dark">
                                                        Overdue
                                                    </span>
                                                </div>
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-warning"></i>
                                                    <span className="fw-medium text-dark">
                                                        Due soon
                                                    </span>
                                                </div>
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-success"></i>
                                                    <span className="fw-medium text-dark">
                                                        Collected
                                                    </span>
                                                </div>
                                            </div>
                                            <Grid
                                                data={complianceCalendarTableData}
                                                columns={[
                                                    {
                                                        name: 'Task',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="fw-semibold">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    {
                                                        name: 'Compliance',
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
                                                    {
                                                        name: 'Due Date',
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
                                                                cell === 'overdue' ? (
                                                                    <i className="mdi mdi-circle text-light"></i>
                                                                ) : cell === 'due soon' ? (
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
                                        </TabPane>
                                        <TabPane tabId="6" id="arrow-contact">
                                            <p>
                                                Use this calendar to assign and organize evidence
                                                task due dates to distribute the collection of
                                                evidence.
                                            </p>
                                            <div className="d-flex mb-3">
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-danger"></i>
                                                    <span className="fw-medium text-dark">
                                                        Overdue
                                                    </span>
                                                </div>
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-warning"></i>
                                                    <span className="fw-medium text-dark">
                                                        Due soon
                                                    </span>
                                                </div>
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-light"></i>
                                                    <span className="fw-medium text-dark">
                                                        After due date
                                                    </span>
                                                </div>
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-success"></i>
                                                    <span className="fw-medium text-dark">
                                                        Collected
                                                    </span>
                                                </div>
                                                <div className="me-2 ">
                                                    <i className="mdi mdi-checkbox-blank-circle fs-18 me-1 text-info"></i>
                                                    <span className="fw-medium text-dark">
                                                        Collected after due date
                                                    </span>
                                                </div>
                                            </div>
                                            <Grid
                                                data={complianceCalendarTableData}
                                                columns={[
                                                    {
                                                        name: 'Task',
                                                        formatter: cell =>
                                                            _(
                                                                <span className="fw-semibold">
                                                                    {cell}
                                                                </span>,
                                                            ),
                                                    },
                                                    {
                                                        name: 'Compliance',
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
                                                    {
                                                        name: 'Due Date',
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
                                                                cell === 'overdue' ? (
                                                                    <i className="mdi mdi-circle text-light"></i>
                                                                ) : cell === 'due soon' ? (
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
                                        </TabPane>
                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default AuditsReadinessProjects;
