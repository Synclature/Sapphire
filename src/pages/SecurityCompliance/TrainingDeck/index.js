import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Link } from 'react-router-dom';

// Chart
import { Pie } from 'react-chartjs-2';
import getChartColorsArray from '../../../Components/Common/ChartsDynamicColor';

// Images
import Bgd from '../../../assets/images/bg-d.png';

const TrainingDeck = () => {
    document.title = 'TrainingDeck';
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

export default TrainingDeck;
