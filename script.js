// Certificate data with detailed information
const certificateData = {
    'hexnode-android-specialist': {
        org: 'Hexnode',
        level: 'specialist',
        title: 'Android Certified Specialist',
        date: 'January 2026',
        expiry: 'January 2028',
        id: '172635212',
        overview: 'Advanced certification demonstrating expert-level knowledge in Android enterprise mobility management. Covers comprehensive device management strategies, zero-touch enrollment, work profile configurations, and advanced security policies for Android ecosystems in enterprise environments.',
        skills: ['Android Enterprise', 'Zero-Touch Enrollment', 'Work Profiles', 'Kiosk Mode', 'App Management', 'Security Policies'],
        topics: ['Device Administration', 'Managed Configurations', 'App Distribution', 'Compliance Policies', 'Remote Actions', 'Geofencing'],
        verifyUrl: '#'
    },
    'hexnode-macos-professional': {
        org: 'Hexnode',
        level: 'professional',
        title: 'MacOS Certified Professional',
        date: 'January 2026',
        expiry: 'January 2028',
        id: '170848509',
        overview: 'Professional-level certification for managing Apple macOS devices in enterprise environments. Validates expertise in DEP/VPP integration, configuration profiles, security compliance, and automated deployment workflows for macOS fleets.',
        skills: ['macOS Management', 'Apple Business Manager', 'Configuration Profiles', 'FileVault Encryption', 'Kernel Extensions', 'Patch Management'],
        topics: ['DEP Enrollment', 'VPP Distribution', 'Security Preferences', 'Software Updates', 'Remote Management', 'Compliance Monitoring'],
        verifyUrl: '#'
    },
    'hexnode-ios-professional': {
        org: 'Hexnode',
        level: 'professional',
        title: 'iOS Certified Professional',
        date: 'November 2025',
        expiry: 'November 2027',
        id: '165640189',
        overview: 'Comprehensive certification for iOS and iPadOS device management. Demonstrates proficiency in Apple ecosystem integration, mobile application management, and implementing robust security frameworks for iOS devices at scale.',
        skills: ['iOS Supervision', 'ABM Integration', 'App Configuration', 'Per-App VPN', 'Managed Domains', 'Lost Mode'],
        topics: ['Device Enrollment', 'Profile Configuration', 'App Management', 'Content Filtering', 'Network Security', 'Remote Wipe'],
        verifyUrl: '#'
    },
    'hexnode-windows-professional': {
        org: 'Hexnode',
        level: 'professional',
        title: 'Windows Certified Professional',
        date: 'September 2025',
        expiry: 'September 2027',
        id: '161210620',
        overview: 'Professional certification covering Windows endpoint management across hybrid Azure AD and on-premises environments. Includes expertise in Group Policy integration, BitLocker management, and Windows Update for Business configurations.',
        skills: ['Windows Autopilot', 'Azure AD Join', 'BitLocker Management', 'Windows Hello', 'WIP Policies', 'PowerShell DSC'],
        topics: ['Enrollment Methods', 'Policy Deployment', 'Security Baselines', 'Update Rings', 'Compliance Policies', 'Remote Assistance'],
        verifyUrl: '#'
    },
    'hexnode-android-professional': {
        org: 'Hexnode',
        level: 'professional',
        title: 'Android Certified Professional',
        date: 'September 2025',
        expiry: 'September 2027',
        id: '160999783',
        overview: 'Professional certification validating core competencies in Android enterprise device management. Covers device provisioning methods, application management, and security policy implementation for diverse Android deployments.',
        skills: ['Android Management', 'Google Play Integration', 'Device Policies', 'App Configurations', 'Network Security', 'Remote Control'],
        topics: ['Enrollment Options', 'Managed Google Play', 'Policy Configuration', 'Compliance Rules', 'Geolocation Tracking', 'Remote Commands'],
        verifyUrl: '#'
    },
    'cloudwise-it-ops': {
        org: 'Cloudwise',
        level: 'engineer',
        title: 'IT Operations Management',
        date: 'September 2024',
        expiry: 'September 2026',
        id: null,
        overview: 'Engineer-level certification in IT Operations Management focusing on service monitoring, incident management, and operational excellence. Emphasizes proactive monitoring strategies and automated remediation workflows.',
        skills: ['Service Monitoring', 'Incident Management', 'Automation', 'SLA Management', 'Capacity Planning', 'Performance Tuning'],
        topics: ['Event Correlation', 'Alert Management', 'Runbook Automation', 'Service Mapping', 'Dashboard Creation', 'Reporting Analytics'],
        verifyUrl: '#'
    },
    'cloudwise-it-service': {
        org: 'Cloudwise',
        level: 'engineer',
        title: 'IT Service Management',
        date: 'September 2024',
        expiry: 'September 2026',
        id: null,
        overview: 'Comprehensive ITSM certification covering service lifecycle management, change control processes, and service catalog design. Aligns with ITIL best practices for delivering high-quality IT services.',
        skills: ['ITIL Framework', 'Service Design', 'Change Management', 'Problem Management', 'Service Catalog', 'CMDB'],
        topics: ['Service Strategy', 'Service Transition', 'Service Operation', 'Continual Improvement', 'Asset Management', 'Knowledge Management'],
        verifyUrl: '#'
    },
    'bmc-control-m-scheduler': {
        org: 'BMC Software',
        level: 'professional',
        title: 'Control-M Scheduler',
        date: 'March 2024',
        expiry: null,
        id: null,
        overview: 'Professional certification in workload automation scheduling using BMC Control-M. Validates ability to design, implement, and optimize complex job schedules across heterogeneous environments.',
        skills: ['Job Scheduling', 'Workload Automation', 'Dependency Management', 'Calendar Management', 'Alert Configuration', 'Batch Processing'],
        topics: ['Job Definition', 'Schedule Design', 'Resource Management', 'Monitoring Dashboards', 'Forecasting', 'Self-Service'],
        verifyUrl: '#'
    },
    'bmc-control-m-admin': {
        org: 'BMC Software',
        level: 'professional',
        title: 'Control-M Administrator',
        date: 'April 2024',
        expiry: null,
        id: null,
        overview: 'Advanced administration certification for BMC Control-M environments. Covers installation, configuration, high availability setup, and performance optimization of enterprise workload automation infrastructure.',
        skills: ['System Administration', 'High Availability', 'Disaster Recovery', 'Performance Tuning', 'Security Configuration', 'Upgrade Management'],
        topics: ['Architecture Design', 'Installation Procedures', 'Database Management', 'Agent Deployment', 'Security Policies', 'Troubleshooting'],
        verifyUrl: '#'
    },
    'bmc-control-m-consultant': {
        org: 'BMC Software',
        level: 'professional',
        title: 'Control-M Consultant',
        date: 'April 2024',
        expiry: null,
        id: null,
        overview: 'Consultant-level certification demonstrating ability to architect enterprise workload automation solutions. Includes business process analysis, solution design, and implementation best practices.',
        skills: ['Solution Architecture', 'Requirements Analysis', 'Integration Design', 'Best Practices', 'Project Leadership', 'Client Consulting'],
        topics: ['Assessment Methodology', 'Solution Design', 'Integration Patterns', 'Migration Strategies', 'Governance Framework', 'ROI Analysis'],
        verifyUrl: '#'
    },
    'sophos-technician': {
        org: 'Sophos',
        level: 'technician',
        title: 'Certified Technician',
        date: 'July 2020',
        expiry: null,
        id: null,
        overview: 'Entry-level certification validating foundational skills in deploying and maintaining Sophos security solutions. Covers basic configuration of endpoint protection, firewall management, and threat response procedures.',
        skills: ['Endpoint Protection', 'Firewall Basics', 'Threat Detection', 'Policy Configuration', 'Health Monitoring', 'Basic Troubleshooting'],
        topics: ['Product Installation', 'Policy Setup', 'Update Management', 'Alert Handling', 'Report Generation', 'Customer Support'],
        verifyUrl: '#'
    },
    'sophos-engineer': {
        org: 'Sophos',
        level: 'engineer',
        title: 'Certified Engineer',
        date: 'July 2020',
        expiry: null,
        id: null,
        overview: 'Engineer-level certification for advanced Sophos security solution deployment. Demonstrates expertise in complex multi-site configurations, centralized management, and advanced threat protection strategies.',
        skills: ['Advanced Configuration', 'Multi-Site Management', 'Synchronized Security', 'Threat Intelligence', 'VPN Configuration', 'Centralized Management'],
        topics: ['Enterprise Deployment', 'Policy Optimization', 'Integration APIs', 'Advanced Threat Protection', 'Disaster Recovery', 'Performance Optimization'],
        verifyUrl: '#'
    }
};

