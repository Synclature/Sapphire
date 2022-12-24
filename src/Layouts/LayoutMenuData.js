import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

const Navdata = () => {
    const history = useHistory();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isSamplePages, setIsSamplePages] = useState(false);
    const [isSecurityCompliance, setIsSecurityCompliance] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isAudits, setIsAudits] = useState(false);
    const [isRisk, setIsRisk] = useState(false);
    const [isInfoSecProgram, setIsInfoSecProgram] = useState(false);
    const [isPeople, setIsPeople] = useState(false);
    const [isAssuranceTools, setIsAssuranceTools] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute('subitems')) {
            const ul = document.getElementById('two-column-menu');
            const iconItems = ul.querySelectorAll('.nav-icon.active');
            let activeIconItems = [...iconItems];
            activeIconItems.forEach(item => {
                item.classList.remove('active');
                var id = item.getAttribute('subitems');
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove('show');
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'SamplePages') {
            setIsSamplePages(false);
        }
        if (iscurrentState !== 'SecurityCompliance') {
            setIsSecurityCompliance(false);
        }
        if (iscurrentState !== 'Projects') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Reprting') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Manage') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'Tools') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Settings') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Audits') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Risk') {
            setIsForms(false);
        }
        if (iscurrentState !== 'InfoSec Program') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Integrations') {
            setIsForms(false);
        }
        if (iscurrentState !== 'People') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Questionnaire') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Vendors') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Assurance Tools') {
            setIsForms(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isSecurityCompliance,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
    ]);

    const menuItems = [
        {
            id: 'dashboard',
            label: 'Dashboards',
            icon: <FeatherIcon icon="home" className="icon-dual" />,
            link: '/dashboard',
            click: function (e) {
                e.preventDefault();
                setIsSecurityCompliance(!isDashboard);
                setIscurrentState('dashboard');
                updateIconSidebar(e);
            },
            stateVariables: isDashboard,
        },
        {
            id: 'SamplePages',
            label: 'Sample Pages',
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsSamplePages(!isSamplePages);
                setIscurrentState('SamplePages');
                updateIconSidebar(e);
            },
            stateVariables: isSamplePages,
            subItems: [
                {
                    id: 'a',
                    label: 'A',
                    link: '/a',
                    parentId: 'SamplePages',
                },
                {
                    id: 'c',
                    label: 'SOA',
                    link: '/soa',
                    parentId: 'SamplePages',
                },
                {
                    id: 'd',
                    label: 'D',
                    link: '/d',
                    parentId: 'SamplePages',
                },
                {
                    id: 'e',
                    label: 'E',
                    link: '/e',
                    parentId: 'SamplePages',
                },
                {
                    id: 'UserForm',
                    label: 'User Form',
                    link: '/user-form',
                    parentId: 'SamplePages',
                },
                {
                    id: 'ControlProcessForm',
                    label: 'Control or Process Form',
                    link: '/control-form',
                    parentId: 'SamplePages',
                },
                {
                    id: 'AssetsForm',
                    label: 'Assets Form',
                    link: '/assets-form',
                    parentId: 'SamplePages',
                },
            ],
        },
        {
            id: 'SecurityCompliance',
            label: 'Security & Compliance',
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsSecurityCompliance(!isSecurityCompliance);
                setIscurrentState('SecurityCompliance');
                updateIconSidebar(e);
            },
            stateVariables: isSecurityCompliance,
            subItems: [
                {
                    id: 'policy-deck',
                    label: 'Policy Deck',
                    link: '/security-compliance/policy-deck',
                    parentId: 'SecurityCompliance',
                },
                {
                    id: 'controls-deck',
                    label: 'Controls Deck',
                    link: '/security-compliance/controls-deck',
                    parentId: 'SecurityCompliance',
                },
                {
                    id: 'certifications-deck',
                    label: 'Certifications Deck',
                    link: '/security-compliance/certifications-deck',
                    parentId: 'SecurityCompliance',
                },
                {
                    id: 'training-deck',
                    label: 'Traning Deck',
                    link: '/security-compliance/taining-deck',
                    parentId: 'SecurityCompliance',
                },
            ],
        },
        {
            id: 'Projects',
            label: 'Projects',
            icon: <FeatherIcon icon="users" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Projects');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                {
                    id: 'rfpAuditDeck',
                    label: 'RFP & Audit Deck',
                    link: '/projects/rfp-audit-deck',
                    parentId: 'Projects',
                },
                {
                    id: 'vendorMgmtDeck',
                    label: 'Vendor Mgmt Deck',
                    link: '/projects/vendor-mgmt-deck',
                    parentId: 'Projects',
                },
            ],
        },
        {
            id: 'reporting',
            label: 'Reporting',
            icon: <FeatherIcon icon="command" className="icon-dual" />,
            link: '/reporting',
        },
        {
            id: 'manage',
            label: 'Manage',
            icon: <i className="ri-rocket-line" />,
            link: '/manage',
            click: function (e) {
                e.preventDefault();
            },
        },
        {
            id: 'Audits',
            label: 'Audits',
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsAudits(!isAudits);
                setIscurrentState('Audits');
                updateIconSidebar(e);
            },
            stateVariables: isAudits,
            subItems: [
                {
                    id: 'audit-readiness-projects',
                    label: 'Audits Readiness Projects',
                    link: '/audits/audits-readiness-projects',
                    parentId: 'Audits',
                },
                {
                    id: 'statement-of-applicability',
                    label: 'Statement of Applicability',
                    link: '/audits/statement-of-applicability',
                    parentId: 'Audits',
                },
                {
                    id: 'audits-projects',
                    label: 'Audit Projects',
                    link: '/audits/audit-projects',
                    parentId: 'Audits',
                },
                {
                    id: 'training-deck',
                    label: 'Audit Findings',
                    link: '/audits/audits-findings',
                    parentId: 'Audits',
                },
            ],
        },
        {
            id: 'Risk',
            label: 'Risk',
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsRisk(!isRisk);
                setIscurrentState('Risk');
                updateIconSidebar(e);
            },
            stateVariables: isRisk,
            subItems: [
                {
                    id: 'risk-dashboard',
                    label: 'Risk Dashboard',
                    link: '/risk/risk-dashboard',
                    parentId: 'Risk',
                },
                {
                    id: 'risk-identification-survey',
                    label: 'Risk Identification Survey',
                    link: '/risk/risk-identification-survey',
                    parentId: 'Risk',
                },
                {
                    id: 'risk-register',
                    label: 'Risk Register',
                    link: '/risk/risk-register',
                    parentId: 'Risk',
                },
            ],
        },
        {
            id: 'InfoSecProgram',
            label: 'InfoSec Program',
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsInfoSecProgram(!isInfoSecProgram);
                setIscurrentState('InfoSecProgram');
                updateIconSidebar(e);
            },
            stateVariables: isInfoSecProgram,
            subItems: [
                {
                    id: 'products',
                    label: 'Products',
                    link: '/infosec-program/products',
                    parentId: 'InfoSecProgram',
                },
                {
                    id: 'policies',
                    label: 'Policies',
                    link: '/infosec-program/policies',
                    parentId: 'InfoSecProgram',
                },
                {
                    id: 'procedures',
                    label: 'Procedures',
                    link: '/infosec-program/procedures',
                    parentId: 'InfoSecProgram',
                },
                {
                    id: 'controls',
                    label: 'Controls',
                    link: '/infosec-program/controls',
                    parentId: 'InfoSecProgram',
                },
                {
                    id: 'evidence-tasks',
                    label: 'Evidence Tasks',
                    link: '/infosec-program/evidence-task',
                    parentId: 'InfoSecProgram',
                },
            ],
        },
        {
            id: 'People',
            label: 'People',
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsPeople(!isPeople);
                setIscurrentState('People');
                updateIconSidebar(e);
            },
            stateVariables: isPeople,
            subItems: [
                {
                    id: 'users',
                    label: 'Users',
                    link: '/people/users',
                    parentId: 'People',
                },
                {
                    id: 'roles',
                    label: 'Roles',
                    link: '/people/roles',
                    parentId: 'People',
                },
                {
                    id: 'policy-training',
                    label: 'Policy Training',
                    link: '/people/policy-training',
                    parentId: 'People',
                },
                {
                    id: 'onboarding-offboarding',
                    label: 'Onboarding and Offboarding',
                    link: '/people/onboarding-offboarding',
                    parentId: 'People',
                },
                {
                    id: 'authentication-setup',
                    label: 'Authentication Setup',
                    link: '/people/authentication-setup',
                    parentId: 'People',
                },
            ],
        },
        {
            id: 'questionnaires',
            label: 'Questionnaires',
            icon: <i className="ri-rocket-line" />,
            link: '/questionnaires',
            click: function (e) {
                e.preventDefault();
                setIscurrentState('questionnaires');
                updateIconSidebar(e);
            },
        },
        {
            id: 'Vendors',
            label: 'Vendors',
            icon: <i className="ri-rocket-line" />,
            link: '/vendors',
            click: function (e) {
                e.preventDefault();
                setIscurrentState('Vendors');
                updateIconSidebar(e);
            },
        },
        {
            id: 'vulnerabilityManagement',
            label: 'vulnerabilityManagement',
            icon: <i className="ri-rocket-line" />,
            link: '/vulnerability-management',
            click: function (e) {
                e.preventDefault();
                setIscurrentState('vulnerabilityManagement');
                updateIconSidebar(e);
            },
        },
        {
            id: 'AssuranceTools',
            label: 'Assurance Tools',
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: '/#',
            click: function (e) {
                e.preventDefault();
                setIsAssuranceTools(!isAssuranceTools);
                setIscurrentState('AssuranceTools');
                updateIconSidebar(e);
            },
            stateVariables: isAssuranceTools,
            subItems: [
                {
                    id: 'portal',
                    label: 'Portal',
                    link: '/assurance-tools/portal',
                    parentId: 'AssuranceTools',
                },
                {
                    id: 'security-assurance-report',
                    label: 'Security Assurance Report',
                    link: '/assurance-tools/security-assurance-report',
                    parentId: 'AssuranceTools',
                },
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
