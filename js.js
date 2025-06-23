document.addEventListener('DOMContentLoaded', function() {
    // Cursor Effect
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    // Nav Links Hover Effect
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            cursor.style.transform = 'scale(3)';
            cursor.style.backgroundColor = 'rgba(0, 238, 255, 0.1)';
        });
        
        link.addEventListener('mouseout', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'var(--main-color)';
        });
    });
    
    // Button Hover Effect
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            cursor.style.transform = 'scale(3)';
            cursor.style.backgroundColor = 'rgba(0, 238, 255, 0.1)';
        });
        
        btn.addEventListener('mouseout', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'var(--main-color)';
        });
    });
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Animate the bars
        const bars = document.querySelectorAll('.menu-toggle .bar');
        if (menuToggle.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
        } else {
            bars.forEach(bar => {
                bar.style.transform = 'rotate(0) translate(0)';
                bar.style.opacity = '1';
            });
        }
    });
    
    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
            const bars = document.querySelectorAll('.menu-toggle .bar');
            bars.forEach(bar => {
                bar.style.transform = 'rotate(0) translate(0)';
                bar.style.opacity = '1';
            });
        });
    });
    
    // Typing Animation
    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'UI/UX Designer', 'Full Stack Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        loop: true
    });
    
    // Scroll Reveal Animation
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 200,
        reset: true
    });
    
    sr.reveal('.home-content, .heading', {origin: 'top'});
    sr.reveal('.home-img, .about-container, .skills-container, .map-container, .contact form', {origin: 'bottom'});
    sr.reveal('.home-content h1, .about-content', {origin: 'left'});
    sr.reveal('.home-content p, .about-content', {origin: 'right'});
    
    // Active Section Highlight
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
    
    // Form Submission
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const btn = form.querySelector('.btn');
        btn.textContent = 'Sending...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = 'Sent!';
            btn.style.backgroundColor = '#4BB543';
            form.reset();
            
            setTimeout(() => {
                btn.textContent = 'Submit';
                btn.style.backgroundColor = 'var(--main-color)';
                btn.disabled = false;
            }, 2000);
        }, 1500);
    });
    
    // Skill Progress Animation
    const skillBoxes = document.querySelectorAll('.skill-box');
    
    function animateSkills() {
        skillBoxes.forEach(box => {
            const progressBar = box.querySelector('.progress-bar');
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
        });
    }
    
    // Animate skills when they come into view
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, {threshold: 0.5});
    
    const skillsSection = document.querySelector('.skills');
    skillsObserver.observe(skillsSection);
    
    // 3D Cube Animation
    const cube = document.querySelector('.cube');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset cube position when mouse leaves the about section
    const aboutSection = document.querySelector('.about');
    
    aboutSection.addEventListener('mouseleave', () => {
        cube.style.transform = 'rotateY(0) rotateX(0)';
    });
});