// Theme toggle functionality
const themeToggles = document.querySelectorAll('.theme-toggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.style.display === 'none' || !mobileMenu.style.display;
        mobileMenu.style.display = isHidden ? 'flex' : 'none';
        mobileMenu.style.flexDirection = 'column';
    });

    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });
}

// Modal functionality
const modal = document.getElementById('certModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalOrg = document.getElementById('modalOrg');
const modalLevel = document.getElementById('modalLevel');
const modalTitle = document.getElementById('modalTitle');
const modalDate = document.getElementById('modalDate');
const modalId = document.getElementById('modalId');
const modalIdContainer = document.getElementById('modalIdContainer');
const modalExpiry = document.getElementById('modalExpiry');
const modalExpiryContainer = document.getElementById('modalExpiryContainer');
const modalOverview = document.getElementById('modalOverview');
const modalSkills = document.getElementById('modalSkills');
const modalSkillsSection = document.getElementById('modalSkillsSection');
const modalTopics = document.getElementById('modalTopics');
const modalTopicsSection = document.getElementById('modalTopicsSection');
const modalVerify = document.getElementById('modalVerify');

function openModal(certKey) {
    const cert = certificateData[certKey];
    if (!cert) return;

    modalOrg.textContent = cert.org;
    modalLevel.textContent = cert.level;
    modalLevel.className = `modal-level ${cert.level}`;
    modalTitle.textContent = cert.title;
    modalDate.textContent = cert.date;
    modalOverview.textContent = cert.overview;
    
    if (cert.id) {
        modalId.textContent = cert.id;
        modalIdContainer.style.display = 'flex';
    } else {
        modalIdContainer.style.display = 'none';
    }
    
    if (cert.expiry) {
        modalExpiry.textContent = cert.expiry;
        modalExpiryContainer.style.display = 'flex';
    } else {
        modalExpiryContainer.style.display = 'none';
    }
    
    if (cert.skills && cert.skills.length > 0) {
        modalSkills.innerHTML = cert.skills.map(skill => `<li>${skill}</li>`).join('');
        modalSkillsSection.style.display = 'block';
    } else {
        modalSkillsSection.style.display = 'none';
    }
    
    if (cert.topics && cert.topics.length > 0) {
        modalTopics.innerHTML = cert.topics.map(topic => `<div class="topic-item">${topic}</div>`).join('');
        modalTopicsSection.style.display = 'block';
    } else {
        modalTopicsSection.style.display = 'none';
    }
    
    modalVerify.href = cert.verifyUrl;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal events
modalCloseBtn.addEventListener('click', closeModal);

// Close on overlay click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Add click handlers to certificate cards
function initializeCertCards() {
    const certCards = document.querySelectorAll('.cert-card');
    
    const certKeys = [
        'hexnode-android-specialist',
        'hexnode-macos-professional',
        'hexnode-ios-professional',
        'hexnode-windows-professional',
        'hexnode-android-professional',
        'cloudwise-it-ops',
        'cloudwise-it-service',
        'bmc-control-m-scheduler',
        'bmc-control-m-admin',
        'bmc-control-m-consultant',
        'sophos-technician',
        'sophos-engineer'
    ];
    
    certCards.forEach((card, index) => {
        if (certKeys[index]) {
            card.addEventListener('click', () => openModal(certKeys[index]));
        }
    });
}

// Scroll reveal animation
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements for reveal
document.querySelectorAll('.project, .about-grid, .section-header, .contact-grid, .cert-card').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Subtle parallax on hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && scrolled < window.innerHeight) {
        heroTitle.style.transform = `translateY(${scrolled * 0.05}px)`;
    }
});

