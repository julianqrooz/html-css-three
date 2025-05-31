let nums = document.querySelectorAll(".stats .number");
let statssection = document.querySelector(".stats");
let started = false; // Function Started ? No
let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".the-progress span");
let countdowndate = new Date("Dec 31, 2025 23:59:59").getTime();

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

let counter = setInterval(() => {
  let datenow = new Date().getTime();
  let datediff = countdowndate - datenow;
  let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((datediff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (datediff < 0) {
    clearInterval(counter);
  }
}, 1000);

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 600) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= statssection.offsetTop - 600) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
