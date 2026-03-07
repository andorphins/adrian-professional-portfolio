/**
 * @module JS for Adrian Villacorta's portfolio website
 * @author Andorphins
 * @version 2.6.0
 */

// ============================================================================
// CONFIGURATION & DATA
// ============================================================================

/** @type {Object.<string, Certificate>} Certificate registry */
const CERTIFICATE_DATA = {
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

/** @type {string[]} Easter egg states for footer */
const FOOTER_STATES = ['"building"', '"compiling"', '"deploying"', '"debugging"', '"optimizing"', '"learning"'];

/** @type {Object} Boot sequence module configuration */
const BOOT_MODULES = [
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

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Creates a promise that resolves after specified milliseconds
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generates a random delay within a range
 * @param {number} min - Minimum milliseconds
 * @param {number} max - Maximum milliseconds
 * @returns {Promise<void>}
 */
const randomDelay = (min, max) => sleep(Math.random() * (max - min) + min);

/**
 * Throttles a function to run once per animation frame
 * @param {Function} callback - Function to throttle
 * @returns {Function}
 */
const throttleToFrame = (callback) => {
  let ticking = false;
  return (...args) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback(...args);
        ticking = false;
      });
      ticking = true;
    }
  };
};

// ============================================================================
// MODULE: ThemeManager
// ============================================================================

/**
 * Manages theme toggling between light and dark modes
 * @namespace ThemeManager
 */
const ThemeManager = {
  /** @type {NodeListOf<Element>} */
  toggles: document.querySelectorAll('.theme-toggle'),

  /** @type {HTMLElement} */
  root: document.documentElement,

  /**
   * Initializes theme toggle event listeners
   */
  init() {
    this.toggles.forEach(toggle => {
      toggle.addEventListener('click', () => this.toggle());
    });
  },

  /**
   * Toggles between light and dark themes
   */
  toggle() {
    const currentTheme = this.root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  },

  /**
   * Gets the current active theme
   * @returns {string}
   */
  getCurrentTheme() {
    return this.root.getAttribute('data-theme') || 'dark';
  }
};

// ============================================================================
// MODULE: MobileMenuManager
// ============================================================================

/**
 * Manages mobile navigation menu state and interactions
 * @namespace MobileMenuManager
 */
const MobileMenuManager = {
  /** @type {HTMLElement|null} */
  menuBtn: document.getElementById('menuBtn'),

  /** @type {HTMLElement|null} */
  mobileMenu: document.getElementById('mobileMenu'),

  /**
   * Initializes mobile menu functionality
   */
  init() {
    if (!this.menuBtn || !this.mobileMenu) return;

    this.menuBtn.addEventListener('click', () => this.toggle());
    this.initCloseOnLinkClick();
  },

  /**
   * Toggles mobile menu visibility
   */
  toggle() {
    const isActive = this.mobileMenu.classList.toggle('active');
    this.menuBtn.textContent = isActive ? 'Close' : 'Menu';
  },

  /**
   * Closes the mobile menu
   */
  close() {
    this.mobileMenu.classList.remove('active');
    this.menuBtn.textContent = 'Menu';
  },

  /**
   * Initializes auto-close behavior when menu links are clicked
   * @private
   */
  initCloseOnLinkClick() {
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => this.close());
    });
  }
};

// ============================================================================
// MODULE: ModalManager
// ============================================================================

/**
 * Manages certificate modal display with event delegation
 * @namespace ModalManager
 */
