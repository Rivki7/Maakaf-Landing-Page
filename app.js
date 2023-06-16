//from incrementing project
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / 200;

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

btnJoin.classList.add('btn-hidden');

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
typeWriter();

setTimeout(() => btnJoin.classList.remove('btn-hidden'), 5000);

//Toggle button on smaller screens
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
