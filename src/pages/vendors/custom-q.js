import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Form,
    Input,
    Label,
    Nav,
    NavItem,
    NavLink,
    TabPane,
    TabContent,
} from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import classnames from 'classnames';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CustomVendorQuestionnaire = () => {
    document.title = 'Custom Questionnaire';

    const [maturity, setMaturity] = useState(0);

    const labels = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
    };

    const customQuestionTab = [
        { title: 'Company and Service profile' },
        { title: 'Organization and Incident Management' },
        { title: 'Access Control' },
        { title: 'Access Management' },
        { title: 'Network and System Security' },
        { title: 'Change Management' },
        { title: 'Asset Management' },
        { title: 'Physical Security' },
        { title: 'Backup Retention & Recovery' },
        { title: 'Decommissioning and Destruction' },
    ];

    const customQuestionTabContent = [
        [
            {
                qno: '1.0',
                title: 'Please enter the full legal company name:',
                answerArea: (
                    <div>
                        <p>Hellow World</p>
                    </div>
                ),
            },
            {
                qno: '1.1',
                title: 'Please enter your full name and job title:',
            },
            {
                qno: '1.2',
                title: 'Please provide your email:',
            },
            {
                qno: '1.3',
                title: 'Please provide your contact number:',
            },
            {
                qno: '1.4',
                title: 'Which economic area(s) are you located in? (e.g. EMEA, Asia, Americas, Global):',
            },
            {
                qno: '1.5',
                title: `Please indicate what services are in scope for the controls assessed in this questionnaire.
                If all controls within your organization are global and would apply regardless of the service in scope for assessment, please state "All Services".`,
            },
            {
                qno: '1.6',
                title: `Which of the following forms of data transfer would be used when inputting, retrieving,  sending and/or receiving data with Morgan Stanley and/or Morgan Stanley clients?
                If Secure Internet Portal or Application is chosen, please provide the name of the application within the Additional Comments section.`,
            },
            {
                qno: '1.7',
                title: `Please provide a list of all locations where Morgan Stanley data will be stored/processed as a part of this service.
                -Primary Data center(s) (city / country)
                -Location of primary office(s) from which your organization's staff/personnel support Morgan Stanley`,
            },
        ],
        [
            {
                qno: '2.0',
                title: `Does your information Security governance program includes, and are stakeholders responsible and held accountable 
                (i.e, subject to the obligations to report , explain , or justify) for the following
                `,
                qxq: (
                    <div>
                        <ul>
                            <li>Central oversight, coordination, monitoring, and testing</li>
                            <li>
                                Assignment of the responsibility and definition of the risk
                                tolerance/thresholds
                            </li>
                            <li>Review of internet and external assessment /audit results</li>
                            <li>
                                Risk Management and Oversight Function (Identification,
                                Registration, Assessment, Measurement, Escalation, Response,
                                Reporting, Oversight, Acceptance)
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                qno: '2.1',
                title: 'What is tour frequency for performing risk assessments?',
            },
            {
                qno: '2.2',
                title: 'Is there a central risk register where all risks are maintained with clear risk owners and review regularly',
            },
            {
                qno: '2.3',
                title: `Does your business perform any of the following functions on behalf of Morgan Stanley`,
                qxq: (
                    <div>
                        <ul>
                            <li>Account Opening</li>
                            <li>Account Servicing</li>
                            <li>
                                Moving Money (including cash, credit or payment service,
                                redemptions, withdrawals or distributions)
                            </li>
                            <li>
                                Client authentication/validation of client personal identifiable
                                information (CIP/KYC function)
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                qno: '2.4',
                title: '',
            },
        ],
        [
            {
                qno: '3.0',
                title: 'Do you have a documented process in place to report any suspected or actual incidents to all the interested parties/stakeholders (internal and external)? If yes, please share the process.',
            },
            {
                qno: '3.1',
                title: 'Do you have a documented process in place to log and manage any changes in your organisation? How  are the changes informed to the relevant interested parties/stakeholders (internal and external)? Please share the process document(s).',
            },
        ],
    ];

    // Vertical Nav Tabs
    const [verticalTab, setverticalTab] = useState(0);
    const toggleVertical = tab => {
        if (verticalTab !== tab) {
            setverticalTab(tab);
        }
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Custom Questionnaire" pageTitle="Custom Questionnaire" />
                    <Row>
                        <Col lg="3">
                            <Card>
                                <CardBody>
                                    <Nav pills className="flex-column" id="v-pills-tab">
                                        {customQuestionTab.map((tab, index) => (
                                            <NavItem key={index}>
                                                <NavLink
                                                    style={{ cursor: 'pointer' }}
                                                    className={classnames({
                                                        'mb-2': true,
                                                        active: verticalTab === index,
                                                    })}
                                                    onClick={() => {
                                                        toggleVertical(index);
                                                    }}
                                                    id={`v-pills-${index}-tab`}>
                                                    {tab.title}
                                                </NavLink>
                                            </NavItem>
                                        ))}
                                    </Nav>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="9">
                            <Card>
                                <CardBody>
                                    <TabContent
                                        activeTab={verticalTab}
                                        className="text-muted mt-4 mt-md-0"
                                        id="v-pills-tabContent">
                                        {customQuestionTabContent.map((questions, index) => (
                                            <TabPane
                                                key={index}
                                                tabId={index}
                                                id={`v-${index}-home`}>
                                                {questions.map((question, index) => (
                                                    <div
                                                        className="d-flex align-items-start border shadow mb-2 p-2"
                                                        key={index}>
                                                        <div className="avatar-xs flex-shrink-0">
                                                            <span className="avatar-title bg-secondary rounded-circle fs-18">
                                                                {question.qno}
                                                            </span>
                                                        </div>

                                                        <div className="ps-4 w-100">
                                                            <p className="fs-16 fw-bold mb-4 text-black">
                                                                {question.title}
                                                            </p>
                                                            <p className="fs-16 fw-bold mb-4 text-black">
                                                                {question.qxq}
                                                            </p>

                                                            <div className="hstack gap-2 flex-wrap mb-4">
                                                                <Input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name={`applicability${index}[]`}
                                                                    id={`yes${index}`}
                                                                />
                                                                <Label
                                                                    className="btn btn-outline-primary"
                                                                    for={`yes${index}`}>
                                                                    Yes
                                                                </Label>

                                                                <Input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name={`applicability${index}[]`}
                                                                    id={`No${index}`}
                                                                />
                                                                <Label
                                                                    className="btn btn-outline-primary"
                                                                    for={`No${index}`}>
                                                                    No
                                                                </Label>

                                                                <Input
                                                                    type="radio"
                                                                    className="btn-check"
                                                                    name={`applicability${index}[]`}
                                                                    id={`noApplicable${index}`}
                                                                />
                                                                <Label
                                                                    className="btn btn-outline-primary"
                                                                    for={`noApplicable${index}`}>
                                                                    Not Applicable
                                                                </Label>
                                                            </div>
                                                            <div className="p-3">
                                                                <p className="fs-18 fw-bold">
                                                                    Criticality
                                                                </p>
                                                                <Slider
                                                                    value={maturity}
                                                                    min={1}
                                                                    max={5}
                                                                    labels={labels}
                                                                    orientation="horizontal"
                                                                    onChange={value => {
                                                                        setMaturity(value);
                                                                    }}
                                                                    className="d-block"
                                                                />
                                                            </div>

                                                            <div className="p-3">
                                                                <p className="fs-18 fw-bold">
                                                                    Vendor/Partner Responses
                                                                </p>

                                                                <Form method="post">
                                                                    <CKEditor
                                                                        editor={ClassicEditor}
                                                                        data=""
                                                                        onReady={editor => {
                                                                            // You can store the "editor" and use when it is needed.
                                                                        }}
                                                                        onChange={editor => {
                                                                            editor.getData();
                                                                        }}
                                                                    />
                                                                </Form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </TabPane>
                                        ))}
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

export default CustomVendorQuestionnaire;
