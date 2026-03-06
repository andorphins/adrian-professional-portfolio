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

// iOS Hello Welcome Animation with Lottie
document.addEventListener('DOMContentLoaded', () => {
    const welcomeOverlay = document.getElementById('welcomeOverlay');
    const lottieContainer = document.getElementById('lottieContainer');
    
    // Check if user has already seen the animation this session
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
    
    if (!hasSeenWelcome && welcomeOverlay && lottieContainer) {
        // Prevent scrolling during animation
        document.body.style.overflow = 'hidden';
        
        // Load Lottie animation
        const animation = lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: {"v":"5.5.7","meta":{"g":"LottieFiles AE 0.1.21","a":"","k":"","d":"","tc":"#FFFFFF"},"fr":120,"ip":0,"op":720,"w":500,"h":500,"nm":"hello","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"katman 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250.5,252.4,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[108.654,108.654,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.596,"y":1},"o":{"x":0.281,"y":0.613},"t":300,"s":[{"i":[[0,0],[-4.256,36.426],[2.853,-21.124],[0,0],[-18.128,-1.787],[-22.979,-0.255],[-0.766,11.745],[5.66,-16.852],[-20.044,4.321],[-1.453,15.25],[7.149,-14.297],[-24.203,-4.498],[-2.809,17.873],[8.422,-15.279],[-32.094,2.751],[-25.982,2.314],[0.854,-11.109],[10.851,1.532],[-2.587,8.901],[-6.236,0.17],[-7.915,0.128],[0,0]],"o":[[0,0],[2.427,-20.781],[-2.331,17.258],[0,0],[19.915,2.33],[20.427,0.227],[0.883,-13.542],[-5.204,15.495],[30.881,-6.659],[1.531,-16.085],[-6.678,13.357],[28.851,5.361],[2.716,-17.287],[-9.068,16.45],[26.809,-2.298],[11.664,-1.038],[-0.894,11.617],[-9.911,-1.399],[3.192,-10.978],[8.868,-0.24],[7.03,-0.113],[0,0]],"v":[[-145.66,43.747],[-81.851,-26.162],[-101.426,-23.013],[-109.596,40.561],[-85.851,1.753],[-69,40.305],[-26.873,10.943],[-50.022,11.966],[-23.54,40.581],[23.936,-26.077],[6.574,-29.397],[12.958,41.583],[67.086,-23.779],[50.234,-30.673],[59.937,41.326],[102.898,-0.05],[118.532,21.029],[95.809,40.943],[83.425,17.072],[102.898,-0.05],[124.149,5.199],[138.27,-2.922]],"c":false}]},{"t":373,"s":[{"i":[[0,0],[-4.256,36.426],[2.853,-21.124],[0,0],[-18.128,-1.787],[-22.979,-0.255],[-0.766,11.745],[5.66,-16.852],[-20.044,4.321],[-1.453,15.25],[7.149,-14.297],[-24.203,-4.498],[-2.809,17.873],[8.422,-15.279],[-32.094,2.751],[-25.982,2.314],[0.854,-11.109],[10.851,1.532],[-2.587,8.901],[-6.236,0.17],[-7.915,0.128],[0,0]],"o":[[0,0],[2.427,-20.781],[-2.331,17.258],[0,0],[19.915,2.33],[20.427,0.227],[0.883,-13.542],[-5.204,15.495],[30.881,-6.659],[1.531,-16.085],[-6.678,13.357],[28.851,5.361],[2.716,-17.287],[-9.068,16.45],[26.809,-2.298],[11.664,-1.038],[-0.894,11.617],[-9.911,-1.399],[3.192,-10.978],[8.868,-0.24],[7.03,-0.113],[0,0]],"v":[[-145.66,43.747],[-81.851,-26.162],[-101.426,-23.013],[-109.596,40.561],[-85.851,1.753],[-68.999,40.305],[-26.873,10.943],[-50.022,11.966],[-23.54,40.581],[23.936,-26.077],[6.574,-29.397],[12.958,41.583],[67.086,-23.779],[50.234,-30.673],[59.937,41.326],[102.898,-0.05],[118.532,21.029],[95.809,40.943],[83.425,17.072],[102.898,-0.05],[124.149,5.199],[136.66,-1.311]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0],"y":[1]},"o":{"x":[0.053],"y":[0]},"t":25,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":300,"s":[1]},{"i":{"x":[0.729],"y":[1]},"o":{"x":[0.477],"y":[0]},"t":499,"s":[1]},{"t":690,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.665],"y":[1]},"o":{"x":[0.302],"y":[0.14]},"t":25,"s":[0]},{"t":300,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false},{"ty":"gs","o":{"a":0,"k":100,"ix":9},"w":{"a":1,"k":[{"i":{"x":[0.788],"y":[1]},"o":{"x":[0.681],"y":[0]},"t":25,"s":[9]},{"i":{"x":[0.118],"y":[1]},"o":{"x":[0.059],"y":[0]},"t":73,"s":[10]},{"t":300,"s":[9]}],"ix":10},"g":{"p":17,"k":{"a":0,"k":[0,0,0,0,0.055,0,0,0,0.11,0,0,0,0.171,0,0,0,0.233,0,0,0,0.299,0,0,0,0.365,0,0,0,0.422,0,0,0,0.48,0,0,0,0.543,0,0,0,0.605,0,0,0,0.671,0,0,0,0.738,0,0,0,0.806,0,0,0,0.875,0,0,0,0.938,0,0,0,1,0,0,0],"ix":8}},"s":{"a":0,"k":[-135,19],"ix":4},"e":{"a":0,"k":[134.5,-3],"ix":5},"t":1,"lc":2,"lj":2,"bm":0,"nm":"Gradient Stroke 1","mn":"ADBE Vector Graphic - G-Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[252,245.918],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":732,"st":0,"bm":0}],"markers":[]}
        });

        // Handle animation complete
        animation.addEventListener('complete', () => {
            // Wait a moment after animation completes, then fade out
            setTimeout(() => {
                welcomeOverlay.classList.add('fade-out');
                document.body.style.overflow = '';
                sessionStorage.setItem('hasSeenWelcome', 'true');
                
                // Remove from DOM after transition
                setTimeout(() => {
                    welcomeOverlay.remove();
                    animation.destroy();
                }, 800);
            }, 500); // Half second pause after animation completes
        });

        // Fallback: if animation takes too long (6 seconds), force fade out
        setTimeout(() => {
            if (!welcomeOverlay.classList.contains('fade-out')) {
                welcomeOverlay.classList.add('fade-out');
                document.body.style.overflow = '';
                sessionStorage.setItem('hasSeenWelcome', 'true');
                setTimeout(() => {
                    welcomeOverlay.remove();
                    animation.destroy();
                }, 800);
            }
        }, 6000);
        
    } else if (welcomeOverlay) {
        // Skip animation if already seen
        welcomeOverlay.remove();
    }
});