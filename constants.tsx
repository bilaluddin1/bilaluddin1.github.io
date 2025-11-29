import { Project, ExperienceItem } from './types';

export const HERO_TITLES = [
  "Security Engineer",
  "DevSecOps Specialist",
  "Cloud Security Architect",
  "AppSec Researcher"
];

export const SKILLS_DATA = [
  { subject: 'Application Security', A: 90, fullMark: 100 },
  { subject: 'Cloud Security', A: 95, fullMark: 100 },
  { subject: 'DevSecOps', A: 85, fullMark: 100 },
  { subject: 'Automation', A: 80, fullMark: 100 },
  { subject: 'Container Security', A: 85, fullMark: 100 },
  { subject: 'Mobile Security', A: 75, fullMark: 100 },
];

export const SERVICES = [
  {
    title: "Architecture Review",
    description: "Assess microservices and monolithic systems to catch design flaws early and build secure, scalable infrastructure.",
    icon: "Network"
  },
  {
    title: "Source Code Review",
    description: "Detect logic errors, hardcoded secrets, and vulnerabilities to keep your applications secure and production-ready.",
    icon: "Code"
  },
  {
    title: "Security Assessment",
    description: "Simulate real-world attacks on Web applications, Mobile, and API applications to uncover critical security risks before they impact your business.",
    icon: "Crosshair"
  },
  {
    title: "Cloud Security",
    description: "Harden AWS and Kubernetes environments, audit IAM policies, review configurations, and implement secure DevSecOps pipelines.",
    icon: "Cloud"
  },
  {
    title: "Threat Modeling",
    description: "Identify potential attack vectors and security risks proactively, using STRIDE and proven methodologies for your critical features.",
    icon: "Shield"
  },
  {
    title: "Security Technology Guidance",
    description: "Get expert guidance on selecting and integrating the right security tools SAST, DAST, SIEM, WAF tailored to your technology stack.",
    icon: "Settings"
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vuln Management Program',
    description: 'Deployed a comprehensive vulnerability management program by integrating Prowler with DefectDojo to automate ingestion and triage of AWS misconfigurations, reducing reporting overhead by 50%.',
    techStack: ['Prowler', 'DefectDojo', 'AWS', 'Python'],
    github: '#',
    category: 'Cloud'
  },
  {
    id: '2',
    title: 'Secure SDLC Pipeline',
    description: 'Engineered a secure SDLC within the CI/CD pipeline by embedding Dependabot, Semgrep, and Trivy for automated scanning and custom policy enforcement, boosting scan accuracy by 70%.',
    techStack: ['GitHub Actions', 'Semgrep', 'Trivy', 'Dependabot'],
    category: 'Tooling'
  },
  {
    id: '3',
    title: 'K8s Hardening & Runtime Security',
    description: 'Hardened containerized applications by implementing Kubernetes security contexts, enforcing least privilege with RBAC, and deploying Falco for real-time runtime anomaly detection.',
    techStack: ['Kubernetes', 'Kyverno', 'OPA', 'Falco'],
    category: 'Cloud'
  },
  {
    id: '4',
    title: 'Wazuh SIEM Deployment',
    description: 'Increased incident response speed by 40% and improved Cloud visibility by deploying Wazuh SIEM, integrating diverse data sources, and automating detection with custom rule sets.',
    techStack: ['Wazuh', 'SIEM', 'ElasticSearch', 'Automation'],
    category: 'Network'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '0',
    role: 'Security Engineer',
    company: 'Bazaar Technologies',
    period: 'June 2024 - Present',
    description: [],
    skills: []
  },
  {
    id: '1',
    role: 'Project',
    company: 'Microservices Security & Code Review',
    period: '',
    description: [
      'Reduced critical security vulnerabilities by 40% in Java/Kotlin microservices APIs through hands-on code reviews and targeted remediation, improving system resilience and reliability.'
    ],
    skills: ['Java', 'Kotlin', 'Code Review', 'API Security']
  },
  {
    id: '2',
    role: 'Project',
    company: 'Mobile & Web Application Security Assessment',
    period: '',
    description: [
      'Performed security assessments of mobile and web applications using Burp Suite, and MOBSF uncovering critical vulnerabilities and delivering remediation reports.'
    ],
    skills: ['Burp Suite', 'MOBSF', 'Penetration Testing']
  },
  {
    id: '3',
    role: 'Project',
    company: 'IAM Security Redesign',
    period: '',
    description: [
      'Reduced excessive IAM permissions by 40% by redesigning roles and enforcing least privilege, leveraging automated monitoring to eliminate unused permissions and minimize application-layer attack surface.'
    ],
    skills: ['AWS IAM', 'Least Privilege', 'Cloud Security']
  },
  {
    id: '4',
    role: 'Project',
    company: 'AWS WAF Security Management',
    period: '',
    description: [
      'Managed AWS WAF to protect critical web applications from OWASP Top 10 vulnerabilities, cutting security risks by 40% and ensuring compliance with industry standards.'
    ],
    skills: ['AWS WAF', 'OWASP', 'Web Security']
  },
  {
    id: '5',
    role: 'Project',
    company: 'Threat Modeling & Architecture Review',
    period: '',
    description: [
      'Conducted threat modeling and secure architecture reviews for critical financial integrations, reducing high-severity vulnerabilities by 20% and strengthening application-layer defenses.'
    ],
    skills: ['Threat Modeling', 'Security Architecture', 'STRIDE']
  },
  {
    id: '6',
    role: 'Project',
    company: 'Vulnerability Management Program',
    period: '',
    description: [
      'Deployed a comprehensive vulnerability management program by integrating Prowler with DefectDojo to automate ingestion and triage of AWS misconfigurations, reducing reporting overhead by 50%.'
    ],
    skills: ['Prowler', 'DefectDojo', 'AWS', 'Python']
  },
  {
    id: '7',
    role: 'Project',
    company: 'Secure SDLC Pipeline',
    period: '',
    description: [
      'Engineered a secure SDLC within the CI/CD pipeline by embedding Dependabot, Semgrep, and Trivy for automated scanning and custom policy enforcement, boosting scan accuracy by 70%.'
    ],
    skills: ['GitHub Actions', 'Semgrep', 'Trivy', 'Dependabot']
  },
  {
    id: '8',
    role: 'Project',
    company: 'K8s Hardening & Runtime Security',
    period: '',
    description: [
      'Hardened containerized applications by implementing Kubernetes security contexts, enforcing least privilege with RBAC and shift-left policies via Kyverno/OPA, and deployed Falco for real-time runtime anomaly detection.'
    ],
    skills: ['Kubernetes', 'Kyverno', 'OPA', 'Falco']
  },
  {
    id: '9',
    role: 'Project',
    company: 'Wazuh SIEM Deployment',
    period: '',
    description: [
      'Increased incident response speed by 40% and improved Cloud visibility by deploying Wazuh SIEM, integrating diverse data sources, and automating detection with custom rule sets.'
    ],
    skills: ['Wazuh', 'SIEM', 'ElasticSearch', 'Automation']
  },

];