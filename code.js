const menuTab = [];
menuTab.length = 4;
for (let i = 0; i < menuTab.length; i++) {
    menuTab[i] = document.querySelector("li:nth-child(" + (i + 1) + ")");
}
const ball = document.querySelector("nav");
const burger = document.querySelector(".hamburger");
const divs = [];
divs.length = 3;
for (let i = 0; i < divs.length; i++) {
    divs[i] = document.querySelector(".hamburger div:nth-child(" + (i + 1) + ")");
}
burger.addEventListener('click', function () {
    ball.classList.toggle("hidden");
    for (let i = 0; i < menuTab.length; i++) {
        menuTab[i].classList.remove("postAnimation");
    };
    for (let j = 0; j < 3; j++) {
        divs[j].classList.toggle("clicked");
    };
});
for (let i = 0; i < menuTab.length; i++) {
    menuTab[i].addEventListener('mouseover', function () {
        for (let j = 0; j < 4; j++) {
            menuTab[j].classList.add("postAnimation");
        }
    });
};
