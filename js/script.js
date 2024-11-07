const setaDireita = document.querySelector('.seta-direita');
const setaEsquerda = document.querySelector('.seta-esquerda');
const imagens = ['img/newCollectionDesktop.png','img/imagensCarrousel/img1.webp', 'img/imagensCarrousel/img2.webp', 'img/imagensCarrousel/img3.jpg', 'img/imagensCarrousel/img4.jpg'];
const button = document.querySelector('.btn-footer');
const input = document.querySelector('.input-footer');
const fototerForm = document.querySelector('.footer-form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
setaDireita.addEventListener('click', () => {
    let imagemAtual = document.querySelector('.carrouselImg');
    for(let i = 0; i < imagens.length; i++){
        if(imagemAtual.src.includes(imagens[i])){
            if(i === imagens.length - 1){
                imagemAtual.src = imagens[0];
            }else{
                imagemAtual.src = imagens[i + 1];
            }
            break;
        }
    }
});
setaEsquerda.addEventListener('click', () => {
    let imagemAtual = document.querySelector('.carrouselImg');
    for(let i = 0; i < imagens.length; i++){
        if(imagemAtual.src.includes(imagens[i])){
            if(i === 0){
                imagemAtual.src = imagens[imagens.length - 1];
            }else{
                imagemAtual.src = imagens[i - 1];
            }
            break;
        }
    }
});
let carrouselTime = setInterval(() => {
    let imagemAtual = document.querySelector('.carrouselImg');
    for(let i = 0; i < imagens.length; i++){
        if(imagemAtual.src.includes(imagens[i])){
            if(i === imagens.length - 1){
                imagemAtual.src = imagens[0];
            }else{
                imagemAtual.src = imagens[i + 1];
            }
            break;
        }
    }
},5000);
button.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value === '' || input.value === ' '){
        alert('Campo de pesquisa vazio');
    } else if(!emailRegex.test(input.value.trim())){
        alert('Email inválido');
    }else{
        alert(`email cadastrado com sucesso!`);
    }
    input.value = '';
    input.focus();
});