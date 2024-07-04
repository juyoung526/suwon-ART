// logoPlay
let logoImg = document.querySelectorAll(".logoWrap img");
let i = 0;
setTimeout(() => {
    logoImg.forEach((logo, index) => {
        logo.style.opacity = '1';
        logo.style.top = '0px';

    }, 300)
});




let newS = document.querySelector(".new-s"),
    backImgBox = document.querySelector(".backImgBox"),
    texts = document.querySelectorAll(".backImgBox li");

let currentIndex = 1;
const totalText = texts.length;

const firstText = texts[0].cloneNode(true);
backImgBox.appendChild(firstText);

const lastText = texts[totalText - 1].cloneNode(true);
backImgBox.insertBefore(lastText, texts[0]);