document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const closeButton = document.querySelector('#close-sidebar');
    const hamburgerIcon = document.querySelector('#hamburger-icon');
    const mainContainer = document.querySelector('.main-container');
    
    const openSidebar = () => {
        sidebar.classList.add('open');
        document.body.classList.add('sidebar-open');
    };
    
    const closeSidebar = () => {
        sidebar.classList.remove('open');
        document.body.classList.remove('sidebar-open');
    };
    
    hamburgerIcon.addEventListener('click', () => {
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    closeButton.addEventListener('click', () => {
        closeSidebar();
    });

    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
            closeSidebar();
        }
    });

    sidebar.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