const ModalManager = {
  /** @type {HTMLElement|null} */
  modal: document.getElementById('certModal'),

  /** @type {HTMLElement|null} */
  closeBtn: document.getElementById('modalCloseBtn'),

  /** @type {HTMLElement|null} */
  verifyLink: document.getElementById('modalVerify'),

  /** @type {Object.<string, HTMLElement>} */
  elements: {},

  /**
   * DOM selectors for modal content elements
   * @private
   */
  SELECTORS: {
    org: '#modalOrg',
    level: '#modalLevel',
    title: '#modalTitle',
    date: '#modalDate',
    id: '#modalId',
    idContainer: '#modalIdContainer',
    expiry: '#modalExpiry',
    expiryContainer: '#modalExpiryContainer',
    overview: '#modalOverview',
    skills: '#modalSkills',
    skillsSection: '#modalSkillsSection',
    topics: '#modalTopics',
    topicsSection: '#modalTopicsSection'
  },

  /**
   * Initializes modal system with event delegation
   */
  init() {
    if (!this.modal) return;

    this.cacheElements();
    this.bindEvents();
    this.initEventDelegation();
  },

  /**
   * Caches DOM element references
   * @private
   */
  cacheElements() {
    Object.entries(this.SELECTORS).forEach(([key, selector]) => {
      this.elements[key] = document.querySelector(selector);
    });
  },

  /**
   * Binds modal control events
   * @private
   */
  bindEvents() {
    this.closeBtn?.addEventListener('click', () => this.close());
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) this.close();
    });
  },

  /**
   * Sets up event delegation for certificate cards
   * @private
   */
  initEventDelegation() {
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.cert-card[data-cert-key]');
      if (card) {
        const certKey = card.getAttribute('data-cert-key');
        if (CERTIFICATE_DATA[certKey]) {
          this.open(certKey);
        }
      }
    });
  },

  /**
   * Opens modal with certificate data
   * @param {string} certKey - Certificate identifier
   */
  open(certKey) {
    const cert = CERTIFICATE_DATA[certKey];
    if (!cert) return;

    this.populateContent(cert);
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  /**
   * Closes the modal
   */
  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  },

  /**
   * Checks if modal is currently open
   * @returns {boolean}
   */
  isOpen() {
    return this.modal?.classList.contains('active');
  },

  /**
   * Populates modal content with certificate data
   * @param {Certificate} cert - Certificate data object
   * @private
   */
  populateContent(cert) {
    const { org, level, title, date, id, expiry, overview, skills, topics, verifyUrl } = cert;
    const el = this.elements;

    el.org.textContent = org;
    el.level.textContent = level;
    el.level.className = `modal-level ${level}`;
    el.title.textContent = title;
    el.date.textContent = date;
    el.overview.textContent = overview;

    this.toggleConditionalElement(el.idContainer, el.id, id);
    this.toggleConditionalElement(el.expiryContainer, el.expiry, expiry);
    this.renderListSection(el.skillsSection, el.skills, skills, 'li');
    this.renderListSection(el.topicsSection, el.topics, topics, 'topic-item');

    if (this.verifyLink) this.verifyLink.href = verifyUrl;
  },

  /**
   * Toggles visibility of conditional elements
   * @param {HTMLElement} container - Container element
   * @param {HTMLElement} content - Content element
   * @param {*} value - Value to display
   * @private
   */
  toggleConditionalElement(container, content, value) {
    if (value) {
      content.textContent = value;
      container.style.display = 'flex';
    } else {
      container.style.display = 'none';
    }
  },

  /**
   * Renders a list section with items
   * @param {HTMLElement} section - Section container
   * @param {HTMLElement} list - List element
   * @param {string[]} items - Array of items
   * @param {string} itemClass - CSS class for items
   * @private
   */
  renderListSection(section, list, items, itemClass) {
    if (items?.length > 0) {
      const tag = itemClass === 'li' ? 'li' : 'div';
      list.innerHTML = items.map(item => `<${tag} class="${itemClass}">${item}</${tag}>`).join('');
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
};

// ============================================================================
// MODULE: ContactManager
// ============================================================================

/**
 * Manages contact reveal functionality for email and phone
 * @namespace ContactManager
 */
const ContactManager = {
  /** @type {Object.<string, {link: HTMLElement|null, display: HTMLElement|null}>} */
  contacts: {
    email: {
      link: document.getElementById('emailLink'),
      display: document.getElementById('emailDisplay')
    },
    phone: {
      link: document.getElementById('phoneLink'),
      display: document.getElementById('phoneDisplay')
    }
  },

  /**
   * Initializes contact reveal handlers
   */
  init() {
    this.initEmailReveal();
    this.initPhoneReveal();
  },

  /**
   * Initializes email reveal functionality
   * @private
   */
  initEmailReveal() {
    const { link, display } = this.contacts.email;
    if (!link || !display) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const email = this.constructEmail(link);
      this.handleReveal(display, email, `mailto:${email}`);
    });
  },

  /**
   * Initializes phone reveal functionality
   * @private
   */
  initPhoneReveal() {
    const { link, display } = this.contacts.phone;
    if (!link || !display) return;

    link.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = this.constructPhone(link);
      const dialNumber = phone.replace(/\s/g, '');
      this.handleReveal(display, phone, `tel:${dialNumber}`);
    });
  },

  /**
   * Constructs email address from data attributes
   * @param {HTMLElement} link - Email link element
   * @returns {string}
   * @private
   */
  constructEmail(link) {
    const user = link.getAttribute('data-user');
    const domain = link.getAttribute('data-domain');
    return `${user}@${domain}`;
  },

  /**
   * Constructs phone number from data attributes
   * @param {HTMLElement} link - Phone link element
   * @returns {string}
   * @private
   */
  constructPhone(link) {
    const country = link.getAttribute('data-country');
    const number = link.getAttribute('data-number');
    return `+${country} ${number}`;
  },

  /**
   * Handles reveal click - shows value or triggers action
   * @param {HTMLElement} display - Display element
   * @param {string} value - Value to reveal
   * @param {string} actionUrl - URL for action on second click
   * @private
   */
  handleReveal(display, value, actionUrl) {
    const REVEAL_TEXT = 'Click to reveal';

    if (display.textContent === REVEAL_TEXT) {
      display.textContent = value;
      display.style.fontFamily = 'var(--font-mono)';
    } else {
      window.location.href = actionUrl;
    }
  }
};

