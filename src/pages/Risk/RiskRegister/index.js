import React from 'react';
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';
import { Link } from 'react-router-dom';

const RiskRegisterData = [
    [
        '20 June 2020',
        'Product Team',
        'IA26 - Application Software / Firewall - Sentinel-one - Firewall',
        'Application security breaches',
        'Absence of/ insufficient software security testing ',
        'Could lead to information security breach due to software Glitches/ vulnerability getting exploited as adequate testing is not being conducted for softwares.',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Product Team',
        'IP19IT Infra- Business continuity and availability of information processing systems',
        'Application security breaches',
        'Secure development policy not defined ',
        'Could lead to information security breach due to software Glitches/ vulnerability getting exploited as guideline for developing software securely is not defined. ',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Product Team',
        'IP26IT & Information Security - Change management procedure',
        'Application security breaches',
        'Security testing of development environment or testing of application if development environment changes not performed',
        'Could lead to information security breach due to software Glitches/ vulnerability getting exploited as security testing not conducted whenever any platform or application changes occur.',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Product Team',
        'IA19 - Application Software/ Hosting platform - AWS ',
        'Unavailability of information or information processing facility (Hardware / Software)',
        'Test instance and production instance not separated',
        'Software Glitches leading to availability issues',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IP10Asset Management - System Acquisition - specifications and requirements',
        'Data Leakage',
        'Assets not formatted/ stored securely prior to disposal',
        'The loss/ theft of information asset could lead to disclosure of confidential information or availability issues.',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IA6 - Hardware  - Removable Storage Devices',
        'Data Leakage',
        'No access control on removable media (cd/dvd writers, usb disks, flash drive)',
        'Exploitation of critical assets such as malware infection',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IA44 - Company Data - Electronic  - Company information stored digitally',
        'Data Leakage',
        'DLP measures/tools not implemented ',
        'If DLP tools is not implemented it could lead leakage of sensitive information/ intellectual property from the organisation.',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'HR - People Experience',
        'IP4Third Party - Supplier redundancy / Supply Chain ',
        'Data Leakage',
        'Information access rights and assets provided to vendors not collected/revoked post termination ',
        'It information assets are not collected back from vendors and theirs access is not revoked after their contract it could result in exploitation of critical assets',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'HR - People Experience',
        'IP13Human Resources- Training and Awarness programs for employees ',
        'Data Leakage',
        'Lack of clear description regarding copyright/ privacy laws/IPR for employees and information security related responsibility',
        'Non-compliance to contractual, legal, regulatory obligations/ IPR could lead to information security breach',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Admin - People Experience',
        'IP15Human Resources- Disciplinary process',
        'Data Leakage',
        'Photo capturing devices are allowed/ being taken inside sensitive areas',
        'Leakage of organisational and client confidential information and data',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'HR - People Experience',
        'IP10Asset Management - System Acquisition - specifications and requirements',
        'Data Leakage',
        'Sensitivity/ criticality of information assets not identified',
        'If information assets are not classified it could lead access to unauthorised user causing information security breach ',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IA8 - Hardware  - Server - Data centre',
        'Data Loss',
        'Backup error logs not reviewed and maintained ',
        'Business disruptions leading to loss of brand value and customer dissatisfaction due to Data unavailability',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IA8 - Hardware  - Server - Data centre',
        'Data Loss',
        'Data backup/ restoration of data is not tested ',
        'Business disruptions leading to loss of brand value and customer dissatisfaction due to data unavailability/ loss of data.',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IA8 - Hardware  - Server - Data centre',
        'Data Loss',
        'Inadequate/absence of backup process as per the procedure',
        'Business disruptions leading to loss of brand value and customer dissatisfaction, Business disruption and Data unavailability',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'HR - People Experience',
        'IP10Asset Management - System Acquisition - specifications and requirements',
        'Data Loss',
        'Assets not collected from employees post termination',
        'Unauthorised access or continued access of asset and/or data post separation of employee',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'CS & Legal',
        'IP17Legal - Maintenance of compliance / legal register',
        'Data Loss',
        'Retention periods for critical documents/information not defined ',
        'Data unavailability or breach of legal or contractual obligations due to early disposal of data / records.',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Admin - People Experience',
        'IA1 - Building and Infrastructure  - Khar, Mumbai Office ',
        'Disasters (Natural, Man-made)',
        'Access controlled doors do not fail-safe in case of emergencies ',
        'Inefficient physical security mechanisms deployed on premises leading to employee dissatisfaction and employee churn',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Admin - People Experience',
        'IA1 - Building and Infrastructure  - Khar, Mumbai Office ',
        'Disasters (Natural, Man-made)',
        'Contact details of emergency and safety services not maintained',
        'Inefficient physical security mechanisms deployed on premises leading to employee dissatisfaction and employee churn',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Admin - People Experience',
        'IA1 - Building and Infrastructure  - Khar, Mumbai Office ',
        'Disasters (Natural, Man-made)',
        'Power redundancies for critical server rooms not identified',
        'Business disruptions due to failure of key equipment leading to loss of brand value and customer dissatisfaction.',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Admin - People Experience',
        'IA1 - Building and Infrastructure  - Khar, Mumbai Office ',
        'Disasters (Natural, Man-made)',
        'Site risk assessment not performed (for natural disasters e.g. earthquake, flood etc.)',
        'Control requirements for risks associated physical and environmental security will go unidentified if risk assessment is not performed.  ',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'HR - People Experience',
        'IP13Human Resources- Training and Awarness programs for employees ',
        'Disclosure of information',
        'Critical documents found unattended (on desks and near printers)',
        'Disclosure of sensitive information',
        '',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'HR - People Experience',
        'IP13Human Resources- Training and Awarness programs for employees ',
        'Disclosure of information',
        'Critical documents found unattended (on desks and near printers)',
        'Loss of customer(s)/ applicant(s) documents',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Admin - People Experience',
        'IA50 - Non-IT asset  - Confidential Waste bins/ Shredders',
        'Disclosure of information',
        'Critical documents not disposed securely  ',
        'Disclosure of sensitive information',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IA50 - Non-IT asset  - Confidential Waste bins/ Shredders',
        'Disclosure of information',
        '',
        'Loss of customer(s)/ applicant(s) documents',
        'No further action',
        '26 May 2022',
        'None',
    ],
    [
        '20 June 2020',
        'Information Technology',
        'IP10Asset Management - System Acquisition - specifications and requirements',
        'Disclosure of information',
        'Lack of information classification and labelling ',
        'Disclosure of sensitive information',
        'No further action',
        '26 May 2022',
        'None',
    ],
];

const RiskRegister = () => {
    document.title = 'Risk Register';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Risk Register" pageTitle="Risk Register" />
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader className="d-flex align-items-center justify-content-end">
                                    <Link
                                        to="/risk/risk-register/create"
                                        className="btn btn-primary">
                                        <i className="las la-plus mr-sm-2"></i>Create Risk Mapping
                                    </Link>
                                </CardHeader>
                                <CardBody>
                                    <Grid
                                        data={RiskRegisterData}
                                        columns={[
                                            {
                                                name: 'Risk Identification Date',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Risk Owner/ Department',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Context',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Threat',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Vulnerability',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '300px',
                                            },
                                            {
                                                name: 'Risk',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '500px',
                                            },
                                            {
                                                name: 'Status',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                                width: '100px',
                                            },
                                            {
                                                name: 'Review Date',
                                                formatter: cell =>
                                                    _(<span className="fw-semibold">{cell}</span>),
                                            },
                                            {
                                                name: 'Review Comments',
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default RiskRegister;
