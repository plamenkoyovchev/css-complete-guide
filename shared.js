const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noButton = document.querySelector('.modal__action--negative');
const hamburgerButton = document.querySelector('.toggle-button');
const sideNav = document.querySelector('.mobile-nav');

const attachEventHandlers = () => {
    backdrop.addEventListener('click', function () {
        closeModal();
        hideSideNavigation();
    });
    noButton.addEventListener('click', closeModal);
    selectPlanButtons.forEach(button => {
        button.addEventListener('click', showModal);
    });
    hamburgerButton.addEventListener('click', showSidebarNavigation);
};

const showSidebarNavigation = () => {
    sideNav.style.display = 'block';
    backdrop.style.display = 'block';
};

const hideSideNavigation = () => {
    sideNav.style.display = 'none';
};

const closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
};

const showModal = () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
};

attachEventHandlers();