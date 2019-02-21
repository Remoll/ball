const ball = document.querySelector("nav");
const burger = document.querySelector(".hamburger");

const divs = [];
divs.length = 3;
for (let i = 0; i < divs.length; i++) {
    divs[i] = document.querySelector(`.hamburger div:nth-child(${i + 1})`);
}

const menuTab = [];
menuTab.length = 4;
for (let i = 0; i < menuTab.length; i++) {
    menuTab[i] = document.querySelector(`li:nth-child(${i + 1})`);
}

burger.addEventListener('click', function () {
    ball.classList.toggle("hidden");
    // menuTab.forEach(classList.remove("postAnimation"));        do dopracowania i dodanie pozniej
    for (let i = 0; i < menuTab.length; i++) {
        menuTab[i].classList.remove("postAnimation");
    };
    // divs.forEach(classList.toggle("clicked"));                   do dopracowania i dodanie pozniej
    for (let j = 0; j < divs.length; j++) {
        divs[j].classList.toggle("clicked");
    };
});
// menuTab.forEach(addEventListener('mouseover', function () {      do dopracowania i dodanie pozniej
//     menuTab.forEach(classList.add("postAnimation"));
// }));
for (let i = 0; i < menuTab.length; i++) {
    menuTab[i].addEventListener('mouseover', function () {
        for (let j = 0; j < menuTab.length; j++) {
            menuTab[j].classList.add("postAnimation");
        }
    });
}