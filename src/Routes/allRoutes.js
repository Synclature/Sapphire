import React from 'react';
import { Redirect } from 'react-router-dom';

//Dashboard
import Dashboard from '../pages/Dashboard';

// Sample Pages
import A from '../pages/A';
import SOA1 from '../pages/SOA';
import D from '../pages/D';

// Audits
import SOA from '../pages/Audits/SOA';
import AuditProjects from '../pages/Audits/AuditProjects';
import AuditsFindings from '../pages/Audits/AuditsFindings';
import AuditsReadinessProjects from '../pages/Audits/AuditsReadinessProjects';

// Risk
import RiskDashboard from '../pages/Risk/RiskDashboard';
import RiskIdentificationSurvey from '../pages/Risk/RiskIdentificationSurvey';
import RiskRegister from '../pages/Risk/RiskRegister';

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

//Manage
import Manage from '../pages/Manage';

//Assurance Tools
import Portal from '../pages/AssuranceTools/Portal';
import SecurityAssuranceReport from '../pages/AssuranceTools/SecurityAssuranceReport';

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

    //Audits
    { path: '/audits/audit-projects', component: AuditProjects },
    { path: '/audits/audits-findings', component: AuditsFindings },
    { path: '/audits/audits-readiness-projects', component: AuditsReadinessProjects },
    { path: '/audits/statement-of-applicability', component: SOA },

    //Risk
    { path: '/risk/risk-dashboard', component: RiskDashboard },
    { path: '/risk/risk-identification-survey', component: RiskIdentificationSurvey },
    { path: '/risk/risk-register', component: RiskRegister },

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
