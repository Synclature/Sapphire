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
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

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
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
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
        }
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;