const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 1;
let translateX = 0;

// Clone the first and last slides for smooth transition
slides.insertBefore(slide[slide.length - 1].cloneNode(true), slide[0]);
slides.appendChild(slide[1].cloneNode(true));

// Set the initial position
slides.style.transform = `translateX(${-100}%)`;

// Event listeners for navigation arrows
next.addEventListener('click', () => {
    if (index >= slide.length + 1) {
        index = 1;
        translateX = 0;
        slides.style.transition = 'none';
        slides.style.transform = `translateX(${translateX}%)`;
    }
    setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease-in-out';
        index++;
        translateX -= 100;
        slides.style.transform = `translateX(${translateX}%)`;
    }, 0);
});

prev.addEventListener('click', () => {
    if (index <= 0) {
        index = slide.length;
        translateX = -100 * slide.length;
        slides.style.transition = 'none';
        slides.style.transform = `translateX(${translateX}%)`;
    }
    setTimeout(() => {
        slides.style.transition = 'transform 0.5s ease-in-out';
        index--;
        translateX += 100;
        slides.style.transform = `translateX(${translateX}%)`;
    }, 0);
});

// Automatic slide every 3 seconds (adjust as needed)
setInterval(() => {
    next.click();
}, 3000);