// ============================================================================
// MODULE: AnimationManager
// ============================================================================

/**
 * Manages scroll animations and visual effects
 * @namespace AnimationManager
 */
const AnimationManager = {
  /** @type {IntersectionObserver|null} */
  scrollObserver: null,

  /** @type {string[]} */
  REVEAL_SELECTORS: ['.project', '.about-grid', '.section-header', '.contact-grid', '.cert-card'],

  /**
   * Initializes all animation systems
   */
  init() {
    this.initScrollReveal();
    this.initParallax();
  },

  /**
   * Initializes scroll reveal animations via IntersectionObserver
   * @private
   */
  initScrollReveal() {
    this.scrollObserver = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      { root: null, rootMargin: '0px', threshold: 0.1 }
    );

    this.REVEAL_SELECTORS.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add('reveal');
        this.scrollObserver.observe(el);
      });
    });
  },

  /**
   * Handles intersection observer callbacks
   * @param {IntersectionObserverEntry[]} entries
   * @private
   */
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },

  /**
   * Initializes parallax effect on hero section
   * @private
   */
  initParallax() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    const handleScroll = throttleToFrame(() => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroTitle.style.transform = `translateY(${scrolled * 0.05}px)`;
      }
    });

    window.addEventListener('scroll', handleScroll);
  }
};

// ============================================================================
// MODULE: SmoothScrollManager
// ============================================================================

/**
 * Manages smooth scrolling with offset for fixed navigation
 * @namespace SmoothScrollManager
 */
const SmoothScrollManager = {
  /**
   * Initializes smooth scroll handlers
   */
  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
    });
  },

  /**
   * Handles anchor click with smooth scroll
   * @param {Event} e - Click event
   * @param {HTMLElement} anchor - Clicked anchor element
   * @private
   */
  handleClick(e, anchor) {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const offset = this.calculateOffset();
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },

  /**
   * Calculates scroll offset for fixed nav
   * @returns {number}
   * @private
   */
  calculateOffset() {
    const nav = document.querySelector('.nav');
    const navHeight = nav?.offsetHeight || 0;
    return navHeight + 20;
  }
};

// ============================================================================
// MODULE: FooterEasterEgg
// ============================================================================

/**
 * Manages footer easter egg interaction
 * @namespace FooterEasterEgg
 */
const FooterEasterEgg = {
  /** @type {HTMLElement|null} */
  footerCode: document.getElementById('footerCode'),

  /** @type {number} */
  stateIndex: 0,

  /** @type {string} */
  ACCENT_COLOR: 'var(--accent)',

  /** @type {number} */
  FEEDBACK_DURATION: 200,

  /**
   * Initializes footer easter egg
   */
  init() {
    if (!this.footerCode) return;

    this.footerCode.addEventListener('click', () => this.cycleState());
  },

  /**
   * Cycles through footer states
   * @private
   */
  cycleState() {
    this.stateIndex = (this.stateIndex + 1) % FOOTER_STATES.length;
    this.footerCode.textContent = `const andorphins = ${FOOTER_STATES[this.stateIndex]};`;
    this.triggerVisualFeedback();
  },

  /**
   * Triggers visual feedback animation
   * @private
   */
  triggerVisualFeedback() {
    const originalColor = this.footerCode.style.color;
    this.footerCode.style.color = this.ACCENT_COLOR;

    setTimeout(() => {
      this.footerCode.style.color = originalColor;
    }, this.FEEDBACK_DURATION);
  }
};

// ============================================================================
// MODULE: TerminalBootManager
// ============================================================================

