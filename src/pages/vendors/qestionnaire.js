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
    document.title = 'Vendor Questionnaire';

    const [maturity, setMaturity] = useState(0);

    const labels = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
    };

    const questionnaireTab = [
        { title: 'Data and Asset Secuirity' },
        { title: 'Human Resource Security' },
        { title: 'Incident and change management' },
        { title: 'Access Management' },
        { title: 'Infrastructure Controls' },
        { title: 'Compliance' },
        { title: 'Monitoring' },
    ];

    const questionnaireTabContent = [
        [
            {
                qno: '1.0',
                title: 'Where will the PayU customer data be stored? If applicable, please provide systems/applications and locations details.',
            },
            {
                qno: '1.1',
                title: 'What controls are implemented for encryption in rest and motion?',
            },
            {
                qno: '1.2',
                title: 'How will data travel/transfer from PayU environment (data flow/media transfer)?',
            },
            {
                qno: '1.3',
                title: 'What controls are in place to prevent data leakage? (Example: endpoint hardening or DLP)',
            },
            {
                qno: '1.4',
                title: 'What process is followed to monitor and review data access?',
            },
            {
                qno: '1.5',
                title: 'What is your data retention and deletion policy?',
            },
            {
                qno: '1.6',
                title: 'Do you have an IT asset inventory in place?',
            },
            {
                qno: '1.7',
                title: 'Do you have Acceptable Use Policy ?',
            },
            {
                qno: '1.8',
                title: 'Do your employees work remotely? If yes, do you have a documented teleworking policy in place ?',
            },
            {
                qno: '1.9',
                title: 'Do you have a documented information classification policy ?',
            },
        ],
        [
            {
                qno: '2.0',
                title: 'Do you make all your employees and third-parties, who would have access to PayU Credit data, sign an NDA/confidentiality agreement?',
            },
            {
                qno: '2.1',
                title: 'Do you perform background checks on your employees? If yes, please mention which checks are included?',
            },
            {
                qno: '2.2',
                title: 'Do you perform periodic security awareness training for all employees? If yes, does this include the privacy aspects such as safeguarding the personally identifiable information (PII), etc? ',
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
                    <BreadCrumb title="Vendor Questionnaire" pageTitle="Vendor Questionnaire" />
                    <Row>
                        <Col lg="3">
                            <Card>
                                <CardBody>
                                    <Nav pills className="flex-column" id="v-pills-tab">
                                        {questionnaireTab.map((tab, index) => (
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
                                        {questionnaireTabContent.map((questions, index) => (
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
