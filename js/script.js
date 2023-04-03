const schedule = document.querySelector('.schedule');
const scheduleCancelButton = document.querySelector('.schedule__cancel-button');
const scheduleOnButton = document.querySelector('.menu__schedule');

const about = document.querySelector('.about');
const aboutCancelButton = document.querySelector('.about__cancel-button');
const aboutOnButton = document.querySelector('.menu__about');

const contact = document.querySelector('.contact');
const contactCancelButton = document.querySelector('.contact__cancel-button');
const contactOnButton = document.querySelector('.menu__contact');

const register = document.querySelector('.register');
const registerCancelButton = document.querySelector('.register__cancel-button');
const registerOnButton = document.querySelector('.menu__register');

const organizer = document.querySelector('.organizer');
const organizerCancelButton = document.querySelector('.organizer__cancel-button');
const organizerOnButton = document.querySelector('.menu__organizer');


const menuItems = document.querySelectorAll('.menu__item');
const menuList = document.querySelector('.menu__list');

let activeModal = false;

scheduleCancelButton.addEventListener('click', () => {
    schedule.style.display = 'none';
    activeModal = false;
});
aboutCancelButton.addEventListener('click', () => {
    about.style.display = 'none';
    activeModal = false;
});
contactCancelButton.addEventListener('click', () => {
    contact.style.display = 'none';
    activeModal = false;

});
registerCancelButton.addEventListener('click', () => {
    register.style.display = 'none';
    activeModal = false;
});
organizerCancelButton.addEventListener('click', () => {
    organizer.style.display = 'none';
    activeModal = false;
});


scheduleOnButton.addEventListener('click', () => {
    schedule.style.display = 'block';
    activeModal = true;
});
aboutOnButton.addEventListener('click', () => {
    about.style.display = 'block';
    activeModal = true;
})
contactOnButton.addEventListener('click', () => {
    contact.style.display = 'block';
    activeModal = true;
})
registerOnButton.addEventListener('click', () => {
    register.style.display = 'block';
    activeModal = true;
})
organizerOnButton.addEventListener('click', () => {
    organizer.style.display = 'block';
    activeModal = true;
})


const tl = gsap.timeline();
tl.to(
'.welcome__cover', {
        keyframes: {
            '20%': {y: 0},
            '30%': {y: "-20%", ease: "elastic.out(0.1, 0.06)",},
            '40%': {y: "-20%"},
            '50%': {y: "-40%", ease: "elastic.out(0.1, 0.06)",},
            '60%': {y: "-40%"},
            '70%': {y: "-60%", ease: "elastic.out(0.1, 0.06)",},
            '80%': {y: "-60%"},
            '90%': {y: "-75%", ease: "elastic.out(0.1, 0.06)", opacity: 1},
            '99.9999%': {opacity: 0},
            '100%': {display: "none"}
        },
        duration: 8,
    }
)

menuItems.forEach((item) => {
    gsap.set(item, {scale: 0});
});

gsap.to(menuList.children, {
    scale:1,
    stagger: 0.2,
    duration: 0.5,
    delay: 7,
    ease: 'back',
});
