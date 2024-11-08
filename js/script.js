const rightArrow = document.querySelector(".seta-direita");
const leftArrow = document.querySelector(".seta-esquerda");
const button = document.querySelector(".btn-footer");
let actualImage = document.querySelectorAll(".carrouselImg");
const input = document.querySelector(".input-footer");
const fototerForm = document.querySelector(".footer-form");
const headerMobileHeight2 = document.querySelector(".header-section-2");
const burger = document.querySelector(".burger-menu");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let controlBurger = false;
const images = [
  "img/imagensCarrousel/newCollectionDesktop.png",
  "img/imagensCarrousel/1.png",
  "img/imagensCarrousel/2.png",
  "img/imagensCarrousel/3.png",
];
const handleClickCarrousel = () => {
  actualImage.forEach((img) => {
    rightArrow.addEventListener("click", () => {
      for (let i = 0; i < images.length; i++) {
        if (img.src.includes(images[i])) {
          if (i === images.length - 1) {
            img.src = images[0];
          } else {
            img.src = images[i + 1];
          }
          break;
        }
      }
    });
    leftArrow.addEventListener("click", () => {
      for (let i = 0; i < images.length; i++) {
        if (img.src.includes(images[i])) {
          if (i === 0) {
            img.src = images[images.length - 1];
          } else {
            img.src = images[i - 1];
          }
          break;
        }
      }
    });
  });
};
const handleCarrouselTime = () => {
  setInterval(() => {
    actualImage.forEach((img) => {
      for (let i = 0; i < images.length; i++) {
        if (img.src.includes(images[i])) {
          if (i === images.length - 1) {
            img.src = images[0];
          } else {
            img.src = images[i + 1];
          }
          break;
        }
      }
    });
  }, 5000);
};
const validateEmail = () => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value === "" || input.value === " ") {
      alert("Campo de pesquisa vazio");
    } else if (!emailRegex.test(input.value.trim())) {
      alert("Email inválido");
    } else {
      alert(`email cadastrado com sucesso!`);
    }
    input.value = "";
    input.focus();
  });
};
const handleResize = () => {
  if (headerMobileHeight2) {
    headerMobileHeight2.style.display = "none";
  }
  burger.addEventListener("click", () => {
    if (controlBurger === false) {
      headerMobileHeight2.style.display = "flex";
      controlBurger = true;
    } else {
      headerMobileHeight2.style.display = "none";
      controlBurger = false;
    }
  });
};

handleClickCarrousel();
handleCarrouselTime();
validateEmail();
handleResize();