const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', e => {
	navToggle.classList.toggle('close');
	navList.classList.toggle('open');
});
