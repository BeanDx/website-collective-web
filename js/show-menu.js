let tabBtn = document.querySelector('.tab-link');
let menu = document.querySelector('.popup');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})