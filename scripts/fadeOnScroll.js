/*https://www.youtube.com/watch?v=huVJW23JHKQ*/
const faders = document.querySelectorAll('.fade-scroll');
const sliders = document.querySelectorAll('.slide-in');
const appearOptions = {
	threshhold: 1,
	rootMargin: "0px 0px -100px 0px"
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {

	entries.forEach(entry => {
		if (!entry.isIntersecting) {
			return
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		}
	})
}, 
appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
	appearOnScroll.observe(slider);
});