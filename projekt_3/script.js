const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      container.classList.add("scrolled");
    } else {
      container.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  const body = document.body;

  darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
  });
});

const formular = document.querySelector("form");
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const notificationName = document.querySelector(".notificationName");
const notificationEmail = document.querySelector(".notificationEmail");
const submit = document.querySelector(".submit");
const notificationSubmit = document.querySelector(".notificationSubmit");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const message = document.getElementById("message");

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  notificationName.style.display = fullName.value === "" ? "block" : "none";
  notificationEmail.style.display = email.value === "" ? "block" : "none";
  formular.reset();
});

submit.addEventListener("click", () => {
  if (((notificationName && notificationEmail).style.display = "block")) {
    notificationSubmit.style.display = "block";
  } else {
    notificationSubmit.style.display = "none";
  }
  {
    if (passwordInput.value !== confirmPasswordInput.value) {
      message.textContent = "Heslá sa nezhodujú";
      event.preventDefault();
    }
  }

  confirmPasswordInput.addEventListener("input", function () {
    if (passwordInput.value === confirmPasswordInput.value) {
      message.textContent = "Heslá sú zhodné";
    } else {
      message.textContent = "Heslá sa nezhodujú";
    }
  });
});

function addHoverEffect(className) {
  const image = document.querySelector(className);
  image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.2)";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
}

addHoverEffect(".my-img1");
addHoverEffect(".my-img2");
addHoverEffect(".my-img3");

document.getElementById("arrow").addEventListener("click", function () {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});
