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

// Chart
import { Pie } from 'react-chartjs-2';
import getChartColorsArray from '../../../Components/Common/ChartsDynamicColor';

// Images
import Bgd from '../../../assets/images/bg-d.png';

// Unimplemented Policies
const unimplementedPolicies = [
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

// Unimplemented Controls
const unimplementedControls = [
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
];

// Completed Policies
const completedPolicies = [
    ['Network Security', 'Information and Communication', 'Abhishek', 'Gajodhar', 'Published'],
    ['Access Control', 'Access Control', 'Akhilesh', 'Ramesh', 'Published'],
];

// Completed Controls
const completedControls = [
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

const CertificationsDeck = () => {
    document.title = 'CertificationsDeck';

    // Tab
    const [justifyPillsTab, setjustifyPillsTab] = useState('1');
    const justifyPillsToggle = tab => {
        if (justifyPillsTab !== tab) {
            setjustifyPillsTab(tab);
        }
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb
                        title="Security Certification Assessment"
                        pageTitle="Security Certification Assessment"
                    />
                    <Row>
                        <Col>
                            <Card className="overflow-hidden">
                                <CardBody className="bg-marketplace d-flex">
                                    <div className="flex-grow-1">
                                        <h4 className="fs-18 lh-base mb-0 text-success fw-bold">
                                            There's work to be done.
                                        </h4>
                                        <p className="mb-0 mt-2 pt-1 fs-18">
                                            Your assessment is complete but you still have work to
                                            do before you have fulfilled the <strong>SOC 2</strong>{' '}
                                            requirements. We found <strong>102 times</strong> that
                                            require your attention. See below for details.
                                        </p>
                                    </div>
                                    <img src={Bgd} alt="" className="img-fluid" />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row lg="2">
                        <Col>
                            <p className="fs-22 lh-base text-dark fw-bold text-center mb-3">
                                Polices
                            </p>
                            <PoliciesChart dataColors='["--vz-success", "--vz-warning"]' />
                        </Col>
                        <Col>
                            <p className="fs-22 lh-base text-dark fw-bold text-center mb-3">
                                Controls
                            </p>
                            <ControlsChart dataColors='["--vz-success", "--vz-warning"]' />
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col>
                            <div className="card bg-light overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">
                                                <b className="text-danger">30%</b> High Risk
                                                Controls
                                            </h6>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h6 className="mb-0">23 of 77</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress bg-soft-danger rounded-0">
                                    <div
                                        className="progress-bar bg-danger bg-gradient"
                                        role="progressbar"
                                        style={{ width: '30%' }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card bg-light overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">
                                                <b className="text-warning">20%</b> Medium Risk
                                                Controls
                                            </h6>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h6 className="mb-0">23 of 77</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress bg-soft-warning rounded-0">
                                    <div
                                        className="progress-bar bg-warning bg-gradient"
                                        role="progressbar"
                                        style={{ width: '20%' }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="card bg-light overflow-hidden">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">
                                                <b className="text-success">0%</b> Low Risk Controls
                                            </h6>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <h6 className="mb-0">0 of 0</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="progress bg-soft-success rounded-0">
                                    <div
                                        className="progress-bar bg-success bg-gradient"
                                        role="progressbar"
                                        style={{ width: '0%' }}
                                        aria-valuenow="0"
                                        aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Nav pills className="nav-justified mb-3">
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: justifyPillsTab === '1' })}
                                    onClick={() => {
                                        justifyPillsToggle('1');
                                    }}>
                                    <p className="fs-20 mb-0">
                                        21 <span className="fs-18">Unimplemented Policies</span>
                                    </p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: justifyPillsTab === '2' })}
                                    onClick={() => {
                                        justifyPillsToggle('2');
                                    }}>
                                    <p className="fs-20 mb-0">
                                        15 <span className="fs-18">Unimplemented Controls</span>
                                    </p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: justifyPillsTab === '3' })}
                                    onClick={() => {
                                        justifyPillsToggle('3');
                                    }}>
                                    <p className="fs-20 mb-0">
                                        7 <span className="fs-18">Completed Policies</span>
                                    </p>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    style={{ cursor: 'pointer' }}
                                    className={classnames({ active: justifyPillsTab === '4' })}
                                    onClick={() => {
                                        justifyPillsToggle('4');
                                    }}>
                                    <p className="fs-20 mb-0">
                                        2 <span className="fs-18">Completed Controls</span>
                                    </p>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Row>
                    <Row>
                        <TabContent activeTab={justifyPillsTab} className="text-muted">
                            <TabPane tabId="1" id="pill-justified-home-1">
                                <Grid
                                    data={unimplementedPolicies}
                                    columns={[
                                        {
                                            name: 'Policy Name',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        'Category',
                                        {
                                            name: 'Assignee',
                                            formatter: cell =>
                                                _(<span className="badge bg-primary">{cell}</span>),
                                        },
                                        {
                                            name: 'Reviewer',
                                            formatter: cell =>
                                                _(<span className="badge bg-info">{cell}</span>),
                                        },
                                        'Status',
                                    ]}
                                    search={true}
                                    sort={true}
                                    pagination={{ enabled: true, limit: 20 }}
                                />
                            </TabPane>
                            <TabPane tabId="2" id="pill-justified-home-2">
                                <Grid
                                    data={unimplementedControls}
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
                            </TabPane>
                            <TabPane tabId="3" id="pill-justified-home-3">
                                <Grid
                                    data={completedPolicies}
                                    columns={[
                                        {
                                            name: 'Policy Name',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        'Category',
                                        {
                                            name: 'Assignee',
                                            formatter: cell =>
                                                _(<span className="badge bg-primary">{cell}</span>),
                                        },
                                        {
                                            name: 'Reviewer',
                                            formatter: cell =>
                                                _(<span className="badge bg-info">{cell}</span>),
                                        },
                                        'Status',
                                    ]}
                                    search={true}
                                    sort={true}
                                    pagination={{ enabled: true, limit: 20 }}
                                />
                            </TabPane>
                            <TabPane tabId="4" id="pill-justified-home-4">
                                <Grid
                                    data={completedControls}
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
                            </TabPane>
                        </TabContent>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

// Polices Chart
const PoliciesChart = ({ dataColors }) => {
    var pieChartColors = getChartColorsArray(dataColors);
    const data = {
            labels: ['Completed', 'Incomplete'],
            datasets: [
                {
                    data: [90, 10],
                    rotation: -90,
                    circumference: 180,
                    backgroundColor: pieChartColors,
                    hoverBackgroundColor: pieChartColors,
                    hoverBorderColor: '#fff',
                },
            ],
        },
        option = {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Poppins',
                        },
                    },
                },
            },
        };
    return (
        <React.Fragment>
            <Pie width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

// Polices Chart
const ControlsChart = ({ dataColors }) => {
    var pieChartColors = getChartColorsArray(dataColors);
    const data = {
            labels: ['Completed', 'Incomplete'],
            datasets: [
                {
                    data: [10, 90],
                    rotation: -90,
                    circumference: 180,
                    backgroundColor: pieChartColors,
                    hoverBackgroundColor: pieChartColors,
                    hoverBorderColor: '#fff',
                },
            ],
        },
        option = {
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Poppins',
                        },
                    },
                },
            },
        };
    return (
        <React.Fragment>
            <Pie width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

export default CertificationsDeck;
