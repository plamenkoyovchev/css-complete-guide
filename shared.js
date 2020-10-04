const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButtons = document.querySelectorAll('.plan button');

backdrop.addEventListener('click', function () {
    this.style.display = 'none';
    modal.style.display = 'none';
});

selectPlanButtons.forEach(button => {
    button.addEventListener('click', function () {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
    });
});