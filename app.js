// dynamic text loader
const text = document.querySelector('.dynamic-text');

		const textLoader = ()=>{
			setTimeout(() => {
				text.textContent = "BRIGHTLY";
			}, 0);
			setTimeout(() => {
				text.textContent = "OCEAN";
			}, 4000);
			setTimeout(() => {
				text.textContent = "DUNSFORD";
			}, 8000);
		}

		textLoader();
		setInterval(textLoader, 12000);

//hamburger menu
		const menuBtn = document.querySelector('.menu');
		const hamburger = document.querySelector('.hamburger');
		const logo = document.querySelector('.Container');

		logo.addEventListener('click',()=>{
			menuBtn.classList.toggle('showmenu');
		});


