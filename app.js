let modeToggle = document.querySelectorAll(".mode");
let showYear = document.getElementById("year");
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

window.onload = () => {
  let date = new Date();
  let year = date.getFullYear();
  showYear.textContent = year;
};

modeToggle.forEach((e) => {
  e.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});
