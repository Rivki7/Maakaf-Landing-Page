//from incrementing project
//Section 2 incrementing counters
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 250;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

//Typing effect
const title = document.querySelector('.title');
const btnJoin = document.querySelector('.btn-join');

let i = 0;
let txt = title.innerText;
title.innerText = ' ';
let speed = 100;

function typeWriter() {
  if (i < txt.length) {
    title.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter(title);

//Show the button at the top of the page after h1 typing effect is finished
setTimeout(() => btnJoin.classList.remove('btn-hidden'), 1000);

//Toggle humburger menu button on smaller screens
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//Slide effect

//Smooth scrolling when clicking navbar items
document.querySelector('.nav-links').addEventListener('click', function (e) {
  // console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href');
    // console.log(id);
    navLinks.classList.toggle('active');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//Smooth scroll 'Join Our Discord' button
const section3 = document.querySelector('#section--3');
btnJoin.addEventListener('click', function (e) {
  section3.scrollIntoView({ behavior: 'smooth' });
});
