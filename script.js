// Handle page transitions
document.querySelectorAll('.link-item, .back-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');

        // Add transition class to body
        document.body.classList.add('page-transition');

        // Navigate after animation
        setTimeout(() => {
            window.location.href = href;
        }, 400);
    });
});

// Remove transition class on page load
window.addEventListener('load', () => {
    document.body.classList.remove('page-transition');
});
