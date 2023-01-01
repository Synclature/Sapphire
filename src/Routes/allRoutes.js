import React from 'react';
import { Redirect } from 'react-router-dom';

//Dashboard
import Dashboard from '../pages/Dashboard';

// Sample Pages
import A from '../pages/A';
import SOA1 from '../pages/SOA';
import D from '../pages/D';
import UserForm from '../pages/Forms/userForm';
import ControlProcessForm from '../pages/Forms/controlProcessForm';
import AssetsForm from '../pages/Forms/assetsForm';

// Audits
import SOA from '../pages/Audits/SOA';
import AuditProjects from '../pages/Audits/AuditProjects';
import AuditsFindings from '../pages/Audits/AuditsFindings';
import AuditsReadinessProjects from '../pages/Audits/AuditsReadinessProjects';

// IT Assets
import ITAssetCreate from '../pages/ITAssets/create';
import ITAssetManagement from '../pages/ITAssets/management';
import ITAssetApprove from '../pages/ITAssets/approve';

// Risk
import RiskDashboard from '../pages/Risk/RiskDashboard';
import RiskIdentificationSurvey from '../pages/Risk/RiskIdentificationSurvey';
import RiskRegister from '../pages/Risk/RiskRegister';
import CreateRiskRegister from '../pages/Risk/RiskRegister/create';

// InfoSec Program
import Controls from '../pages/InfoSecProgram/Controls';
import EvidenceTask from '../pages/InfoSecProgram/EvidenceTask';
import Policies from '../pages/InfoSecProgram/Policies';
import Procedures from '../pages/InfoSecProgram/Procedures';
import Products from '../pages/InfoSecProgram/Products';

// People
import AuthenticationSetup from '../pages/People/AuthenticationSetup';
import OnboardingAndOffboarding from '../pages/People/OnboardingAndOffboarding';
import PolicyTraining from '../pages/People/PolicyTraining';
import Roles from '../pages/People/Roles';
import Users from '../pages/People/Users';
import InviteUser from 'pages/People/Users/invite';

//Manage
import Manage from '../pages/Manage';

//Assurance Tools
import Portal from '../pages/AssuranceTools/Portal';
import SecurityAssuranceReport from '../pages/AssuranceTools/SecurityAssuranceReport';

// Vulnerability Management
import VulnerabilityManagement from '../pages/VulnerabilityManagement';
import CreateVulnerabilityManagement from '../pages/VulnerabilityManagement/create';

//login
import Login from '../pages/Authentication/Login';
import ForgetPasswordPage from '../pages/Authentication/ForgetPassword';
import Logout from '../pages/Authentication/Logout';
import Register from '../pages/Authentication/Register';

const authProtectedRoutes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/index', component: Dashboard },

    // Sample Pages
    { path: '/a', component: A },
    { path: '/soa', component: SOA1 },
    { path: '/d', component: D },
    { path: '/user-form', component: UserForm },
    { path: '/control-form', component: ControlProcessForm },
    { path: '/assets-form', component: AssetsForm },

    //Audits
    { path: '/audits/audit-projects', component: AuditProjects },
    { path: '/audits/audits-findings', component: AuditsFindings },
    { path: '/audits/audits-readiness-projects', component: AuditsReadinessProjects },
    { path: '/audits/statement-of-applicability', component: SOA },

    // IT Assets
    { path: '/itasset/create', component: ITAssetCreate },
    { path: '/itasset/management', component: ITAssetManagement },
    { path: '/itasset/approve', component: ITAssetApprove },

    //Risk
    { path: '/risk/risk-dashboard', component: RiskDashboard },
    { path: '/risk/risk-identification-survey', component: RiskIdentificationSurvey },
    { path: '/risk/risk-register', component: RiskRegister },
    { path: '/risk/risk-register/create', component: CreateRiskRegister },

    //InfoSec Program
    { path: '/infosec-program/controls', component: Controls },
    { path: '/infosec-program/evidence-task', component: EvidenceTask },
    { path: '/infosec-program/policies', component: Policies },
    { path: '/infosec-program/procedures', component: Procedures },
    { path: '/infosec-program/products', component: Products },

    // People
    { path: '/people/authentication-setup', component: AuthenticationSetup },
    { path: '/people/onboarding-offboarding', component: OnboardingAndOffboarding },
    { path: '/people/policy-training', component: PolicyTraining },
    { path: '/people/roles', component: Roles },
    { path: '/people/users', component: Users },
    { path: '/people/user/invite', component: InviteUser },

    // Vulnerability Management
    { path: '/vulnerability-management', component: VulnerabilityManagement },
    { path: '/vulnerability-management/create', component: CreateVulnerabilityManagement },

    // Manage
    { path: '/manage', component: Manage },

    // this route should be at the end of all other routes
    // eslint-disable-next-line react/display-name
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard" />,
    },
];

const publicRoutes = [
    // Authentication Page
    { path: '/logout', component: Logout },
    { path: '/login', component: Login },
    { path: '/forgot-password', component: ForgetPasswordPage },
    { path: '/register', component: Register },
];

export { authProtectedRoutes, publicRoutes };
