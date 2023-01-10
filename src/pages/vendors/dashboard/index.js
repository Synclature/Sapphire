import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import FeatherIcon from 'feather-icons-react';
import CountUp from 'react-countup';
import VendorRiskOverTime from './vendorRiskOverTime';
import VendorRiskBusinessUnit from './vendorRiskBusinessUnit';

// Chart
import { Pie, Doughnut } from 'react-chartjs-2';
import getChartColorsArray from '../../../Components/Common/ChartsDynamicColor';

const VendorDashboard = () => {
    document.title = 'Vendor Dashboard';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Vendor Dashboard" pageTitle="Vendor Dashboard" />
                    <Row>
                        <Col lg="4">
                            <Card className="card card-animate">
                                <CardBody className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-semibold text-muted mb-0">
                                                Total Vendors
                                            </p>
                                            <h1 className="mt-4 ff-secondary fw-bold">
                                                <CountUp start={0} end={30} duration={3} />
                                            </h1>
                                        </div>
                                        <div>
                                            <div className="avatar-sm flex-shrink-0">
                                                <span className="avatar-title bg-soft-success rounded-circle fs-2">
                                                    <FeatherIcon
                                                        icon="users"
                                                        className="text-success"></FeatherIcon>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card className="card card-animate">
                                <CardBody className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-semibold text-muted mb-0">
                                                Total High Risk Vendors
                                            </p>
                                            <h1 className="mt-4 ff-secondary fw-bold">
                                                <CountUp start={0} end={14} duration={3} />
                                            </h1>
                                        </div>
                                        <div>
                                            <div className="avatar-sm flex-shrink-0">
                                                <span className="avatar-title bg-soft-danger rounded-circle fs-2">
                                                    <FeatherIcon
                                                        icon="alert-triangle"
                                                        className="text-danger"></FeatherIcon>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="8">
                            <VendorRiskOverTime dataColors='["--vz-danger"]' />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6">
                            <VendorRiskBusinessUnit dataColors='["--vz-info", "--vz-warning", "--vz-danger", "--vz-red"]' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

// Final Risk Exposure
const FinalRiskExposure = ({ dataColors }) => {
    var pieChartColors = getChartColorsArray(dataColors);
    const data = {
            labels: ['High', 'Medium', 'Low'],
            datasets: [
                {
                    data: [77.2, 18.2, 4.6],
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

// Risk Ownerhip breakup
const RiskOwnershipBreakup = ({ dataColors }) => {
    var pieChartColors = getChartColorsArray(dataColors);
    const data = {
            labels: [
                'Enterprise Sales',
                'Client Servicing Team',
                'Care Providers',
                'HR - People Experience',
                'Admin - People Experience',
                'Finance and Accounts',
                'CS & Legal',
                'Information Technology',
                'Product Team',
                'Hospitals BU',
                'Medical Governance',
                'Data Analytics',
                'Marketing',
            ],
            datasets: [
                {
                    label: '%',
                    data: [7, 9, 18, 6, 8, 5, 10, 2, 3, 16, 11, 4, 1],
                    rotation: -90,
                    circumference: 180,
                    backgroundColor: pieChartColors,
                    hoverBackgroundColor: pieChartColors,
                    hoverBorderColor: '#fff',
                },
            ],
        },
        option = {
            legend: {
                display: false,
                labels: {
                    font: {
                        family: 'Poppins',
                    },
                },
            },
        };
    return (
        <React.Fragment>
            <Doughnut width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

// Risk Status
const RiskStatus = ({ dataColors }) => {
    var pieChartColors = getChartColorsArray(dataColors);
    const data = {
            labels: ['High', 'Medium', 'Low'],
            datasets: [
                {
                    data: [77.2, 22.8],
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

// Risk Ownerhip breakup
const RiskCategoryBreakup = ({ dataColors }) => {
    var pieChartColors = getChartColorsArray(dataColors);
    const data = {
            labels: [
                'Physical Security',
                'Human Resource',
                'Care Providers',
                'HR - People Experience',
                'Admin - People Experience',
                'Finance and Accounts',
                'CS & Legal',
                'Information Technology',
                'Product Team',
                'Hospitals BU',
                'Medical Governance',
                'Data Analytics',
                'Marketing',
            ],
            datasets: [
                {
                    label: '%',
                    data: [10, 15, 6, 19, 11, 2, 7, 1, 3, 9, 8, 5, 4],
                    rotation: -90,
                    circumference: 180,
                    backgroundColor: pieChartColors,
                    hoverBackgroundColor: pieChartColors,
                    hoverBorderColor: '#fff',
                },
            ],
        },
        option = {
            legend: {
                display: false,
                labels: {
                    font: {
                        family: 'Poppins',
                    },
                },
            },
        };
    return (
        <React.Fragment>
            <Doughnut width={723} height={320} data={data} options={option} />
        </React.Fragment>
    );
};

export default VendorDashboard;
