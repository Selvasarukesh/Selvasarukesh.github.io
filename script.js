/* =====================================================
   SELVASARUKESH — Portfolio JS
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---------- AOS init ---------- */
    if (window.AOS) {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80,
            easing: 'ease-out-cubic'
        });
    }

    /* ---------- Mobile nav toggle ---------- */
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.getElementById('navLinks');

    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
        const expanded = navToggle.classList.contains('open');
        navToggle.setAttribute('aria-expanded', expanded);
    });

    navLinks?.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle?.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!navLinks?.classList.contains('open')) return;
        if (e.target.closest('#navLinks') || e.target.closest('#navToggle')) return;
        navToggle?.classList.remove('open');
        navLinks.classList.remove('open');
    });

    /* ---------- Navbar scroll state ---------- */
    const navbar    = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    const sections = ['home', 'about', 'experience', 'portfolio', 'contact']
        .map(id => document.getElementById(id))
        .filter(Boolean);
    const links = document.querySelectorAll('.nav-link');

    function onScroll() {
        if (window.scrollY > 30) navbar?.classList.add('scrolled');
        else navbar?.classList.remove('scrolled');

        if (window.scrollY > 500) backToTop?.classList.add('show');
        else backToTop?.classList.remove('show');

        updateActiveSection();
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    function updateActiveSection() {
        const scrollPos = window.scrollY + 120;
        let current = sections[0]?.id;
        sections.forEach(sec => {
            if (sec.offsetTop <= scrollPos) current = sec.id;
        });
        links.forEach(link => {
            const target = link.getAttribute('href')?.replace('#', '');
            link.classList.toggle('active', target === current);
        });
    }

    /* =====================================================
       PROJECT MODAL
       ===================================================== */
    const projectData = {
        bloodsecure: {
            tag: 'HEALTHCARE PLATFORM',
            title: 'BloodSecure Management',
            subtitle: 'End-to-end blood bank & donor management system',
            tech: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'REST API', 'Git'],
            description: `A comprehensive blood bank management platform that streamlines donor registration, blood inventory tracking, cross-matching, and hospital request fulfillment — bringing digital reliability to a mission-critical healthcare workflow.`,
            highlights: [
                'Digital donor registry with eligibility tracking, donation history and consent management.',
                'Real-time blood inventory tracking across multiple blood groups and storage centers.',
                'Automated cross-match & request-fulfillment engine to serve hospital blood requests.',
                'Role-based dashboards for admin, blood bank staff, donors and requesting hospitals.',
                'Audit-trailed transactions ensuring full traceability from donor to recipient.'
            ],
            illustration: `
                <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="130" cy="180" rx="110" ry="10" fill="#0D2A6B" opacity="0.1"/>
                    <path d="M130 30 C 100 80, 90 120, 130 155 C 170 120, 160 80, 130 30 Z" fill="#E74C3C"/>
                    <rect x="120" y="90" width="20" height="6" fill="#fff"/>
                    <rect x="127" y="80" width="6" height="26" fill="#fff"/>
                    <rect x="30" y="120" width="50" height="60" rx="6" fill="#F39140"/>
                    <rect x="40" y="130" width="14" height="14" fill="#fff"/>
                    <rect x="56" y="130" width="14" height="14" fill="#fff"/>
                    <rect x="40" y="146" width="30" height="4" fill="#fff"/>
                    <rect x="40" y="154" width="30" height="4" fill="#fff"/>
                    <rect x="180" y="130" width="60" height="50" rx="6" fill="#0D2A6B"/>
                    <path d="M195 155 L205 165 L225 145" stroke="#B5E3B5" stroke-width="4" fill="none" stroke-linecap="round"/>
                </svg>`
        },
        payment: {
            tag: 'FINTECH — 50K+ TXNS / MONTH',
            title: 'Payment Gateway & Mandate Management',
            subtitle: 'Enterprise payment platform for Bajaj Allianz Life Insurance',
            tech: ['Angular', 'Spring Boot', 'Oracle', 'JavaScript', 'Docker', 'OpenShift', 'Git'],
            description: `Architected and maintained end-to-end payment workflows supporting mandate registration, transaction validation, and digital receipt generation — powering 50,000+ monthly transactions with PCI-compliant, audit-ready processing.`,
            highlights: [
                'Handles 50,000+ transactions per month with 99.9% uptime SLA.',
                'Cut average response time by 35% through backend pipeline optimization.',
                'Implemented mandate registration, transaction validation & digital receipts.',
                'PCI-compliant, secure & auditable flows with full exception handling and real-time status tracking.',
                'Led cloud migration on Red Hat OpenShift for improved performance and scalability.',
                'Recognized with CXO Achiever Award and Lead Collaboration Excellence Award.'
            ],
            illustration: `
                <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="130" cy="180" rx="110" ry="10" fill="#0D2A6B" opacity="0.1"/>
                    <rect x="90" y="30" width="80" height="140" rx="12" fill="#0D2A6B"/>
                    <rect x="98" y="42" width="64" height="100" fill="#fff" rx="4"/>
                    <rect x="104" y="60" width="52" height="30" rx="4" fill="#F39140"/>
                    <rect x="108" y="66" width="14" height="8" fill="#fff" opacity="0.8"/>
                    <rect x="108" y="78" width="30" height="4" fill="#fff" opacity="0.6"/>
                    <rect x="108" y="100" width="44" height="4" fill="#0D2A6B" opacity="0.2"/>
                    <rect x="108" y="110" width="30" height="4" fill="#0D2A6B" opacity="0.2"/>
                    <circle cx="40" cy="60" r="18" fill="#F39140" stroke="#c66f1c" stroke-width="2"/>
                    <text x="40" y="66" text-anchor="middle" font-size="18" font-weight="bold" fill="#fff">$</text>
                    <circle cx="220" cy="80" r="14" fill="#F39140" stroke="#c66f1c" stroke-width="2"/>
                    <text x="220" y="85" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">$</text>
                    <circle cx="212" cy="140" r="12" fill="#F39140" stroke="#c66f1c" stroke-width="2"/>
                    <text x="212" y="144" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">$</text>
                    <circle cx="46" cy="130" r="10" fill="#F39140" stroke="#c66f1c" stroke-width="2"/>
                    <text x="46" y="134" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">$</text>
                </svg>`
        },
        associate360: {
            tag: 'HR PLATFORM — SOLE DEVELOPER',
            title: 'Associate 360 — Employee Management System',
            subtitle: 'Full-featured HRMS adopted organization-wide',
            tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST API', 'Git'],
            description: `Sole developer for a full-featured Employee Management System covering onboarding, offboarding, attendance regularization, salary management, asset allocation and task monitoring — delivered end-to-end from requirements to deployment.`,
            highlights: [
                'Complete employee lifecycle: onboarding, attendance, salary, assets and offboarding.',
                'Attendance regularization workflows with manager approval chain.',
                'Asset allocation & tracking module with return workflows.',
                'Task monitoring & performance dashboards for managers.',
                'Adopted organization-wide to streamline HR workflows and eliminate manual paperwork.'
            ],
            illustration: `
                <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="130" cy="180" rx="110" ry="10" fill="#0D2A6B" opacity="0.1"/>
                    <circle cx="70" cy="80" r="20" fill="#0D2A6B"/>
                    <rect x="46" y="102" width="48" height="60" rx="8" fill="#F39140"/>
                    <circle cx="130" cy="70" r="24" fill="#0D2A6B"/>
                    <rect x="102" y="96" width="56" height="70" rx="8" fill="#0D2A6B"/>
                    <circle cx="190" cy="80" r="20" fill="#0D2A6B"/>
                    <rect x="166" y="102" width="48" height="60" rx="8" fill="#F39140"/>
                    <rect x="118" y="112" width="24" height="14" fill="#fff" rx="2"/>
                    <rect x="122" y="116" width="16" height="2" fill="#0D2A6B"/>
                    <rect x="122" y="120" width="12" height="2" fill="#0D2A6B"/>
                </svg>`
        },
        pennydrop: {
            tag: 'BANKING MICROSERVICE',
            title: 'PennyDrop — Bank Account Verification',
            subtitle: 'Secure account validation via micro-transaction',
            tech: ['Spring Boot', 'PostgreSQL', 'REST API', 'Microservices', 'Git'],
            description: `A secure Penny Drop microservice that verifies user bank accounts via micro-transaction initiation and confirmation — integrated with core banking REST APIs for accurate, low-latency account validation.`,
            highlights: [
                'Micro-transaction based account verification with core banking integration.',
                '100% account validation accuracy with minimal latency.',
                'Robust error handling and retry logic for resilient banking calls.',
                'Secure DB integration with encrypted credential storage.',
                'Deployed as an independent microservice consumed by multiple upstream applications.'
            ],
            illustration: `
                <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="130" cy="180" rx="110" ry="10" fill="#0D2A6B" opacity="0.1"/>
                    <polygon points="70,60 190,60 130,25" fill="#F39140"/>
                    <rect x="70" y="60" width="120" height="80" fill="#0D2A6B"/>
                    <rect x="82" y="76" width="10" height="60" fill="#fff"/>
                    <rect x="100" y="76" width="10" height="60" fill="#fff"/>
                    <rect x="125" y="76" width="10" height="60" fill="#fff"/>
                    <rect x="150" y="76" width="10" height="60" fill="#fff"/>
                    <rect x="168" y="76" width="10" height="60" fill="#fff"/>
                    <rect x="60" y="140" width="140" height="8" fill="#0D2A6B"/>
                    <circle cx="35" cy="70" r="14" fill="#F39140" stroke="#c66f1c" stroke-width="2"/>
                    <text x="35" y="75" text-anchor="middle" font-size="14" font-weight="bold" fill="#fff">₹</text>
                    <circle cx="228" cy="100" r="12" fill="#F39140" stroke="#c66f1c" stroke-width="2"/>
                    <text x="228" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">₹</text>
                    <circle cx="130" cy="106" r="16" fill="#B5E3B5"/>
                    <path d="M122 106 L128 112 L138 100" stroke="#0D2A6B" stroke-width="3.5" fill="none" stroke-linecap="round"/>
                </svg>`
        }
    };

    const modal        = document.getElementById('projectModal');
    const modalClose   = document.getElementById('modalClose');
    const modalTag     = document.getElementById('modalTag');
    const modalTitle   = document.getElementById('modalTitle');
    const modalSub     = document.getElementById('modalSubtitle');
    const modalTech    = document.getElementById('modalTech');
    const modalDesc    = document.getElementById('modalDescription');
    const modalHi      = document.getElementById('modalHighlights');
    const modalIllu    = document.getElementById('modalIllustration');
    const modalCta     = document.getElementById('modalCta');

    let lastFocusedEl = null;

    function openModal(key) {
        const data = projectData[key];
        if (!data || !modal) return;

        lastFocusedEl = document.activeElement;

        modalTag.textContent   = data.tag;
        modalTitle.textContent = data.title;
        modalSub.textContent   = data.subtitle;
        modalDesc.textContent  = data.description;
        modalIllu.innerHTML    = data.illustration;

        modalTech.innerHTML = data.tech
            .map(t => `<span class="modal-tech-chip">${t}</span>`).join('');

        modalHi.innerHTML = data.highlights
            .map(h => `<li>${h}</li>`).join('');

        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        setTimeout(() => modalClose?.focus(), 60);
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        lastFocusedEl?.focus?.();
    }

    document.querySelectorAll('.proj-card[data-project]').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.project));
    });

    modalClose?.addEventListener('click', closeModal);

    modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal();
    });

    modalCta?.addEventListener('click', () => closeModal());

    /* =====================================================
       CONTACT FORM
       ===================================================== */
    const form   = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');

    form?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name    = form.name.value.trim();
        const email   = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            showStatus('Please fill in all fields.', '#d33');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showStatus('Please enter a valid email address.', '#d33');
            return;
        }

        const submitBtn = form.querySelector('.form-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'SENDING...';

        try {
            // Web3Forms — get your free access key at https://web3forms.com
            // Enter your email there to receive your unique access key, then replace the value below.
            const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Portfolio message from ${name}`,
                    from_name: name,
                    email: email,
                    message: message
                })
            });
            const data = await res.json();

            if (data.success) {
                showStatus('Message sent! I\'ll get back to you soon.', 'var(--navy)');
                form.reset();
            } else {
                throw new Error(data.message || 'Submission failed');
            }
        } catch (err) {
            // Fallback: open mailto if Web3Forms key is not yet configured
            const subject = encodeURIComponent(`Portfolio message from ${name}`);
            const body    = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
            window.open(`mailto:selvasarukesh.k@gmail.com?subject=${subject}&body=${body}`);
            showStatus('Opening your email client as fallback...', '#888');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'SEND MESSAGE <i class="fa-solid fa-arrow-right"></i>';
        }
    });

    function showStatus(msg, color) {
        if (!status) return;
        status.textContent = msg;
        status.style.color = color;
        setTimeout(() => { status.textContent = ''; }, 5000);
    }

    onScroll();
});
