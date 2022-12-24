import React, { useState, useEffect } from 'react';
import {
    Container,
    Row,
    Col,
    Input,
    Label,
    Button,
    Form,
    FormFeedback,
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import { Grid, _ } from 'gridjs-react';

//Import Flatepicker
import Flatpickr from 'react-flatpickr';

import Select from 'react-select';

// Formik validation
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const RiskRegister = () => {
    const [ciaImpactSelect, setCiaImpactSelect] = useState(null);
    const [riskScore, setRiskScore] = useState(1);
    const [impactContextSelect, setImpactContextSelect] = useState(1);
    const [likelihoodSelect, setLikelihoodSelect] = useState(1);
    const [expectedLikelihoodSelect, setexpectedLikelihoodSelect] = useState(1);
    const [expectedImpactSelect, setexpectedImpactSelect] = useState(1);
    const [residualRisk, setResidualRisk] = useState(1);

    function handleciaImpactSelect(ciaImpactSelect) {
        setCiaImpactSelect(ciaImpactSelect);
    }

    const handleimpactContextSelect = e => {
        setImpactContextSelect(e.value);
    };

    const handlelikelihoodSelect = e => {
        setLikelihoodSelect(e.value);
    };

    useEffect(() => {
        setRiskScore(impactContextSelect * likelihoodSelect);
    }, [impactContextSelect, likelihoodSelect]);

    const handleExpectedLikelihoodSelect = e => {
        setexpectedLikelihoodSelect(e.value);
    };

    const handleexpectedImpactSelect = e => {
        setexpectedImpactSelect(e.value);
    };

    useEffect(() => {
        setResidualRisk(expectedLikelihoodSelect * expectedImpactSelect);
    }, [expectedLikelihoodSelect, expectedImpactSelect]);

    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            riskIdentificationDate: '',
            riskOwner: '',
            context: '',
            threat: '',
            vulnerability: '',
            risk: '',
            ciaImpact: '',
            impactContext: '',
            likelihood: '',
            riskScore: '',
            riskExposure: '',
            riskDecision: '',
            treatmentOption: '',
            mitigationControlPlan: '',
            applicableControl: '',
            dueDateCompletion: '',
            status: '',
            expectedLikelihoodPostControlOption: '',
            expectedImpactPostControl: '',
            residualRisk: '',
            revisedRiskDecision: '',
            furtherAction: '',
            reviewDate: '',
            reviewComments: '',
        },
        validationSchema: Yup.object({}),
    });

    const riskOwner = [
        { value: 'Enterprise Sales', label: 'Enterprise Sales' },
        { value: 'Client Servicing Team', label: 'Client Servicing Team' },
        { value: 'Care Providers', label: 'Care Providers' },
        { value: 'HR - People Experience', label: 'HR - People Experience' },
        { value: 'Admin - People Experience', label: 'Admin - People Experience' },
        { value: 'Finance and Accounts', label: 'Finance and Accounts' },
        { value: 'CS & Legal', label: 'CS & Legal' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Product Team', label: 'Product Team' },
        { value: 'Hospitals BU', label: 'Hospitals BU' },
        { value: 'Medical Governance', label: 'Medical Governance' },
        { value: 'Data Analytics', label: 'Data Analytics' },
        { value: 'Marketing', label: 'Marketing' },
    ];

    const impactContext = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
    ];

    const context = [
        {
            value: 'IA1 - Building and Infrastructure  - Khar, Mumbai Office ',
            label: 'IA1 - Building and Infrastructure  - Khar, Mumbai Office ',
        },
        {
            value: 'IA2 - Building and Infrastructure  - Bangalore Office',
            label: 'IA2 - Building and Infrastructure  - Bangalore Office',
        },
        {
            value: 'IA3 - Building and Infrastructure  - Entire network infrastructure',
            label: 'IA3 - Building and Infrastructure  - Entire network infrastructure',
        },
        {
            value: 'IA4 - Building and Infrastructure  - Data Centre ',
            label: 'IA4 - Building and Infrastructure  - Data Centre ',
        },
        {
            value: 'IA5 - Hardware  - Telephony / PRI lines',
            label: 'IA5 - Hardware  - Telephony / PRI lines',
        },
        {
            value: 'IA6 - Hardware  - Removable Storage Devices',
            label: 'IA6 - Hardware  - Removable Storage Devices',
        },
        {
            value: 'IA7 - Hardware  - Mobile / Smart Phones ',
            label: 'IA7 - Hardware  - Mobile / Smart Phones ',
        },
        {
            value: 'IA8 - Hardware  - Server - Data centre',
            label: 'IA8 - Hardware  - Server - Data centre',
        },
        { value: 'IA9 - Hardware  - Server - AWS', label: 'IA9 - Hardware  - Server - AWS' },
        { value: 'IA10 - Hardware  - Laptops ', label: 'IA10 - Hardware  - Laptops ' },
        {
            value: 'IA12 - Hardware  - Printer/ Scanner - Khar Office',
            label: 'IA12 - Hardware  - Printer/ Scanner - Khar Office',
        },
        {
            value: 'IA13 - Hardware  - Internet Connection / Access - Khar Office',
            label: 'IA13 - Hardware  - Internet Connection / Access - Khar Office',
        },
        {
            value: 'IA14 - Hardware  - Wireless / Wi-Fi Connection',
            label: 'IA14 - Hardware  - Wireless / Wi-Fi Connection',
        },
        {
            value: 'IA15 - Hardware  - Biometric Access Control System',
            label: 'IA15 - Hardware  - Biometric Access Control System',
        },
        {
            value: 'IA16 - System Software  - Linux OS',
            label: 'IA16 - System Software  - Linux OS',
        },
        {
            value: 'IA17 - System Software  - Windows OS',
            label: 'IA17 - System Software  - Windows OS',
        },
        {
            value: 'IA19 - Application Software/ Hosting platform - AWS ',
            label: 'IA19 - Application Software/ Hosting platform - AWS ',
        },
        {
            value: 'IA20 - Application Software - Acronis ',
            label: 'IA20 - Application Software - Acronis ',
        },
        {
            value: 'IA21 - Application Software - Freshdesk',
            label: 'IA21 - Application Software - Freshdesk',
        },
        {
            value: 'IA22 - Application Software - Adobe Illustrator',
            label: 'IA22 - Application Software - Adobe Illustrator',
        },
        {
            value: 'IA23 - Application Software - Google Workspace',
            label: 'IA23 - Application Software - Google Workspace',
        },
        {
            value: 'IA24 - Application Software - Github ',
            label: 'IA24 - Application Software - Github ',
        },
        {
            value: 'IA25 - Application Software - Clickup',
            label: 'IA25 - Application Software - Clickup',
        },
        {
            value: 'IA26 - Application Software / Firewall - Sentinel-one - Firewall',
            label: 'IA26 - Application Software / Firewall - Sentinel-one - Firewall',
        },
        {
            value: 'IA27 - Application Software - Landbot',
            label: 'IA27 - Application Software - Landbot',
        },
        {
            value: 'IA28 - Application Software - Freshsales',
            label: 'IA28 - Application Software - Freshsales',
        },
        {
            value: 'IA29 - Application Software - People Strong',
            label: 'IA29 - Application Software - People Strong',
        },
        {
            value: 'IA30 - Application Software - Quickbooks',
            label: 'IA30 - Application Software - Quickbooks',
        },
        {
            value: 'IA31 - Application Software - Ozontel',
            label: 'IA31 - Application Software - Ozontel',
        },
        {
            value: 'IA32 - Application Software - Jira',
            label: 'IA32 - Application Software - Jira',
        },
        {
            value: 'IA33 - Application Software - Slack',
            label: 'IA33 - Application Software - Slack',
        },
        {
            value: 'IA34 - Application Software - Kaleyra',
            label: 'IA34 - Application Software - Kaleyra',
        },
        {
            value: 'IA35 - Application Software - Freshchat',
            label: 'IA35 - Application Software - Freshchat',
        },
        {
            value: 'IA36 - Application Software - Figma',
            label: 'IA36 - Application Software - Figma',
        },
        {
            value: 'IA37 - Application Software - Sendgrid',
            label: 'IA37 - Application Software - Sendgrid',
        },
        {
            value: 'IA38 - Application Software - Luma',
            label: 'IA38 - Application Software - Luma',
        },
        {
            value: 'IA39 - Application Software - Zoom',
            label: 'IA39 - Application Software - Zoom',
        },
        {
            value: 'IA40 - Application Software - Jumpcloud',
            label: 'IA40 - Application Software - Jumpcloud',
        },
        {
            value: 'IA41 - Application Software - Ghanghor Cloud DLP',
            label: 'IA41 - Application Software - Ghanghor Cloud DLP',
        },
        {
            value: 'IA42 - Application Software - Q Radar',
            label: 'IA42 - Application Software - Q Radar',
        },
        {
            value: 'IA43 - Company Data  - Company information stored in any form',
            label: 'IA43 - Company Data  - Company information stored in any form',
        },
        {
            value: 'IA44 - Company Data - Electronic  - Company information stored digitally',
            label: 'IA44 - Company Data - Electronic  - Company information stored digitally',
        },
        {
            value: 'IA45 - Client Data  - Client information stored physically.',
            label: 'IA45 - Client Data  - Client information stored physically.',
        },
        {
            value: 'IA46 - Client Data - Electronic - Client information stored digitally',
            label: 'IA46 - Client Data - Electronic - Client information stored digitally',
        },
        {
            value: 'IA47 - PII - PII data of internal parties',
            label: 'IA47 - PII - PII data of internal parties',
        },
        {
            value: 'IA48 - PII - PII data of external parties',
            label: 'IA48 - PII - PII data of external parties',
        },
        {
            value: 'IA49 - Non-IT asset  - Employee ID',
            label: 'IA49 - Non-IT asset  - Employee ID',
        },
        {
            value: 'IA50 - Non-IT asset  - Confidential Waste bins/ Shredders',
            label: 'IA50 - Non-IT asset  - Confidential Waste bins/ Shredders',
        },
        {
            value: 'IP1Third Party - Supplier Relationship Management - Supplier inventory',
            label: 'IP1Third Party - Supplier Relationship Management - Supplier inventory',
        },
        {
            value: 'IP2Third Party - Third party contractual requirements',
            label: 'IP2Third Party - Third party contractual requirements',
        },
        {
            value: "IP3Third Party - Third Party SLA's / Supplier assessment",
            label: "IP3Third Party - Third Party SLA's / Supplier assessment",
        },
        {
            value: 'IP4Third Party - Supplier redundancy / Supply Chain ',
            label: 'IP4Third Party - Supplier redundancy / Supply Chain ',
        },
        {
            value: 'IP5Leadership - Segregation of duties / Roles & Responsibilities',
            label: 'IP5Leadership - Segregation of duties / Roles & Responsibilities',
        },
        {
            value: 'IP6Leadership - Committment to information security',
            label: 'IP6Leadership - Committment to information security',
        },
        {
            value: 'IP7Leadership - Lack of resources for information security',
            label: 'IP7Leadership - Lack of resources for information security',
        },
        {
            value: 'IP8Access Management- User access management. Restrictions on authorised access',
            label: 'IP8Access Management- User access management. Restrictions on authorised access',
        },
        {
            value: 'IP9Access Management- Review of user access',
            label: 'IP9Access Management- Review of user access',
        },
        {
            value: 'IP10Asset Management - System Acquisition - specifications and requirements',
            label: 'IP10Asset Management - System Acquisition - specifications and requirements',
        },
        {
            value: 'IP11Human Resources- Background verification ',
            label: 'IP11Human Resources- Background verification ',
        },
        {
            value: 'IP12Human Resources- Employee/ Contractor contractual agreements',
            label: 'IP12Human Resources- Employee/ Contractor contractual agreements',
        },
        {
            value: 'IP13Human Resources- Training and Awarness programs for employees ',
            label: 'IP13Human Resources- Training and Awarness programs for employees ',
        },
        {
            value: 'IP14Human Resources- Retun of Assets',
            label: 'IP14Human Resources- Retun of Assets',
        },
        {
            value: 'IP15Human Resources- Disciplinary process',
            label: 'IP15Human Resources- Disciplinary process',
        },
        {
            value: 'IP16Human Resources- Employees adhering to all policies',
            label: 'IP16Human Resources- Employees adhering to all policies',
        },
        {
            value: 'IP17Legal - Maintenance of compliance / legal register',
            label: 'IP17Legal - Maintenance of compliance / legal register',
        },
        {
            value: "IP18Legal - Provisioning and maintenance of NDA's / confidentiality agreements",
            label: "IP18Legal - Provisioning and maintenance of NDA's / confidentiality agreements",
        },
        {
            value: 'IP19IT Infra- Business continuity and availability of information processing systems',
            label: 'IP19IT Infra- Business continuity and availability of information processing systems',
        },
        {
            value: 'IP20IT Infra- IT incident reporting and logging with root cause analysis and corrective action',
            label: 'IP20IT Infra- IT incident reporting and logging with root cause analysis and corrective action',
        },
        { value: 'IP21IT Infra- Patch management', label: 'IP21IT Infra- Patch management' },
        {
            value: 'IP22IT Infra- Software whitelisting and restriction on installation of software',
            label: 'IP22IT Infra- Software whitelisting and restriction on installation of software',
        },
        {
            value: 'IP23IT Infra- Policy on cryptographic controls',
            label: 'IP23IT Infra- Policy on cryptographic controls',
        },
        {
            value: 'IP24IT Infra- Cryptographic key management ',
            label: 'IP24IT Infra- Cryptographic key management ',
        },
        {
            value: 'IP25Information Security Team- Information Security  incident reporting and logging with root cause analysis and corrective action',
            label: 'IP25Information Security Team- Information Security  incident reporting and logging with root cause analysis and corrective action',
        },
        {
            value: 'IP26IT & Information Security - Change management procedure',
            label: 'IP26IT & Information Security - Change management procedure',
        },
        {
            value: 'IP27IT & Information Security - Logging and monitoring of information processing facilities',
            label: 'IP27IT & Information Security - Logging and monitoring of information processing facilities',
        },
    ];

    const ciaImpact = [
        { value: 'C', label: 'C' },
        { value: 'I', label: 'I' },
        { value: 'A', label: 'A' },
    ];

    const likelihood = [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
        { value: 3, label: 3 },
        { value: 4, label: 4 },
    ];

    const treatmentOption = [
        { value: 'Treat', label: 'Treat' },
        { value: 'Transfer', label: 'Transfer' },
        { value: 'Terminate', label: 'Terminate' },
        { value: 'Tolerate', label: 'Tolerate' },
        { value: 'Take or increase Risk', label: 'Take or increase Risk' },
        { value: 'Not Applicable', label: 'Not Applicable' },
    ];

    const applicableControl = [
        {
            value: 'A.5.1.1 - Policies for information security',
            label: 'A.5.1.1 - Policies for information security',
        },
        {
            value: 'A.5.1.2 - Review of the policies for information security',
            label: 'A.5.1.2 - Review of the policies for information security',
        },
        {
            value: 'A.6.1.1 - Information security roles and responsibilities',
            label: 'A.6.1.1 - Information security roles and responsibilities',
        },
        { value: 'A.6.1.2 - Segregation of duties', label: 'A.6.1.2 - Segregation of duties' },
        {
            value: 'A.6.1.3 - Contact with authorities',
            label: 'A.6.1.3 - Contact with authorities',
        },
        {
            value: 'A.6.1.4 - Contact with special interest groups',
            label: 'A.6.1.4 - Contact with special interest groups',
        },
        {
            value: 'A.6.1.5 - Information security in project management',
            label: 'A.6.1.5 - Information security in project management',
        },
        { value: 'A.6.2.1 - Mobile device policy', label: 'A.6.2.1 - Mobile device policy' },
        { value: 'A.6.2.2 - Teleworking', label: 'A.6.2.2 - Teleworking' },
        { value: 'A.7.1.1 - Screening', label: 'A.7.1.1 - Screening' },
        {
            value: 'A.7.1.2 - Terms and conditions of employment',
            label: 'A.7.1.2 - Terms and conditions of employment',
        },
        {
            value: 'A.7.2.1 - Management Responsibilities',
            label: 'A.7.2.1 - Management Responsibilities',
        },
        {
            value: 'A.7.2.2 - Information security awareness, education and training',
            label: 'A.7.2.2 - Information security awareness, education and training',
        },
        { value: 'A.7.2.3 - Disciplinary process', label: 'A.7.2.3 - Disciplinary process' },
        {
            value: 'A.7.3.1 - Termination or change of employment responsibilities',
            label: 'A.7.3.1 - Termination or change of employment responsibilities',
        },
        { value: 'A.8.1.1 - Inventory of assets', label: 'A.8.1.1 - Inventory of assets' },
        { value: 'A.8.1.2 - Ownership of assets', label: 'A.8.1.2 - Ownership of assets' },
        {
            value: 'A.8.1.3 - Acceptable use of assets',
            label: 'A.8.1.3 - Acceptable use of assets',
        },
        { value: 'A.8.1.4 - Return of assets', label: 'A.8.1.4 - Return of assets' },
        {
            value: 'A.8.2.1 - Classification of information',
            label: 'A.8.2.1 - Classification of information',
        },
        {
            value: 'A.8.2.2 - Labelling of information',
            label: 'A.8.2.2 - Labelling of information',
        },
        { value: 'A.8.2.3 - Handling of assets', label: 'A.8.2.3 - Handling of assets' },
        {
            value: 'A.8.3.1 - Management of removable media',
            label: 'A.8.3.1 - Management of removable media',
        },
        { value: 'A.8.3.2 - Disposal of media', label: 'A.8.3.2 - Disposal of media' },
        { value: 'A.8.3.3 - Physical media transfer', label: 'A.8.3.3 - Physical media transfer' },
        { value: 'A.9.1.1 - Access control policy', label: 'A.9.1.1 - Access control policy' },
        {
            value: 'A.9.1.2 - Access to networks and network services',
            label: 'A.9.1.2 - Access to networks and network services',
        },
        {
            value: 'A.9.2.1 - User registration and de-registration',
            label: 'A.9.2.1 - User registration and de-registration',
        },
        {
            value: 'A.9.2.2 - User access provisioning',
            label: 'A.9.2.2 - User access provisioning',
        },
        {
            value: 'A.9.2.3 - Management of privileged access rights',
            label: 'A.9.2.3 - Management of privileged access rights',
        },
        {
            value: 'A.9.2.4 - Management of secret authentication information of users',
            label: 'A.9.2.4 - Management of secret authentication information of users',
        },
        {
            value: 'A.9.2.5 - Review of user access rights',
            label: 'A.9.2.5 - Review of user access rights',
        },
        {
            value: 'A.9.2.6 - Removal or adjustment of access rights',
            label: 'A.9.2.6 - Removal or adjustment of access rights',
        },
        {
            value: 'A.9.3.1 - Use of secret authentication information',
            label: 'A.9.3.1 - Use of secret authentication information',
        },
        {
            value: 'A.9.4.1 - Information access restriction',
            label: 'A.9.4.1 - Information access restriction',
        },
        {
            value: 'A.9.4.2 - Secure log-on procedures',
            label: 'A.9.4.2 - Secure log-on procedures',
        },
        {
            value: 'A.9.4.3 - Password management system',
            label: 'A.9.4.3 - Password management system',
        },
        {
            value: 'A.9.4.4 - Use of privileged utility programs',
            label: 'A.9.4.4 - Use of privileged utility programs',
        },
        {
            value: 'A.9.4.5 - Access control to program source code',
            label: 'A.9.4.5 - Access control to program source code',
        },
        {
            value: 'A.10.1.1 - Policy on the use of cryptographic controls',
            label: 'A.10.1.1 - Policy on the use of cryptographic controls',
        },
        { value: 'A.10.1.2 - Key management', label: 'A.10.1.2 - Key management' },
        {
            value: 'A.11.1.1 - Physical security perimeter',
            label: 'A.11.1.1 - Physical security perimeter',
        },
        {
            value: 'A.11.1.2 - Physical entry controls',
            label: 'A.11.1.2 - Physical entry controls',
        },
        { value: 'Not Applicable', label: 'Not Applicable' },
    ];

    const status = [
        { value: 'Opened', label: 'Opened' },
        { value: 'Closed', label: 'Closed' },
        { value: 'Not Applicable', label: 'Not Applicable' },
    ];

    const expectedLikelihoodPostControlOption = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
    ];

    const expectedImpactPostControl = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
    ];

    const furtherAction = [
        { value: 'No further action', label: 'No further action' },
        { value: 'Add more actions', label: 'Add more actions' },
        { value: 'Tolerate', label: 'Tolerate' },
    ];

    document.title = 'Create Risk Mapping';
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Create Risk Mapping" pageTitle="Create Risk Mapping" />
                    <Row>
                        <Col>
                            <Card>
                                <CardHeader className="d-flex align-items-center justify-content-end">
                                    <Link to="/risk/risk-register">
                                        <i className="las la-arrow-left mr-sm-2"></i>Go Back
                                    </Link>
                                </CardHeader>
                                <CardBody>
                                    <Form
                                        onSubmit={e => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                        action="#">
                                        <Row className="mb-4">
                                            <Col sm="12" md="6" xl="4">
                                                <Label
                                                    htmlFor="riskIdentificationDate"
                                                    className="form-label">
                                                    Risk Identification Date
                                                </Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                        dateFormat: 'd-m-Y',
                                                    }}
                                                    onChange={validation.handleChange}
                                                    value={
                                                        validation.values.riskIdentificationDate ||
                                                        ''
                                                    }
                                                    invalid={
                                                        validation.touched.riskIdentificationDate &&
                                                        validation.errors.riskIdentificationDate
                                                            ? true
                                                            : false
                                                    }
                                                    placeholder="Select Risk Identification Date"
                                                />
                                                {validation.touched.riskIdentificationDate &&
                                                validation.errors.riskIdentificationDate ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.riskIdentificationDate}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="riskOwner" className="form-label">
                                                    Risk Owner/ Department
                                                </Label>
                                                <Select
                                                    name="riskOwner"
                                                    options={riskOwner}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="context" className="form-label">
                                                    Context
                                                </Label>
                                                <Select name="context" options={context}></Select>
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="threat" className="form-label">
                                                    Threat
                                                </Label>
                                                <Input
                                                    name="threat"
                                                    className="form-control"
                                                    placeholder="Enter Threat"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.threat || ''}
                                                    invalid={
                                                        validation.touched.threat &&
                                                        validation.errors.threat
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.threat &&
                                                validation.errors.threat ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.threat}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="vulnerability"
                                                    className="form-label">
                                                    Vulnerability
                                                </Label>
                                                <Input
                                                    name="vulnerability"
                                                    className="form-control"
                                                    placeholder="Enter Vulnerability"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.vulnerability || ''}
                                                    invalid={
                                                        validation.touched.vulnerability &&
                                                        validation.errors.vulnerability
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.vulnerability &&
                                                validation.errors.vulnerability ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.vulnerability}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="risk" className="form-label">
                                                    Risk
                                                </Label>
                                                <Input
                                                    name="risk"
                                                    className="form-control"
                                                    placeholder="Enter Risk"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.risk || ''}
                                                    invalid={
                                                        validation.touched.risk &&
                                                        validation.errors.risk
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.risk &&
                                                validation.errors.risk ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.risk}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="ciaImpact" className="form-label">
                                                    C I A Impact
                                                </Label>
                                                <Select
                                                    name="ciaImpact"
                                                    value={ciaImpactSelect}
                                                    isMulti={true}
                                                    onChange={() => {
                                                        handleciaImpactSelect();
                                                    }}
                                                    options={ciaImpact}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="impactContext"
                                                    className="form-label">
                                                    Impact on Context
                                                </Label>
                                                <Select
                                                    name="impactContext"
                                                    options={impactContext}
                                                    onChange={handleimpactContextSelect}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="likelihood" className="form-label">
                                                    Likelihood
                                                </Label>
                                                <Select
                                                    name="likelihood"
                                                    options={likelihood}
                                                    onChange={handlelikelihoodSelect}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="riskScore" className="form-label">
                                                    Risk Score
                                                </Label>
                                                <Input
                                                    name="riskScore"
                                                    className={`form-control ${
                                                        riskScore >= 5 && riskScore <= 8
                                                            ? 'bg-soft-warning'
                                                            : riskScore > 8
                                                            ? 'bg-soft-danger'
                                                            : 'bg-soft-primary'
                                                    }`}
                                                    placeholder="Risk Score"
                                                    type="text"
                                                    disabled
                                                    value={riskScore}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="riskExposure"
                                                    className="form-label">
                                                    Risk Score
                                                </Label>
                                                <Input
                                                    name="riskExposure"
                                                    className={`form-control ${
                                                        riskScore >= 5 && riskScore <= 8
                                                            ? 'bg-soft-warning'
                                                            : riskScore > 8
                                                            ? 'bg-soft-danger'
                                                            : 'bg-soft-primary'
                                                    }`}
                                                    placeholder="Risk Score"
                                                    type="text"
                                                    disabled
                                                    value={
                                                        riskScore >= 5 && riskScore <= 8
                                                            ? 'Medium'
                                                            : riskScore > 8
                                                            ? 'High'
                                                            : 'Low'
                                                    }
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="riskDecision"
                                                    className="form-label">
                                                    Risk Decision
                                                </Label>
                                                <Input
                                                    name="riskDecision"
                                                    className={`form-control`}
                                                    placeholder="Risk Decision"
                                                    type="text"
                                                    disabled
                                                    value={
                                                        riskScore >= 9
                                                            ? 'Not Acceptable Risk'
                                                            : 'Acceptable Risk'
                                                    }
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="treatmentOption"
                                                    className="form-label">
                                                    Likelihood
                                                </Label>
                                                <Select
                                                    name="treatmentOption"
                                                    options={treatmentOption}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="mitigationControlPlan"
                                                    className="form-label">
                                                    Mitigation Control Plan
                                                </Label>
                                                <Input
                                                    name="mitigationControlPlan"
                                                    className="form-control"
                                                    placeholder="Enter Mitigation Control Plan"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={
                                                        validation.values.mitigationControlPlan ||
                                                        ''
                                                    }
                                                    invalid={
                                                        validation.touched.mitigationControlPlan &&
                                                        validation.errors.mitigationControlPlan
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.mitigationControlPlan &&
                                                validation.errors.mitigationControlPlan ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.mitigationControlPlan}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="applicableControl"
                                                    className="form-label">
                                                    Applicable Control
                                                </Label>
                                                <Select
                                                    name="applicableControl"
                                                    options={applicableControl}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="dueDateCompletion"
                                                    className="form-label">
                                                    Expected Due Date of Completion
                                                </Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                        dateFormat: 'd-m-Y',
                                                    }}
                                                    onChange={validation.handleChange}
                                                    value={
                                                        validation.values.dueDateCompletion || ''
                                                    }
                                                    invalid={
                                                        validation.touched.dueDateCompletion &&
                                                        validation.errors.dueDateCompletion
                                                            ? true
                                                            : false
                                                    }
                                                    placeholder="Select Expected Due Date of Completion"
                                                />
                                                {validation.touched.dueDateCompletion &&
                                                validation.errors.dueDateCompletion ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.dueDateCompletion}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label htmlFor="status" className="form-label">
                                                    Status
                                                </Label>
                                                <Select name="status" options={status} />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="expectedLikelihoodPostControlOption"
                                                    className="form-label">
                                                    Expected Likelihood Post Control Implementation
                                                </Label>
                                                <Select
                                                    name="expectedLikelihoodPostControlOption"
                                                    options={expectedLikelihoodPostControlOption}
                                                    onChange={handleExpectedLikelihoodSelect}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="expectedImpactPostControl"
                                                    className="form-label">
                                                    Expected Impact Post Control Implementation
                                                </Label>
                                                <Select
                                                    name="expectedImpactPostControl"
                                                    options={expectedImpactPostControl}
                                                    onChange={handleexpectedImpactSelect}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="residualRisk"
                                                    className="form-label">
                                                    Residual Risk (Revised Risk Score)
                                                </Label>
                                                <Input
                                                    name="residualRisk"
                                                    className={`form-control`}
                                                    placeholder="Residual Risk (Revised Risk Score)"
                                                    type="text"
                                                    disabled
                                                    value={residualRisk}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="revisedRiskDecision"
                                                    className="form-label">
                                                    Revised Risk Decision
                                                </Label>
                                                <Input
                                                    name="revisedRiskDecision"
                                                    className={`form-control`}
                                                    placeholder="Revised Risk Decision"
                                                    type="text"
                                                    disabled
                                                    value={
                                                        riskScore >= 9
                                                            ? 'Not Acceptable Risk'
                                                            : 'Acceptable Risk'
                                                    }
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="furtherAction"
                                                    className="form-label">
                                                    Further Action
                                                </Label>
                                                <Select
                                                    name="furtherAction"
                                                    options={furtherAction}
                                                />
                                            </Col>

                                            <Col sm="12" md="6" xl="4">
                                                <Label htmlFor="reviewDate" className="form-label">
                                                    Review Date
                                                </Label>
                                                <Flatpickr
                                                    className="form-control"
                                                    options={{
                                                        dateFormat: 'd-m-Y',
                                                    }}
                                                    onChange={validation.handleChange}
                                                    value={validation.values.reviewDate || ''}
                                                    invalid={
                                                        validation.touched.reviewDate &&
                                                        validation.errors.reviewDate
                                                            ? true
                                                            : false
                                                    }
                                                    placeholder="Select Review Date"
                                                />
                                                {validation.touched.reviewDate &&
                                                validation.errors.reviewDate ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.reviewDate}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>

                                            <Col sm="12" md="6" xl="4" className="mb-3">
                                                <Label
                                                    htmlFor="reviewComments"
                                                    className="form-label">
                                                    Review Comments
                                                </Label>
                                                <Input
                                                    name="reviewComments"
                                                    className="form-control"
                                                    placeholder="Enter Review Comments"
                                                    type="text"
                                                    onChange={validation.handleChange}
                                                    onBlur={validation.handleBlur}
                                                    value={validation.values.reviewComments || ''}
                                                    invalid={
                                                        validation.touched.reviewComments &&
                                                        validation.errors.reviewComments
                                                            ? true
                                                            : false
                                                    }
                                                />
                                                {validation.touched.reviewComments &&
                                                validation.errors.reviewComments ? (
                                                    <FormFeedback type="invalid">
                                                        {validation.errors.reviewComments}
                                                    </FormFeedback>
                                                ) : null}
                                            </Col>
                                        </Row>

                                        <div className="mt-4 text-end">
                                            <Button
                                                color="success"
                                                className="btn btn-success"
                                                type="submit">
                                                Save Risk Mapping
                                            </Button>
                                        </div>
                                    </Form>
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
