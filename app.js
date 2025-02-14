let modeToggle = document.querySelectorAll(".mode");
let showYear = document.getElementById("year");
let removePopup = document.querySelectorAll(".hide-popup");
let popups = document.querySelectorAll(".popup");

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

function showPopup(popupName) {
  popupName.classList.toggle("none");
}

// Button and Popups name
let aboutPopupButton = document.getElementById("popup-about");
let aboutPopup = document.getElementById("about-popup");
aboutPopupButton.addEventListener("click", () => {
  showPopup(aboutPopup);
});

let portfolioPopupButton = document.getElementById("popup-portfolio");
let portfolioPopup = document.getElementById("portfolio-popup");
portfolioPopupButton.addEventListener("click", () => {
  showPopup(portfolioPopup);
});

let skillsPopupButton = document.getElementById("popup-skills");
let skillsPopup = document.getElementById("skills-popup");
skillsPopupButton.addEventListener("click", () => {
  showPopup(skillsPopup);
});

let contactPopupButton = document.getElementById("popup-contact");
let contactPopup = document.getElementById("contact-popup");
contactPopupButton.addEventListener("click", () => {
  showPopup(contactPopup);
});

removePopup.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("e shock u");

    popups.forEach((e) => {
      e.classList.add("none");
    });
  });
});
