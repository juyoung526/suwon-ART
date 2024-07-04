let logoBtn = document.querySelectorAll("#logoBtn li");
console.log(logoBtn);
let mapWrap = document.querySelector(".mapWrap");
let maps = document.querySelectorAll(".mapWrap div")

logoBtn.forEach((Btn, index) => {
    Btn.addEventListener("click", () => {
        console.log(maps[index]);
        maps.forEach((item) => {
            item.classList.remove("on");
        });
        maps[index].classList.add("on");
        mapWrap.classList.add("on");
    })
})