/**
 * Manages terminal boot sequence animation
 * @namespace TerminalBootManager
 */
const TerminalBootManager = {
  /** @type {HTMLElement|null} */
  overlay: document.getElementById('terminalOverlay'),

  /** @type {HTMLElement|null} */
  bootSequence: document.getElementById('bootSequence'),

  /** @type {HTMLElement|null} */
  cmdLine: document.getElementById('cmdLine'),

  /** @type {HTMLElement|null} */
  typedCmd: document.getElementById('typedCmd'),

  /** @type {HTMLElement|null} */
  cursor: document.getElementById('cursor'),

  /** @type {boolean} */
  isSkipping: false,

  /** @type {string} */
  STORAGE_KEY: 'seenWelcome',

  /**
   * Initializes and runs boot sequence if needed
   */
  init() {
    if (!this.shouldRun()) {
      this.cleanup();
      return;
    }

    this.setupSkipHandlers();
    this.runSequence();
  },

  /**
   * Checks if boot sequence should run
   * @returns {boolean}
   * @private
   */
  shouldRun() {
    return this.overlay && !sessionStorage.getItem(this.STORAGE_KEY);
  },

  /**
   * Sets up skip handlers for click and escape
   * @private
   */
  setupSkipHandlers() {
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay || e.target.closest('.terminal-window')) {
        this.skip();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.skip();
    });
  },

  /**
   * Skips the boot sequence
   */
  skip() {
    if (this.isSkipping) return;
    this.isSkipping = true;

    this.overlay.classList.add('exit-blur');
    document.body.style.overflow = '';
    sessionStorage.setItem(this.STORAGE_KEY, 'true');

    setTimeout(() => this.overlay.remove(), 1200);
  },

  /**
   * Cleans up overlay when not needed
   * @private
   */
  cleanup() {
    this.overlay?.remove();
    document.body.style.overflow = '';
  },

  /**
   * Adds a line to the boot sequence
   * @param {string} text - Line text
   * @param {string} type - Line type (info, ok, accent, warn)
   * @param {number} delay - Delay before adding
   * @returns {Promise<void>}
   * @private
   */
  async addLine(text, type = 'info', delay = 0) {
    return new Promise(resolve => {
      if (this.isSkipping) {
        resolve();
        return;
      }

      setTimeout(() => {
        if (this.isSkipping) {
          resolve();
          return;
        }

        const line = document.createElement('div');
        line.className = `boot-line status-${type}`;
        line.textContent = text;
        this.bootSequence.appendChild(line);
        this.scrollToBottom();
        resolve();
      }, delay);
    });
  },

  /**
   * Types a command character by character
   * @param {string} text - Command text
   * @param {number} speed - Typing speed in ms
   * @returns {Promise<void>}
   * @private
   */
  async typeCommand(text, speed = 30) {
    if (this.isSkipping) return;

    this.cmdLine.classList.remove('hidden');

    for (let i = 0; i < text.length; i++) {
      if (this.isSkipping) return;
      this.typedCmd.textContent += text[i];
      await sleep(speed + Math.random() * 20);
    }
  },

  /**
   * Scrolls terminal to bottom
   * @private
   */
  scrollToBottom() {
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  },

  /**
   * Displays final success message
   * @private
   */
  displayFinalMessage() {
    if (this.isSkipping) return;

    const finalMsg = document.createElement('div');
    finalMsg.className = 'final-message';
    finalMsg.innerHTML = `
      <div class="user-greet">> Access Granted. Hello, User.</div>
      <div class="portfolio-name">Adrian Villacorta — Solutions Engineer</div>
      <div style="color: #888; margin-top: 8px; font-size: 11px;">
        Cyber Security • Workload Automation • Endpoint Management
      </div>
    `;

    this.bootSequence.appendChild(finalMsg);
    this.scrollToBottom();

    setTimeout(() => finalMsg.classList.add('show'), 100);
  },

  /**
   * Runs the complete boot sequence
   * @private
   */
  async runSequence() {
    document.body.style.overflow = 'hidden';

    await this.runSystemBoot();
    await this.runDependencyFetch();
    await this.runModuleInstallation();
    await this.runOptimization();
    await this.runPreflightChecks();
    await this.runFinalCommand();

    await sleep(2800);
    if (!this.isSkipping) this.skip();
  },

  /**
   * System boot phase
   * @private
   */
  async runSystemBoot() {
    await this.addLine('[SYSTEM] Portfolio CLI v2.6.0', 'info', 200);
    await this.addLine('[SYSTEM] Initializing kernel...', 'info', 100);
    await sleep(300);
    await this.addLine('[OK]     Core modules loaded', 'ok', 50);
    await this.addLine('[OK]     Environment: production', 'ok', 80);
    await sleep(200);
  },

  /**
   * Dependency fetch phase
   * @private
   */
  async runDependencyFetch() {
    const deps = [
      ['react', '18.2.0'],
      ['framer-motion', '10.16.0'],
      ['lucide-react', '0.263.0'],
      ['tailwindcss', '3.3.0']
    ];

    await this.addLine('', 'info', 0);
    await this.addLine('[FETCH]  Resolving dependencies...', 'info', 100);
    await sleep(400);

    for (const [name, version] of deps) {
      await this.addLine(`[FETCH]  ${name}@${version}`, 'info', randomDelay(30, 80));
    }

    await sleep(300);
    await this.addLine('[OK]     Dependencies resolved (42 packages)', 'ok', 50);
    await sleep(200);
  },

  /**
   * Module installation phase
   * @private
   */
  async runModuleInstallation() {
    await this.addLine('', 'info', 0);
    await this.addLine('[BUILD]  Installing portfolio modules...', 'accent', 100);
    await sleep(500);

    for (const mod of BOOT_MODULES) {
      const status = mod.status === 'OK' ? '[OK]' : '[WARN]';
      const statusClass = mod.status.toLowerCase();
      const paddedName = mod.name.padEnd(15);
      await this.addLine(
        `${status}     ${paddedName} → ${mod.path}`,
        statusClass,
        randomDelay(40, 120)
      );
    }

    await sleep(300);
    await this.addLine('[OK]     10 modules installed successfully', 'ok', 50);
    await sleep(200);
  },

  /**
   * Optimization phase
   * @private
   */
  async runOptimization() {
    await this.addLine('', 'info', 0);
    await this.addLine('[BUILD]  Optimizing bundle...', 'info', 100);
    await sleep(400);
    await this.addLine('[OK]     Tree-shaking complete', 'ok', 80);
    await this.addLine('[OK]     Minified: 142.6 kB → 89.2 kB', 'ok', 60);
    await sleep(200);
  },

  /**
   * Pre-flight checks phase
   * @private
   */
  async runPreflightChecks() {
    await this.addLine('', 'info', 0);
    await this.addLine('[VERIFY] Running pre-flight checks...', 'accent', 100);
    await sleep(300);
    await this.addLine('[OK]     Dark mode: ready', 'ok', 50);
    await this.addLine('[OK]     Animations: primed', 'ok', 50);
    await this.addLine('[OK]     Responsive: verified', 'ok', 50);
    await sleep(200);
  },

  /**
   * Final command and message phase
   * @private
   */
  async runFinalCommand() {
    await this.addLine('', 'info', 0);
    await this.typeCommand('npm run start', 40);
    await sleep(400);

    if (this.cursor) this.cursor.classList.add('hidden');
    this.displayFinalMessage();
  }
};

