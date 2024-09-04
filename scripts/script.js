document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const closeButton = document.querySelector('#close-sidebar');
    const hamburgerIcon = document.querySelector('#hamburger-icon');
    
    hamburgerIcon.addEventListener('click', () => {
        sidebar.classList.add('open');
        document.body.classList.add('sidebar-open');
    });

    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    });
});
