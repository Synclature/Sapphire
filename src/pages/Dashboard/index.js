import React from 'react';
import { Container, Row, Card, CardBody, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import Stats from '../../Components/widgets/stats';
import MyTasks from '../../Components/widgets/taskList';
import { tasks } from '../../common/data';

// Data
const statsData = [
    {
        polices: [
            {
                id: 1,
                label: 'Published',
                counter: '13',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
            {
                id: 1,
                label: 'In Progress',
                counter: '5',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
        ],
        controls: [
            {
                id: 1,
                label: 'Implemented',
                counter: '207',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
            {
                id: 1,
                label: 'In Progress',
                counter: '348',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
        ],
        evidence: [
            {
                id: 1,
                label: 'Completed',
                counter: '238',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
            {
                id: 1,
                label: 'In Progress',
                counter: '1003',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
        ],
        certificationRequest: [
            {
                id: 1,
                label: 'Completed',
                counter: '16',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
            {
                id: 1,
                label: 'In Progress',
                counter: '132',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
        ],
        securitiesQuestionnaires: [
            {
                id: 1,
                label: 'Completed',
                counter: '2',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
            {
                id: 1,
                label: 'In Progress',
                counter: '3',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
        ],
        vrmVendors: [
            {
                id: 1,
                label: 'Completed',
                counter: '0',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
            {
                id: 1,
                label: 'In Progress',
                counter: '3',
                decimals: 0,
                suffix: '',
                prefix: '',
            },
        ],
    },
];

const Dashboard = () => {
    document.title = 'Dashboard';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Dashboard" />
                    <Row className="row-cols-1" gap="2" md="2" lg="3">
                        <Col>
                            <Stats
                                data={statsData[0].polices}
                                icon="mdi mdi-shield-bug-outline"
                                title="Polices"
                            />
                        </Col>
                        <Col>
                            <Stats
                                data={statsData[0].controls}
                                icon="mdi mdi-hook"
                                title="Controls"
                            />
                        </Col>
                        <Col>
                            <Stats
                                data={statsData[0].evidence}
                                icon="mdi mdi-shield-search"
                                title="Evidence"
                            />
                        </Col>
                        <Col>
                            <Stats
                                data={statsData[0].certificationRequest}
                                icon="mdi mdi-certificate-outline"
                                title="Certification Request"
                            />
                        </Col>
                        <Col>
                            <Stats
                                data={statsData[0].securitiesQuestionnaires}
                                icon="mdi mdi-notebook-outline"
                                title="Securities Questionnaires"
                            />
                        </Col>
                        <Col>
                            <Stats
                                data={statsData[0].vrmVendors}
                                icon="mdi mdi-account-group-outline"
                                title="VRM Vendors"
                            />
                        </Col>
                    </Row>
                    <Row lg="2">
                        <Col>
                            <MyTasks title="Assigned to Me" tasks={tasks} />
                        </Col>
                        <Col>
                            <MyTasks title="Unread Mentions" tasks={tasks} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xxl={4}>
                            <Card className="card-primary">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 ms-3">
                                            <p className="card-text fw-medium">
                                                Identify areas where your business is falling short.
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                                <div className="card-footer">
                                    <div className="text-center">
                                        <Link to="#" className="link-light fs-20 fw-bold">
                                            Scheduled an audit{' '}
                                            <i className="ri-arrow-right-s-line align-middle lh-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="card-success">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 ms-3">
                                            <p className="card-text fw-medium">
                                                Book for a comprehensive and reliable VAPT service
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                                <div className="card-footer">
                                    <div className="text-center">
                                        <Link to="#" className="link-light fs-20 fw-bold">
                                            Book a VAPT{' '}
                                            <i className="ri-arrow-right-s-line align-middle lh-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="card-danger">
                                <CardBody>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-grow-1 ms-3">
                                            <p className="card-text fw-medium">
                                                Feeling Stuck on a particular topic, talk to our
                                                expert now.
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                                <div className="card-footer">
                                    <div className="text-center">
                                        <Link to="#" className="link-light fs-20 fw-bold">
                                            Talk to an expert{' '}
                                            <i className="ri-arrow-right-s-line align-middle lh-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
