import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import ReactApexChart from 'react-apexcharts';
import getChartColorsArray from '../../../Components/Common/ChartsDynamicColor';

const vendorRiskBusinessUnit = ({ dataColors }) => {
    var chartStackedBar100Colors = getChartColorsArray(dataColors);
    const series = [
        {
            name: 'Low',
            data: [44, 55, 41],
        },
        {
            name: 'Medium',
            data: [53, 32, 33],
        },
        {
            name: 'High',
            data: [12, 17, 11],
        },
        {
            name: 'Critical',
            data: [1, 3, 2],
        },
    ];

    const options = {
        chart: {
            stacked: !0,
            stackType: '100%',
            toolbar: {
                show: !1,
            },
        },
        plotOptions: {
            bar: {
                horizontal: !0,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff'],
        },
        xaxis: {
            categories: ['Corporate', 'IT', 'Legal'],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val;
                },
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40,
        },
        colors: chartStackedBar100Colors,
    };

    return (
        <React.Fragment>
            <Card className="card">
                <CardHeader className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Vendor Risks By Business Unit</h4>
                </CardHeader>
                <CardBody className="card-body px-0">
                    <ReactApexChart
                        className="apex-charts"
                        options={options}
                        series={series}
                        type="bar"
                    />
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default vendorRiskBusinessUnit;
