document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Dark mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Set initial theme
    htmlElement.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'light' ? '🌙' : '☀️';

    themeToggle.addEventListener('click', () => {
        const newTheme = htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
});