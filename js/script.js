const setaDireita = document.querySelector('.seta-direita');
const setaEsquerda = document.querySelector('.seta-esquerda');
let clicked = false;
const imagens = ['img/newCollectionDesktop.png','img/imagensCarrousel/img1.webp', 'img/imagensCarrousel/img2.webp', 'img/imagensCarrousel/img3.jpg', 'img/imagensCarrousel/img4.jpg'];
setaDireita.addEventListener('click', () => {
    let imagemAtual = document.querySelector('.carrouselImg');
    for(let i = 0; i < imagens.length; i++){
        if(imagemAtual.src.includes(imagens[i])){
            if(i === imagens.length - 1){
                imagemAtual.src = imagens[0];
                clicked = true;
            }else{
                imagemAtual.src = imagens[i + 1];
                clicked = true;
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
                clicked = true;
            }else{
                imagemAtual.src = imagens[i - 1];
                clicked = true;
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
