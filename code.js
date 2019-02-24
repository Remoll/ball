const ball = document.querySelector("nav");
const burger = document.querySelector(".hamburger");
const divs = document.querySelectorAll(".hamburger div");
const menuTab = document.querySelectorAll("li");
burger.addEventListener('click', function () {
    ball.classList.toggle("hidden");
    menuTab.forEach((menuTabItem) => menuTabItem.classList.remove("postAnimation"));
    divs.forEach((div) => div.classList.toggle("clicked"));
});
menuTab.forEach((menuTabItem) => {
    menuTabItem.addEventListener("mouseover", () => menuTab.forEach((menuTabItem) => menuTabItem.classList.add("postAnimation")))
});