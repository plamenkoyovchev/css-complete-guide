const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');
const noButton = document.querySelector('.modal__action--negative');

const closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
};

const showModal = () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
};

backdrop.addEventListener('click', closeModal);
noButton.addEventListener('click', closeModal);

selectPlanButtons.forEach(button => {
    button.addEventListener('click', showModal);
});