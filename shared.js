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

    if (noButton) {
        noButton.addEventListener('click', closeModal);
    }

    selectPlanButtons.forEach(button => {
        button.addEventListener('click', showModal);
    });
    hamburgerButton.addEventListener('click', showSidebarNavigation);
};

const showSidebarNavigation = () => {
    sideNav.classList.add('open');
    backdrop.classList.add('open');
};

const hideSideNavigation = () => {
    sideNav.classList.remove('open');
};

const showModal = () => {
    backdrop.classList.add('open');
    modal.classList.add('open');
};

const closeModal = () => {
    backdrop.classList.remove('open');

    if (modal) {
        modal.classList.remove('open');
    }
};

attachEventHandlers();