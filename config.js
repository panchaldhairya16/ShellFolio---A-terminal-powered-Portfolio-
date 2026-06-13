/**
 * Portfolio Configuration — Dhairya N Panchal
 */

const CONFIG = {
    pageTitle: "Dhairya Panchal | DevOps & Linux Engineer",
    logoPrompt: "~/ Welcome to Panchal Dhairya's Portfolio",

    terminalUser: "dhairya",
    terminalHost: "rhel9",
    welcomeMessage: "Welcome to Dhairya's interactive shell. <br>Type <span class='highlight'>help</span> to see available commands.<br>💡 Hint: Type <span class='highlight'>server</span> to boot a real Linux server inside your browser!",
    bootMessages: [
        "Initializing RHEL 9 kernel...",
        "Loading DevOps modules...",
        "Establishing secure SSH tunnel...",
        "Welcome to Dhairya's terminal"
    ],

    about: {
        title: "About Section",
        name: "Dhairya N Panchal",
        pfp: "profile.png",
        pfpFallback: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
        titleRole: "DevOps Engineer · Linux SysAdmin · RHCSA Certified",
        bioParagraphs: [
            "B.Sc. IT (Cloud & Application Development) student at Gujarat University, Ahmedabad.",
            "RHCSA-certified Linux systems professional with hands-on experience building CI/CD pipelines, containerized deployments on Azure, and hardening production Linux environments across 50+ user systems."
        ],
        learningAndInterests: [
            "Currently deepening expertise in AWS infrastructure optimization, Kubernetes orchestration, and SRE practices — aiming for Google-scale system reliability.",
            "Active volunteer at AWS Community Ahmedabad and Elastic Ahmedabad, organizing meetups on cloud and observability tooling."
        ],
        location: "Ahmedabad, Gujarat, India (GMT +5:30)"
    },

    skills: {
        title: "Skills Inventory",
        treeCol1: `
.
├── Cloud & DevOps
│   ├── AWS (EC2, S3, VPC, IAM)
│   ├── Microsoft Azure (VM, App Service, NSG)
│   ├── Docker / Podman
│   ├── Jenkins
│   ├── GitHub Actions
│   └── CI/CD Pipelines
├── System Administration
│   ├── Linux (RHEL 9 / Ubuntu)
│   ├── SSH Hardening
│   ├── firewalld / iptables
│   ├── User & Group Management
│   ├── File Permissions
│   ├── Log Analysis
│   └── System Monitoring
`,
        treeCol2: `
├── Programming & Scripting
│   ├── Bash Shell Scripting
│   ├── Python
│   └── PHP
├── Web Development
│   ├── React.js
│   ├── HTML5 / CSS3
│   ├── JavaScript
│   ├── MongoDB
│   └── MySQL
├── Networking & Tools
│   ├── OSI Model / TCP/IP
│   ├── IP Addressing & Routing
│   ├── DNS
│   ├── Git / GitHub
│   └── Jenkins
└── Certifications
    ├── RHCSA (Red Hat)
    ├── AWS Academy – Cloud Foundations
    ├── AWS Basics – KodeKloud
    └── Cloud Computing – EC-Council
`
    },

    projectsSectionTitle: "Deployment Log: Projects",
    projects: [
        {
            name: "CI/CD Deployment Platform with Jenkins & Azure App Service",
            url: "https://github.com/panchaldhairya16",
            timeline: "2024 – Present",
            description: [
                "Built a production-style pipeline integrating GitHub webhooks, Jenkins, and Azure App Service to automate build and release workflows — achieving zero-touch deployments on every code push.",
                "Eliminated all manual deployment steps; fully automated test-build-deploy cycle across environments, reducing deployment time significantly."
            ],
            stack: "Jenkins, GitHub Actions, Azure App Service, CI/CD, Webhooks"
        },
        {
            name: "Containerized Website Hosting on Azure VM with Podman",
            url: "https://github.com/panchaldhairya16",
            timeline: "2024",
            description: [
                "Provisioned Azure VM, configured NSG rules & firewall policies, and deployed a containerized static site with public IP access — demonstrating end-to-end cloud infrastructure ownership.",
                "Implemented Podman port mapping for internet-facing container exposure; applied networking best practices for security and availability."
            ],
            stack: "Podman, Azure VM, NSG, Linux, Networking"
        },
        {
            name: "Tech-Meet – Full-Stack Event Management System",
            url: "https://github.com/panchaldhairya16",
            timeline: "2024",
            description: [
                "Built a full-stack platform with CRUD operations, input validation, and a normalized MySQL relational schema to manage college events at scale.",
                "Implemented role-based access and session management for secure multi-user workflows."
            ],
            stack: "HTML, CSS, JavaScript, PHP, MySQL"
        }
    ],

    experienceSectionTitle: "SysLog: Experience",
    experience: [
        {
            title: "Linux System Administrator",
            company: "Electromech Cloudtech Pvt. Limited",
            location: "Ahmedabad, India",
            timeline: "Sept 2024 – Present",
            description: [
                "Administered RHEL/Ubuntu systems across 50+ user environments; enforced file permissions, group policies, and access controls, reducing unauthorized access incidents by hardening SSH and firewall rules (firewalld/iptables).",
                "Deployed containerized web applications on Azure VMs using Podman with port mapping and NSG configuration, replicating production-grade cloud deployment workflows.",
                "Performed proactive log analysis, IP routing, and system troubleshooting, maintaining 99%+ uptime across all managed infrastructure."
            ]
        },
        {
            title: "DevOps Intern",
            company: "Stellarmind.ai",
            location: "Ahmedabad, India",
            timeline: "Feb 2025 – May 2025",
            description: [
                "Engineered CI/CD pipelines using Jenkins and GitHub Actions, reducing manual deployment effort and accelerating software delivery cycles.",
                "Managed containerized environments via Docker/Podman, ensuring consistent deployments across development and production.",
                "Monitored and optimized AWS infrastructure (EC2, S3, VPC), contributing to cost reduction through right-sizing and resource provisioning improvements.",
                "Authored Bash shell scripts to automate repetitive sysadmin and deployment tasks, improving team operational efficiency."
            ]
        }
    ],

    connect: {
        title: "LinkLayer: Connect",
        subtitle: "Establish a secure connection. Send a message directly to my inbox.",
        formspreeId: "YOUR_FORMSPREE_ID",
        defaultMessage: "Hi Dhairya, I'd like to connect with you!"
    },

    socials: [
        { name: "github", url: "https://github.com/panchaldhairya16", icon: "fab fa-github" },
        { name: "linkedin", url: "https://www.linkedin.com/in/dhairya-panchal-800845351/", icon: "fab fa-linkedin" },
        { name: "email", url: "mailto:panchaldhairya2005@gmail.com", icon: "fas fa-envelope" }
    ],

    resumeUrl: "DhairyaPanchal-CV.pdf"
};