// Initialize certificate cards on DOM load
document.addEventListener('DOMContentLoaded', initializeCertCards);

// Terminal
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('terminalOverlay');
    if (!overlay || sessionStorage.getItem('seenWelcome')) {
        overlay?.remove();
        return;
    }

    document.body.style.overflow = 'hidden';

    const sleep = (ms) => new Promise(r => setTimeout(r, ms));
    const randomDelay = (min, max) => sleep(Math.random() * (max - min) + min);

    const bootSequence = document.getElementById('bootSequence');
    const cmdLine = document.getElementById('cmdLine');
    const typedCmd = document.getElementById('typedCmd');
    const cursor = document.getElementById('cursor');

    const addLine = (text, type = 'info', delay = 0) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = `boot-line status-${type}`;
            line.textContent = text;
            bootSequence.appendChild(line);
            const terminalBody = document.querySelector('.terminal-body');
            if (terminalBody) {
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
            resolve();
        }, delay);
    });
};

    const typeCommand = async (text, speed = 30) => {
        cmdLine.classList.remove('hidden');
        for (let i = 0; i < text.length; i++) {
            typedCmd.textContent += text[i];
            await sleep(speed + Math.random() * 20);
        }
    };

    const runBootSequence = async () => {
        // Initial system boot
        await addLine('[SYSTEM] Portfolio CLI v2.6.0', 'info', 200);
        await addLine('[SYSTEM] Initializing kernel...', 'info', 100);
        await sleep(300);
        
        await addLine('[OK]     Core modules loaded', 'ok', 50);
        await addLine('[OK]     Environment: production', 'ok', 80);
        await sleep(200);

        // Loading dependencies
        await addLine('', 'info', 0);
        await addLine('[FETCH]  Resolving dependencies...', 'info', 100);
        await sleep(400);
        
        const deps = [
            ['react', '18.2.0'],
            ['framer-motion', '10.16.0'],
            ['lucide-react', '0.263.0'],
            ['tailwindcss', '3.3.0']
        ];
        
        for (const [name, version] of deps) {
            await addLine(`[FETCH]  ${name}@${version}`, 'info', randomDelay(30, 80));
        }
        
        await sleep(300);
        await addLine('[OK]     Dependencies resolved (42 packages)', 'ok', 50);
        await sleep(200);

        // Installing portfolio modules
        await addLine('', 'info', 0);
        await addLine('[BUILD]  Installing portfolio modules...', 'accent', 100);
        await sleep(500);

        const modules = [
            { name: 'Navigation', path: 'src/components/Nav.jsx', status: 'OK' },
            { name: 'HeroSection', path: 'src/sections/Hero.jsx', status: 'OK' },
            { name: 'Work', path: 'src/sections/Work.jsx', status: 'OK' },
            { name: 'Certificates', path: 'src/sections/Certificates.jsx', status: 'OK' },
            { name: 'Experience', path: 'src/sections/Experience.jsx', status: 'OK' },
            { name: 'Education', path: 'src/sections/Education.jsx', status: 'OK' },
            { name: 'About', path: 'src/sections/About.jsx', status: 'OK' },
            { name: 'Contact', path: 'src/sections/Contact.jsx', status: 'OK' },
            { name: 'ThemeEngine', path: 'src/utils/Theme.js', status: 'OK' },
            { name: 'ModalSystem', path: 'src/components/Modal.jsx', status: 'OK' }
        ];

        for (const mod of modules) {
            const status = mod.status === 'OK' ? '[OK]' : '[WARN]';
            await addLine(
                `${status}     ${mod.name.padEnd(15)} → ${mod.path}`,
                mod.status.toLowerCase(),
                randomDelay(40, 120)
            );
        }

        await sleep(300);
        await addLine('[OK]     10 modules installed successfully', 'ok', 50);
        await sleep(200);

        // Optimizing
        await addLine('', 'info', 0);
        await addLine('[BUILD]  Optimizing bundle...', 'info', 100);
        await sleep(400);
        await addLine('[OK]     Tree-shaking complete', 'ok', 80);
        await addLine('[OK]     Minified: 142.6 kB → 89.2 kB', 'ok', 60);
        await sleep(200);

        // Final checks
        await addLine('', 'info', 0);
        await addLine('[VERIFY] Running pre-flight checks...', 'accent', 100);
        await sleep(300);
        await addLine('[OK]     Dark mode: ready', 'ok', 50);
        await addLine('[OK]     Animations: primed', 'ok', 50);
        await addLine('[OK]     Responsive: verified', 'ok', 50);
        await sleep(200);

        // Type command
        await addLine('', 'info', 0);
        await typeCommand('npm run start', 40);
        await sleep(400);
        cursor.classList.add('hidden');

        // Final message
        const finalMsg = document.createElement('div');
        finalMsg.className = 'final-message';
        finalMsg.innerHTML = `
            <div class="user-greet">> Access Granted. Hello, User.</div>
            <div class="portfolio-name">Adrian Villacorta — Solutions Engineer</div>
            <div style="color: #888; margin-top: 8px; font-size: 11px;">
                Cyber Security • Workload Automation • Endpoint Management
            </div>
        `;
        bootSequence.appendChild(finalMsg);
        
        await sleep(100);
        finalMsg.classList.add('show');
        const terminalBody = document.querySelector('.terminal-body');
        if (terminalBody) {
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        // Exit with blur fade
        await sleep(2800);
        overlay.classList.add('exit-blur');
        document.body.style.overflow = '';
        sessionStorage.setItem('seenWelcome', 'true');

        setTimeout(() => overlay.remove(), 1200);
    };

    runBootSequence();
});