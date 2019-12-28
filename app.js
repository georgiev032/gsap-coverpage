const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const burger = document.querySelector('.burger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut}) // this is the img container and we want to start from 0% height to 80% height and with ease animation.
.fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut}) // when we make more than one animation we can write just .fromTo but we have to remove the ; from the one above. 1 and 1.2 is duration seconds.
.fromTo(slider, 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, ">= 1.2") // -100 move out from the screen and 0 to bringing back. ">= 1.2" and the animation will start sooner.
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-= 0.5")
.fromTo(burger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-= 0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-= 0.5");