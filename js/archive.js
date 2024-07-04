
let upList = document.querySelectorAll(".up");

let downList = document.querySelectorAll(".down");


upList.forEach((list) => {
    let upItem = list.querySelectorAll("li");
    upItem.forEach((item) => {
        list.appendChild(item.cloneNode(true));
    });

    list.addEventListener("mouseenter", () => {
        list.style.animationPlayState = 'paused';
    });

    list.addEventListener("mouseleave", () => {
        list.style.animationPlayState = 'running';
    });
})

//prepend 효과


downList.forEach((list) => {
    let downItem = Array.from(list.querySelectorAll("li"));

    downItem.forEach((item) => {
        let downClone = item.cloneNode(true);
        list.insertBefore(downClone, list.firstChild);
        console.log(downClone);
    })

    list.addEventListener("mouseenter", () => {
        list.style.animationPlayState = 'paused';
    });

    list.addEventListener("mouseleave", () => {
        list.style.animationPlayState = 'running';
    });
});

















