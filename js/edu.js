let eduImgSlides = document.querySelectorAll(".imgSlide");
let eduTextSlides = document.querySelectorAll(".textSlide");

let eduCon = document.querySelectorAll(".sd");

let prev = document.querySelector("#prev"),
    next = document.querySelector("#next");

eduImgSlides.forEach((list) => {
    let slideBox = list.querySelectorAll("li");
    console.log(slideBox);
    slideBox.forEach((item) => {
        list.appendChild(item.cloneNode(true));
    });

})

eduTextSlides.forEach((list) => {
    let slideBox = list.querySelectorAll("li");
    console.log(slideBox);
    slideBox.forEach((item) => {
        list.appendChild(item.cloneNode(true));
    });

})

eduCon.forEach((pause) => {
    pause.addEventListener("mouseenter", () => {
        pause.style.animationPlayState = 'paused'
    });

    pause.addEventListener("mouseleave", () => {
        pause.style.animationPlayState = 'running'
    });
})

function sTop() {
    eduCon.forEach((stop) => {
        stop.style.animationPlayState = 'paused'
    })
}

// 버튼
console.log(eduCon);
let index = 0;

prev.addEventListener("click", () => {
    sTop();
    console.log("뒤로", index);
    button(index);
});

next.addEventListener("click", () => {
    sTop();
    console.log("앞으로")
})

const button = (index) => {
    eduCon.forEach((num) => {
        console.log("화면이 넘어간다")
        num.style.transform = "translateX(-595px)";
        console.log(num);
    });
}