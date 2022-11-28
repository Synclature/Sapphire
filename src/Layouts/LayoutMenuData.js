import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

//Import Icons
import FeatherIcon from "feather-icons-react";

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
    const [isIntegration, setIsIntegration] = useState(false);
    const [isPeople, setIsPeople] = useState(false);
    const [isAssuranceTools, setIsAssuranceTools] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
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
            id: "dashboard",
            label: "Dashboards",
            icon: <FeatherIcon icon="home" className="icon-dual" />,
            link: "/dashboard",
            click: function (e) {
                e.preventDefault();
                setIsSecurityCompliance(!isDashboard);
                setIscurrentState('dashboard');
                updateIconSidebar(e);
            },
            stateVariables: isDashboard,
        },
        {
            id: "SamplePages",
            label: "Sample Pages",
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsSamplePages(!isSamplePages);
                setIscurrentState('SamplePages');
                updateIconSidebar(e);
            },
            stateVariables: isSamplePages,
            subItems: [
                {
                    id: "a",
                    label: "A",
                    link: "/a",
                    parentId: "SamplePages",
                },
                {
                    id: "b",
                    label: "B",
                    link: "/b",
                    parentId: "SamplePages",
                },
                {
                    id: "c",
                    label: "SOA",
                    link: "/soa",
                    parentId: "SamplePages",
                },
                {
                    id: "d",
                    label: "D",
                    link: "/d",
                    parentId: "SamplePages",
                },
                {
                    id: "e",
                    label: "E",
                    link: "/e",
                    parentId: "SamplePages",
                }
            ],
        },
        {
            id: "SecurityCompliance",
            label: "Security & Compliance",
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsSecurityCompliance(!isSecurityCompliance);
                setIscurrentState('SecurityCompliance');
                updateIconSidebar(e);
            },
            stateVariables: isSecurityCompliance,
            subItems: [
                {
                    id: "policy-deck",
                    label: "Policy Deck",
                    link: "/security-compliance/policy-deck",
                    parentId: "SecurityCompliance",
                },
                {
                    id: "controls-deck",
                    label: "Controls Deck",
                    link: "/security-compliance/controls-deck",
                    parentId: "SecurityCompliance",
                },
                {
                    id: "certifications-deck",
                    label: "Certifications Deck",
                    link: "/security-compliance/certifications-deck",
                    parentId: "SecurityCompliance",
                },
                {
                    id: "training-deck",
                    label: "Traning Deck",
                    link: "/security-compliance/taining-deck",
                    parentId: "SecurityCompliance",
                }
            ],
        },
        {
            id: "Projects",
            label: "Projects",
            icon: <FeatherIcon icon="users" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Projects');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
            subItems: [
                {
                    id: "rfpAuditDeck",
                    label: "RFP & Audit Deck",
                    link: "/projects/rfp-audit-deck",
                    parentId: "Projects",
                },
                {
                    id: "vendorMgmtDeck",
                    label: "Vendor Mgmt Deck",
                    link: "/projects/vendor-mgmt-deck",
                    parentId: "Projects",
                },
            ],
        },
        {
            id: "reporting",
            label: "Reporting",
            icon: <FeatherIcon icon="command" className="icon-dual" />,
            link: "/reporting"
        },
        {
            id: "manage",
            label: "Manage",
            icon: <i className="ri-rocket-line" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('Landing');
                updateIconSidebar(e);
            }
        },
         {
            id: "Audits",
            label: "Audits",
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAudits(!isAudits);
                setIscurrentState('Audits');
                updateIconSidebar(e);
            },
            stateVariables: isAudits,
            subItems: [
                {
                    id: "audit-readiness-projects",
                    label: "Audits Readiness Projects",
                    link: "/audits/audits-readiness-projects",
                    parentId: "Audits",
                },
                {
                    id: "statement-of-applicability",
                    label: "Statement of Applicability",
                    link: "/audits/statement-of-applicability",
                    parentId: "Audits",
                },
                {
                    id: "audits-projects",
                    label: "Audit Projects",
                    link: "/audits/audit-projects",
                    parentId: "Audits",
                },
                {
                    id: "training-deck",
                    label: "Audit Findings",
                    link: "/security-compliance/taining-deck",
                    parentId: "Audits",
                }
            ],
        },
        {
            id: "Risk",
            label: "Risk",
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsRisk(!isRisk);
                setIscurrentState('Risk');
                updateIconSidebar(e);
            },
            stateVariables: isRisk,
            subItems: [
                {
                    id: "policy-deck",
                    label: "Risk Dashboard",
                    link: "#",
                    parentId: "Risk",
                },
                {
                    id: "controls-deck",
                    label: "Risk Identification Survey",
                    link: "/#",
                    parentId: "Risk",
                },
                {
                    id: "certifications-deck",
                    label: "Risk Register",
                    link: "/security-compliance/certifications-deck",
                    parentId: "Risk",
                }
            ],
        },{
            id: "InfoSecProgram",
            label: "InfoSec Program",
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsInfoSecProgram(!isInfoSecProgram);
                setIscurrentState('InfoSecProgram');
                updateIconSidebar(e);
            },
            stateVariables: isInfoSecProgram,
            subItems: [
                {
                    id: "policy-deck",
                    label: "Products",
                    link: "#",
                    parentId: "InfoSecProgram",
                },
                {
                    id: "controls-deck",
                    label: "Policies",
                    link: "/#",
                    parentId: "InfoSecProgram",
                },
                {
                    id: "certifications-deck",
                    label: "Procedures",
                    link: "/security-compliance/certifications-deck",
                    parentId: "InfoSecProgram",
                },
                {
                    id: "certifications-deck",
                    label: "Controls",
                    link: "/security-compliance/certifications-deck",
                    parentId: "InfoSecProgram",
                },
                {
                    id: "certifications-deck",
                    label: "Evidence Tasks",
                    link: "/security-compliance/certifications-deck",
                    parentId: "InfoSecProgram",
                }
            ],
        },{
            id: "People",
            label: "People",
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsPeople(!isPeople);
                setIscurrentState('People');
                updateIconSidebar(e);
            },
            stateVariables: isPeople,
            subItems: [
                {
                    id: "policy-deck",
                    label: "Users",
                    link: "#",
                    parentId: "People",
                },
                {
                    id: "controls-deck",
                    label: "Roles",
                    link: "/#",
                    parentId: "People",
                },
                {
                    id: "certifications-deck",
                    label: "Policy Training",
                    link: "/security-compliance/certifications-deck",
                    parentId: "People",
                },
                {
                    id: "certifications-deck",
                    label: "Onboarding and Offboarding",
                    link: "/security-compliance/certifications-deck",
                    parentId: "People",
                },
                {
                    id: "certifications-deck",
                    label: "Authentication Setup",
                    link: "/security-compliance/certifications-deck",
                    parentId: "People",
                }
            ],
        },{
            id: "Questionnaires",
            label: "Manage",
            icon: <i className="ri-rocket-line" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('Questionnaires');
                updateIconSidebar(e);
            }
        },{
            id: "Vendors",
            label: "Manage",
            icon: <i className="ri-rocket-line" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIscurrentState('Vendors');
                updateIconSidebar(e);
            }
        },{
            id: "AssuranceTools",
            label: "Assurance Tools",
            icon: <FeatherIcon icon="grid" className="icon-dual" />,
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAssuranceTools(!isAssuranceTools);
                setIscurrentState('AssuranceTools');
                updateIconSidebar(e);
            },
            stateVariables: isAssuranceTools,
            subItems: [
                {
                    id: "policy-deck",
                    label: "Portal",
                    link: "#",
                    parentId: "AssuranceTools",
                },
                {
                    id: "controls-deck",
                    label: "Security Assurance Report",
                    link: "/#",
                    parentId: "AssuranceTools",
                },
            ],
        }
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;