// ============================================================================
// APPLICATION INITIALIZATION
// ============================================================================

/**
 * Main application initializer
 * Bootstraps all modules in dependency order
 */
const App = {
  /**
   * Module registry - order matters for initialization
   * @private
   */
  modules: [
    ThemeManager,
    MobileMenuManager,
    ModalManager,
    ContactManager,
    AnimationManager,
    SmoothScrollManager,
    FooterEasterEgg
  ],

  /**
   * Initializes the application
   */
  init() {
    this.modules.forEach(module => {
      if (typeof module.init === 'function') {
        module.init();
      }
    });

    TerminalBootManager.init();
  }
};

// ============================================================================
// BOOTSTRAP
// ============================================================================

document.addEventListener('DOMContentLoaded', () => App.init());

// ============================================================================
// TYPE DEFINITIONS (JSDoc for IDE support)
// ============================================================================

/**
 * @typedef {Object} Certificate
 * @property {string} org - Organization name
 * @property {string} level - Certification level
 * @property {string} title - Certificate title
 * @property {string} date - Issue date
 * @property {string|null} expiry - Expiry date
 * @property {string|null} id - Certificate ID
 * @property {string} overview - Description
 * @property {string[]} skills - Skill list
 * @property {string[]} topics - Topic list
 * @property {string} verifyUrl - Verification URL
 */

/**
 * @typedef {Object} BootModule
 * @property {string} name - Module name
 * @property {string} path - Module path
 * @property {string} status - Module status
 */
