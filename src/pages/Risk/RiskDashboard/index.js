import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

// Chart
import { Pie, Doughnut } from 'react-chartjs-2';
import getChartColorsArray from '../../../Components/Common/ChartsDynamicColor';

const RiskDashboard = () => {
    document.title = 'Risk Dashboard';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Risk Dashboard" pageTitle="Risk Dashboard" />
                    <Row>
                        <Col lg="6" className="mb-4">
                            <p className="fs-22 lh-base text-dark fw-bold text-center mb-3">
                                Final Risk Exposure
                            </p>
                            <FinalRiskExposure dataColors='["--vz-danger", "--vz-warning", "--vz-success"]' />
                        </Col>
                        <Col lg="6" className="mb-4">
                            <p className="fs-22 lh-base text-dark fw-bold text-center mb-3">
                                Risk Ownership Breakup
                            </p>
                            <RiskOwnershipBreakup dataColors='["--vz-danger", "--vz-warning", "--vz-success", "#ad0b30", "#16126b", "#b658f3", "#b1e4f3", "#284c6d", "#b9e457", "#e29785", "#fb4d63", "#134b88"] ' />
                        </Col>
                        <Col lg="6" className="mb-4">
                            <p className="fs-22 lh-base text-dark fw-bold text-center mb-3">
                                Risk Status
                            </p>
                            <RiskStatus dataColors='["--vz-danger", "--vz-warning", "--vz-success"]' />
                        </Col>
                        <Col lg="6" className="mb-4">
                            <p className="fs-22 lh-base text-dark fw-bold text-center mb-3">
                                Risk Category Breakup
                            </p>
                            <RiskCategoryBreakup dataColors='["--vz-danger", "--vz-warning", "--vz-success", "#ad0b30", "#16126b", "#b658f3", "#b1e4f3", "#284c6d", "#b9e457", "#e29785", "#fb4d63", "#134b88"] ' />
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

export default RiskDashboard;
