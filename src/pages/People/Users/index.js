import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import { Link } from 'react-router-dom';

const users = [
    {
        name: 'Nancy Martino',
        id: '23230223',
        position: 'Team Leader & HR',
        projects: '225',
        tasks: '197',
    },
    {
        name: 'Henry Baird',
        id: '23230123',
        position: 'Full Stack Developer',
        projects: '352',
        tasks: '376',
    },
    {
        name: 'Frank Hook',
        id: '23230226',
        position: 'Project Manager',
        projects: '164',
        tasks: '182',
    },
    {
        name: 'Jennifer Carter',
        id: '23230223',
        position: 'UI/UX Designer',
        projects: '241',
        tasks: '204',
    },
    {
        name: 'Megan Elmore',
        id: '23230223',
        position: 'Team Leader & Web Developer',
        projects: '201',
        tasks: '263',
    },
    {
        name: 'Alexis Clarke',
        id: '12230223',
        position: 'Backend Developer',
        projects: '132',
        tasks: '147',
    },
    {
        name: 'Nathan Cole',
        id: '23230223',
        position: 'Front-End Developer',
        projects: '352',
        tasks: '376',
    },
    {
        name: 'Joseph Parker',
        id: '23230223',
        position: 'Full Stack Developer',
        projects: '64',
        tasks: '93',
    },
    {
        name: 'Erica Kernan',
        id: '23230223',
        position: 'Web Designer',
        projects: '345',
        tasks: '298',
    },
    {
        name: 'Donald Palmer',
        id: '23230223',
        position: 'Wed Developer',
        projects: '97',
        tasks: '135',
    },
    {
        name: 'Jack Gough',
        id: '23230223',
        position: 'React Js Developer',
        projects: '87',
        tasks: '121',
    },
    {
        name: 'Marie Ward',
        id: '23230223',
        position: 'Backend Developer',
        projects: '145',
        tasks: '210',
    },
];

const Users = () => {
    document.title = 'Invite User';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Invite User" pageTitle="Invite User" />
                    <Row>
                        <Card>
                            <CardHeader className="d-flex align-items-center justify-content-end">
                                <Link to="/people/user/invite" className="btn btn-primary">
                                    <i className="las la-plus mr-sm-2"></i>Invite User
                                </Link>
                            </CardHeader>
                            <CardBody>
                                <Grid
                                    data={users}
                                    columns={[
                                        {
                                            name: 'Id',
                                            hidden: true,
                                        },
                                        {
                                            name: 'Name',
                                            formatter: (cell, row) =>
                                                _(
                                                    <a
                                                        href={`/people/user/${row.cells[0].data}`}
                                                        className="fw-semibold">
                                                        {cell}
                                                    </a>,
                                                ),
                                        },
                                        {
                                            name: 'Position',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        {
                                            name: 'Projects',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
                                        },
                                        {
                                            name: 'Tasks',
                                            formatter: cell =>
                                                _(<span className="fw-semibold">{cell}</span>),
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
        </React.Fragment>
    );
};

export default Users;
