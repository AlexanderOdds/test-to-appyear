document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    hamburgerIcon.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            sidebar.classList.remove('open');
            body.classList.remove('sidebar-open');
        }
    });
});