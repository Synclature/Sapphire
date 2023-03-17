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

const VendorQuestionnaire = () => {
    document.title = 'Custom Questionnaire';

    const [maturity, setMaturity] = useState(0);

    const labels = {
        1: '1',
        2: '2',
        3: '3',  
        4: '4',
        5: '5',
    };

    const customQuestionnaireTab = [
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

    const customQuestionnaireTabContent = [
        [
            {
                qno: '1.0',
                title: 'Please enter the full legal company name:',
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
                (i.e, subject to the obligations to report , explain , or justify) for the following `,
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
                title: `Does your business perform any of the following functions on behalf of Morgan Stanley 
                    -Account Opening 
                    -Account Servicing 
                    -Moving Money (including cash, credit or payment service, redemptions, withdrawals or distributions)
                    -Client authentication/validation of client personal identifiable information (CIP/KYC function)
                `,
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
        [
            {
                qno: '4.0',
                title: 'Do you have a documented authentication and access management process that includes access provisioning and de-provisioning for employees?',
            },
            {
                qno: '4.1',
                title: 'Do you have a password policy in place? If yes, please share the same.',
            },
            {
                qno: '4.2',
                title: 'Do you have a two factor/multifactor authentication in place? If yes, for which systems?',
            },
            {
                qno: '4.5',
                title: 'Do you use any third-party tool/software for identity and access management? If yes, please provide the name, version.',
            },
            {
                qno: '4.6',
                title: "Do you perform periodic access review for the platform from which members of your organisation would have access to PayU Credit's customer information?",
            },
            {
                qno: '4.7',
                title: 'Do you provide access to system and data to a third-party. If yes, please describe the third-party security and auditing policy.',
            },
        ],
        [
            {
                qno: '5.0',
                title: 'Do you have any malware protection or antivirus solution in place?',
            },
            {
                qno: '5.1',
                title: 'Do you take backup of your end-user/customer data?',
            },
            {
                qno: '5.2',
                title: 'Do you use VPN to access application services ?',
            },
            {
                qno: '5.3',
                title: 'Do you have a network security controls like network gateway firewall, intrusion detection systems, intrusion prevention systems in place ? Please specify OEMs and versions.',
            },
            {
                qno: '5.4',
                title: 'Do you have documented Business Continuity/Disaster Recovery Plan?  ',
            },
            {
                qno: '5.5',
                title: 'Is there a backup of user and administrator logs done?   ',
            },
            {
                qno: '5.6',
                title: 'Do you have physical security access control in your office? ',
            },
            {
                qno: '5.7',
                title: 'How do you ensure that audit logs collected & archived at a location (server/ desktop) have restricted access only?',
            },
        ],
        [
            {
                qno: '6.0',
                title: 'How long do you keep logs and audit trails? Can you keep them as long as we desire?',
            },
            {
                qno: '6.1',
                title: 'Are your data centers under local compliance requirements? If so, which ones?',
            },
            {
                qno: '6.2',
                title: `Do you hold any of the below certifications:
                        1. SOC 2 Type I or II certificate
                        2. ISO 27001:2013 certification
                        3. GDPR compliance or other data security regulations?`,
            },
            {
                qno: '6.3',
                title: `Would you allow PayU Credit to audit your environment with a 15 days notice?`,
            },
        ],
        [
            {
                qno: '7.0',
                title: 'How do you monitor systems and which monitoring tool is used?',
            },
            {
                qno: '7.1',
                title: 'How do you monitor firewall logs?',
            },
            {
                qno: '7.2',
                title: 'How do you monitor firewall logs?',
            },
            {
                qno: '7.4',
                title: 'How do you monitor server logs?',
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
                    <BreadCrumb
                        title="Custom Vendor Questionnaire"
                        pageTitle="Custom Vendor Questionnaire"
                    />
                    <Row>
                        <Col lg="3">
                            <Card>
                                <CardBody>
                                    <Nav pills className="flex-column" id="v-pills-tab">
                                        {customQuestionnaireTab.map((tab, index) => (
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
                                        {customQuestionnaireTabContent.map((questions, index) => (
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

export default VendorQuestionnaire;
