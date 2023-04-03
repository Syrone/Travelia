// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// preloader
	const preloader = document.querySelector('[data-preloader]')

	window.addEventListener('load', () => {
		preloader.classList.add('remove')
	})

	// add event on multiple elements
	const addEventOnElements = function(elements, eventType, callback){
		for(let i = 0, len = elements.length; i < len; i++){
			elements[i].addEventListener(eventType, callback)
		}
	}

	//navbar toggler for mobile
	const navbar = document.querySelector('[data-navbar]'),
		navTogglers = document.querySelectorAll('[data-nav-toggler]'),
		navLink = document.querySelectorAll('[data-nav-link]'),
		overlay = document.querySelector('[data-overlay]')

	const toggleNav = function() {
		navbar.classList.toggle('active')
		overlay.classList.toggle('active')
		document.body.classList.toggle('nav-active')
	}
	
	addEventOnElements(navTogglers, 'click', toggleNav)

	const closeNavbar = function(){ 
		navbar.classList.remove('active')
		overlay.classList.remove('active')
		document.body.classList.remove('nav-active')
	}

	addEventOnElements(navLink, 'click', closeNavbar)

	// header
	const header = document.querySelector('[data-header]')

	window.addEventListener('scroll', function(){

		header.classList[window.scrollY > 100 ? 'add' : 'remove']('active')

	})

})
