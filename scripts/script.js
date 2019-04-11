window.onload = function () {
	let menu = document.querySelector('.mobile-menu'),
		nav = document.querySelector('.mobile-nav'),
		close = document.querySelector('.close-menu'),
		images = document.querySelectorAll('.carousel-logos img'),
		btn_prev = document.querySelector('.btn-prev'),
		btn_next = document.querySelector('.btn-next');

	menu.addEventListener('click', function(e) {
		e.preventDefault();
		nav.classList.toggle('show');
	});

	var i = 0;
	btn_prev.addEventListener('click', function(e){
		e.preventDefault();
		images[i].style.display = "none";
		i--;
		if (i < 0) {
			i = images.length - 1;
		}
		images[i].style.display = "block";
	}); 

	btn_next.addEventListener('click', function(e){
		e.preventDefault();
		images[i].style.display = "none";
		i++;
		if (i >= images.length) {
			i = 0;
		}
		images[i].style.display = "block";
	});

}