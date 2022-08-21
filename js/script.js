const btn = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mobile-menu');
const counters = document.querySelectorAll('.counter');

let scrollStarted = false

document.addEventListener('scroll', scrollPage);

function scrollPage() {
  const scrollPosition = window.scrollY;

  if(scrollPosition > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true
  } else if(scrollPosition< 100 && scrollStarted){
    reset()
    scrollStarted = false
  }
}

btn.onclick = function () {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  menu.classList.toggle('show-menu');
  document.body.classList.toggle('stop-scrolling');
};

overlay.onclick = function () {
  btn.classList.remove('open');
  overlay.classList.remove('overlay-show');
  menu.classList.remove('show-menu');
  document.body.classList.remove('stop-scrolling');
};

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      const target = Number(counter.getAttribute('data-target'));
      const c = +counter.innerText;

      const increment = target / 100;

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach(counter => {
    counter.innerHTML = 0
  })
}
