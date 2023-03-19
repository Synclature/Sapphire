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
                title: 'Does your organization conduct periodic testing of incident response plans to ensure they function as intended?',
            },
        ],
        [
            {
                qno: '3.0',
                qhead: (
                    <div>
                        <p>Password Security</p>
                    </div>
                ),
                title: `
                Are the following technical restrictions placed on passwords?  

                If not, please share the Password Complexity rules enforced as a part of your policy requirements.
                `,
            },
            {
                qno: '3.1',
                title: `Are passwords protected by encryption/hashing to prevent compromise utilizing one of the below methods?
                `,
                qxq: (
                    <div>
                        <ul>
                            <li>AES128/192/256</li>
                            <li>SHA-256/384/512 with salt</li>
                            <li>Argon2/PBKDF2</li>
                            <li>scrypt/bcrypt</li>
                        </ul>
                    </div>
                ),
            },
            {
                qno: '3.3',
                title: 'Do you protect passwords for production IDs and for generic IDs used for shared administrative purposes?',
            },
            {
                qno: '3.4',
                title: 'Is multi-factor authentication used for high risk environments (e.g. Cloud Environments)?',
            },
            {
                qno: '3.5',
                title: 'Is remote access permitted in your organization?',
            },
            {
                qno: '3.6',
                title: 'What methods of authentication are used to gain remote access.',
            },
            {
                qno: '3.7',
                title: 'Please indicate the frequency of remote access entitlements review. (Select all that apply)',
            },
            {
                qno: '3.8',
                title: 'Are remote sessions set to timeout after a specified period of inactivity?',
            },
            {
                qno: '3.9',
                title: 'Are the following requirements placed on devices utilized for remote access?  If not, please advise in the Additional Comment column if they are required per policy.',
            },
            {
                qno: '3.10',
                title: 'Does access to your Application/Portal utilize only one (or more) of the following methods for authenticating Morgan Stanley’s Personnel or other authorized users attempting to access the Services:',
                qxq: (
                    <div>
                        <ul>
                            <li>SAML / OIDC SSO</li>
                            <li>Password + source IP validation</li>
                        </ul>
                    </div>
                ),
            },
            {
                qno: '3.11',
                title: 'Is your solution capable of complying with Morgan Stanley Identity and Access Management governance requirements?',
                qxq: (
                    <div>
                        <p>
                            When services are accessed by Morgan Stanley employees, identity and
                            access management operations must be available to Morgan Stanley and not
                            controlled solely by the supplier, for the purpose of governance.
                            Identity and access management operations include:
                        </p>
                        <ul>
                            <li>
                                User provisioning operations (for example create, modify, terminate,
                                delete)
                            </li>
                            <li>
                                Entitlement management (for example create, modify, delete, assign
                                and revoke roles and privileges)
                            </li>
                            <li>
                                Reporting for identity and access management operations (for the
                                purpose of auditing and periodical reviews)
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                qno: '3.12',
                title: 'Is your solution capable of complying with Morgan Stanley privileged access requirements?',
                qxq: (
                    <div>
                        <p>
                            Privileged Access is the ability of a user to modify asset configuration
                            or controls (e.g. access management, logging etc.) - beyond the normal
                            daily business use.
                        </p>
                        <p>
                            Supplier must ensure administrator privilege access by Supplier
                            Personnel to Morgan Stanley’s account(s) with Supplier must be provided
                            just in time, as needed, instead of persistently available.
                        </p>
                    </div>
                ),
            },
            {
                qno: '3.13',
                title: 'If this solution will be deployed On-Prem (e.g. on Morgan Stanley network/systems), does your application require permanent privileged access access on the host (e.g. root access on Linux, or local administrator access on Windows), or run under a user specified non-privileged account.',
            },
        ],
        [
            {
                qno: '4.0',
                title: `Is every connection to an external network terminated at a firewall?`,
            },
            {
                qno: '4.1',
                title: `Is there a Network Intrusion Detection/Prevention System in place?`,
            },
            {
                qno: '4.2',
                title: `Do you have a process to implement and update signatures on network devices (e.g. Firewalls) based on new-found threats?`,
            },
            {
                qno: '4.3',
                title: `Please provide the frequency of signature updates.`,
            },
            {
                qno: '4.4',
                title: `What is the frequency for updating anti-virus/Malware signatures?`,
            },
            {
                qno: '4.5',
                title: `Are wireless connections authenticated with WPA/WPA2?`,
            },
            {
                qno: '4.6',
                title: `Are regular scans conducted to identify rogue wireless access points?`,
            },
            {
                qno: '4.7',
                title: `Please confirm all users are restricted from accessing the following external communication, processing, and/or tools from systems which would store and process Morgan Stanley data:`,
                qxq: (
                    <div>
                        <p>
                            If any of the following are required, please provide business
                            justification under Additional Comments
                        </p>
                    </div>
                ),
            },
            {
                qno: '4.8',
                title: `Are personnel restricted from providing non-firm personnel access to their workstations?`,
            },
            {
                qno: '4.9',
                title: `Are cryptographic controls in place to protect the confidentiality and integrity of all Morgan Stanley data stored at rest in all production, disaster recovery services, and removable media which meet the below requirements?`,
                qxq: (
                    <div>
                        <ul>
                            <li>
                                Symmetric Encryption using AES128, AES192, or AES256 in the CBC,
                                CFB, OFB, CTR, XTS, or GCM block cipher modes.
                            </li>
                            <li>
                                If public key is used, it must be RSA-2048, RSA-3072, or RSA-4096.
                            </li>
                            <li>
                                If hashing algorithm is used, it must be SHA-256, SHA-384, SHA-512,
                                SHA-512/256, SHA3-256, SHA3-384, or SHA3-512.
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                qno: '4.10',
                title: `Are cryptographic controls in place to protect the confidentiality and integrity of all Morgan Stanley data in transit which meet the below requirements?`,
                qxq: (
                    <div>
                        <p>
                            If any of the following are required, please provide business
                            justification under Additional Comments
                        </p>
                        <ul>
                            <li>TLS 1.2 or above, IPSec, SSHv2.</li>
                            <li>
                                If digital signature is used, it must be DSA-2048, DSA-3072,
                                RSA-2048, RSA-3072, RSA-4096, ECDSA-224, ECDSA-256, ECDSA-384, or
                                ECDSA-521.
                            </li>
                        </ul>
                    </div>
                ),
            },
            {
                qno: '4.11',
                title: `Is password protection used on files sent via email not utilizing TLS?`,
            },
            {
                qno: '4.12',
                title: `Are all encryption keys used in the encryption of Morgan Stanley data stored in a designated vault or key management service, following industry best practices (for example NIST 800-57, FIPS140-2 level 2)?`,
            },
            {
                qno: '4.13',
                title: `Have policies and procedures been implemented to secure encryption keys throughout the key lifecycle (e.g. Stored/Transmitted in a secure manner, definition of key custodians)?`,
            },
            {
                qno: '4.14',
                title: `Are encryption keys rotated at least once every two years?`,
            },
            {
                qno: '4.15',
                title: `Are all encryption keys used in conjunction with Morgan Stanley’s Confidential Information dedicated to Morgan Stanley (and not used in conjunction with data of any other customer of Supplier).`,
            },
            {
                qno: '4.15',
                title: `Do you perform periodic penetration tests on your externally facing network?`,
            },
            {
                qno: '4.15',
                title: `Do you perform vulnerability scans?`,
            },
            {
                qno: '4.15',
                title: `Are the timelines to fix vulnerabilities identified through alerts or as part of Vulnerability Assessment & Penetration Testing process defined?`,
            },
        ],
        [
            {
                qno: '5.1',
                title: `If this service includes an application with On-Prem deployment at Morgan Stanley (including thick client, plugins, Java Web Start etc.), can you confirm the below requirements can be met:`,
                qxq: (
                    <div>
                        <p>
                            Deploying software or firmware updates and new versions must be
                            controlled by Morgan Stanley. Vendor solutions must not auto-update or
                            download automatically without following change control processes.
                        </p>
                    </div>
                ),
            },
        ],
        [
            {
                qno: '6.0',
                title: `Are any systems/assets which have exceeded their target End of Life dates in use that would support services provided to Morgan Stanley (e.g. Vendor provided Systems/Applications which are no longer supported by the vendor)?`,
            },
            {
                qno: '6.1',
                title: `Please indicate which categories these unsupported/end of life assets fall into and provide details within the additional comments as to how they are managed/secured.`,
            },
            {
                qno: '6.2',
                title: `Is a formal process/program in place to track and manage unsupported/end of life assets, including identification of additional controls required to secure high risk systems?`,
                qxq: (
                    <div>
                        <p>If so, please describe sample KPIs used in your program.</p>
                    </div>
                ),
            },
            {
                qno: '6.3',
                title: `Can you access client data or applications from company and/or personal devices`,
            },
            {
                qno: '6.4',
                title: `Please indicate the types of mobile devices allowed in your organization? (Select all that apply)`,
            },
            {
                qno: '6.5',
                title: `Please indicate the type of entitlements permitted using mobile devices. (Select all that apply)`,
            },
            {
                qno: '6.6',
                title: `Please indicate the controls in place around corporate mobile solutions. (Select all that apply)`,
            },
            {
                qno: '6.7',
                title: `Do you have a process to disable / wipe company data if the mobile device is stolen or lost? If yes, please upload supporting documentation and/or provide overview.  If no, please provide comment.`,
            },
        ],
        [
            {
                qno: '7.0',
                title: `What is the process for conducting a third-party risk assessment for physical securities?`,
            },
            {
                qno: '7.1',
                title: `What are the key components of a third-party risk assessment for physical securities?`,
            },
            {
                qno: '7.2',
                title: `What are the potential risks associated with physical securities?`,
            },
            {
                qno: '7.3',
                title: `How can organizations ensure that their physical securities are secure?`,
            },
            {
                qno: '7.4',
                title: `What are the best practices for managing physical security risks?`,
            },
            {
                qno: '7.5',
                title: `What are the most common threats to physical securities?`,
            },
            {
                qno: '7.6',
                title: `How can organizations protect their physical securities from unauthorized access?`,
            },
            {
                qno: '7.7',
                title: `What are the best methods for monitoring physical security risks?`,
            },
            {
                qno: '7.8',
                title: `What are the most effective ways to mitigate physical security risks?`,
            },
            {
                qno: '7.9',
                title: `How can organizations ensure that their physical securities are compliant with applicable regulations?`,
            },
        ],
        [
            {
                qno: '8.0',
                title: `Please confirm each of the data backup and transfer mechanisms utilized in the backup/replication of Morgan Stanley data:`,
                qxq: (
                    <div>
                        <p>
                            As part of the contractual agreements, we may require further due
                            diligence of any in-scope external party involved in the context of
                            services rendered to Morgan Stanley.
                        </p>
                    </div>
                ),
            },
            {
                qno: '8.1',
                title: `If data is replicated to a second facility, or if backup tapes are stored at a second facility/offsite, please provide a list of each location and the name of any third party (e.g. Iron Mountain - New York, NY) utilized for backup or backup tape storage.`,
            },
        ],
        [
            {
                qno: '9.0',
                title: `Please describe the process details for what happens to Morgan Stanley hard copy materials after their use:`,
            },
            {
                qno: '9.1',
                title: `Please describe the process details for disposal of electronic data and/or decommissioning of devices which may contain client/Morgan Stanley data prior to disposal or repurposing:.`,
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
