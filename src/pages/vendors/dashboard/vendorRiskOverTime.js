import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';
import ReactApexChart from 'react-apexcharts';
import getChartColorsArray from '../../../Components/Common/ChartsDynamicColor';

const VendorRiskOverTime = ({ dataColors }) => {
    var revenueExpensesChartsColors = getChartColorsArray(dataColors);
    var series = [
        {
            name: 'Vendor Risk',
            data: [3, 12, 4, 2, 7, 9, 180, 45, 33, 21, 10, 45],
        },
    ];
    var options = {
        chart: {
            height: 320,
            type: 'area',
            toolbar: 'false',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        xaxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
        },
        colors: revenueExpensesChartsColors,
        fill: {
            opacity: 0.06,
            colors: revenueExpensesChartsColors,
            type: 'solid',
        },
    };
    return (
        <React.Fragment>
            <Card className="card">
                <CardHeader className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Vendor Risks Over Time</h4>
                </CardHeader>
                <CardBody className="card-body px-0">
                    <ReactApexChart
                        className="apex-charts"
                        series={series}
                        options={options}
                        type="area"
                        height={195}
                    />
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default VendorRiskOverTime;
