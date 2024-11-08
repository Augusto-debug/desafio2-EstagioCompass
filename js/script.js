const setaDireita = document.querySelector(".seta-direita");
const setaEsquerda = document.querySelector(".seta-esquerda");
const button = document.querySelector(".btn-footer");
let imagemAtual = document.querySelectorAll(".carrouselImg");
const input = document.querySelector(".input-footer");
const fototerForm = document.querySelector(".footer-form");
const headerMobileHeight2 = document.querySelector(".header-section-2");
const burger = document.querySelector(".burger-menu");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let controlBurger = false;
const imagens = [
  "img/imagensCarrousel/newCollectionDesktop.png",
  "img/imagensCarrousel/1.png",
  "img/imagensCarrousel/2.png",
  "img/imagensCarrousel/3.png",
];
imagemAtual.forEach((img) => {
  setaDireita.addEventListener("click", () => {
    for (let i = 0; i < imagens.length; i++) {
      if (img.src.includes(imagens[i])) {
        if (i === imagens.length - 1) {
          img.src = imagens[0];
        } else {
          img.src = imagens[i + 1];
        }
        break;
      }
    }
  });
  setaEsquerda.addEventListener("click", () => {
    for (let i = 0; i < imagens.length; i++) {
      if (img.src.includes(imagens[i])) {
        if (i === 0) {
          img.src = imagens[imagens.length - 1];
        } else {
          img.src = imagens[i - 1];
        }
        break;
      }
    }
  });
});
setInterval(() => {
  imagemAtual.forEach((img) => {
    for (let i = 0; i < imagens.length; i++) {
      if (img.src.includes(imagens[i])) {
        if (i === imagens.length - 1) {
          img.src = imagens[0];
        } else {
          img.src = imagens[i + 1];
        }
        break;
      }
    }
  });
}, 5000);
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
if (headerMobileHeight2) {
  headerMobileHeight2.style.display ="none";
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