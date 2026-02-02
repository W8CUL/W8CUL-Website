/**
 * W8CUL Website Enhancement Scripts
 * Site-wide JavaScript utilities and interactive features
 */

(function() {
    'use strict';

    /**
     * Calculate and display the next meeting date
     * Meetings are every Tuesday at 7:00 PM
     */
    function initNextMeetingCalculator() {
        const nextMeetingEl = document.getElementById('next-meeting-date');
        if (!nextMeetingEl) return;

        function getNextTuesday() {
            const now = new Date();
            const dayOfWeek = now.getDay(); // 0 = Sunday, 2 = Tuesday
            let daysUntilTuesday = (2 - dayOfWeek + 7) % 7;

            // If today is Tuesday but past 7 PM, get next Tuesday
            if (daysUntilTuesday === 0) {
                const currentHour = now.getHours();
                if (currentHour >= 19) {
                    daysUntilTuesday = 7;
                }
            }

            const nextTuesday = new Date(now);
            nextTuesday.setDate(now.getDate() + daysUntilTuesday);
            return nextTuesday;
        }

        const nextTuesday = getNextTuesday();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        nextMeetingEl.textContent = nextTuesday.toLocaleDateString('en-US', options) + ' at 7:00 PM';
    }

    /**
     * Animated counter for statistics
     * Elements should have data-target attribute with final number
     */
    function initAnimatedCounters() {
        const counters = document.querySelectorAll('.stat-counter');
        if (counters.length === 0) return;

        const animateCounter = (counter) => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        };

        // Use Intersection Observer for scroll-triggered animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    /**
     * Event type filtering for events page
     */
    function initEventFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const eventCards = document.querySelectorAll('#upcoming-events .event-card');

        if (filterButtons.length === 0 || eventCards.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter events
                eventCards.forEach(card => {
                    const cardType = card.dataset.eventType;
                    const container = card.closest('.col-md-6, .col-lg-4');
                    if (container) {
                        if (filter === 'all' || cardType === filter) {
                            container.style.display = '';
                        } else {
                            container.style.display = 'none';
                        }
                    }
                });
            });
        });
    }

    /**
     * Alumni decade filtering
     */
    function initAlumniFilters() {
        const filterButtons = document.querySelectorAll('.decade-filter-btn');
        const alumniItems = document.querySelectorAll('.alumni-item');

        if (filterButtons.length === 0 || alumniItems.length === 0) return;

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const decade = this.dataset.decade;

                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter alumni
                alumniItems.forEach(item => {
                    const itemDecade = item.dataset.decade;
                    if (decade === 'all' || itemDecade === decade) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    /**
     * Copy to clipboard functionality
     */
    function initCopyToClipboard() {
        const copyButtons = document.querySelectorAll('.copy-btn');
        if (copyButtons.length === 0) return;

        copyButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const text = this.dataset.copy;

                navigator.clipboard.writeText(text).then(() => {
                    // Store original content
                    const originalHtml = this.innerHTML;

                    // Show success feedback
                    this.innerHTML = '<span class="fa-solid fa-check" aria-hidden="true"></span>';
                    this.classList.add('btn-success');
                    this.classList.remove('btn-outline-wvu-blue');

                    // Restore after 1.5 seconds
                    setTimeout(() => {
                        this.innerHTML = originalHtml;
                        this.classList.remove('btn-success');
                        this.classList.add('btn-outline-wvu-blue');
                    }, 1500);
                }).catch(err => {
                    console.error('Copy failed:', err);
                });
            });
        });
    }

    /**
     * Resource category filtering
     */
    function initResourceFilters() {
        const categoryButtons = document.querySelectorAll('.resource-filter-btn');
        const resourceItems = document.querySelectorAll('.resource-item');

        if (categoryButtons.length === 0 || resourceItems.length === 0) return;

        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;

                // Update active button
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Filter resources
                resourceItems.forEach(item => {
                    const itemCategory = item.dataset.category;
                    if (category === 'all' || itemCategory === category) {
                        item.style.display = '';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    /**
     * Smooth scroll for anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    /**
     * Initialize all enhancements on DOM ready
     */
    function init() {
        initNextMeetingCalculator();
        initAnimatedCounters();
        initEventFilters();
        initAlumniFilters();
        initCopyToClipboard();
        initResourceFilters();
        initSmoothScroll();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
