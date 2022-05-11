import './style.css';
import Icon from './assets/food-pic.png';

function navBar(content) {
    const navBar = document.createElement("nav");
    navBar.classList.add("nav-bar");

    const pageTitle = document.createElement("h1");
    pageTitle.classList.add("page-title");
    pageTitle.textContent = "sussy restaurant"



    const navList = document.createElement("ul");
    const pageOptions = ["Menu","Categories","About","Reviews","Restaurants"];
    for (let i = 0; i < 5; i++) {
        const list = document.createElement("li");
        list.textContent = pageOptions[i];
        list.classList.add("list");
        navList.appendChild(list);
    }


    navBar.appendChild(pageTitle);
    navBar.appendChild(navList);


    content.appendChild(navBar);
}
function mainContent(content) {
    const main = document.createElement("main");
    const firstSection = document.createElement("section");
    firstSection.classList.add("first-section");
    const secondSection = document.createElement("section");
    secondSection.classList.add("second-section");
    const test = new Image();
    test.src = Icon;
    secondSection.appendChild(test);










    const div1 = document.createElement("div");
    div1.textContent = "Eat Today"
    const div2 = document.createElement("div");
    div2.textContent = "Live Another Day"
    const div3 = document.createElement("div");
    div3.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at laoreet lectus. Vestibulum faucibus justo condimentum quam pretium, id bibendum metus commodo.";
    firstSection.appendChild(div1);
    firstSection.appendChild(div2);
    firstSection.appendChild(div3);

    main.appendChild(firstSection);
    main.appendChild(secondSection);
    content.appendChild(main);

}



export default function loadPage() {
    const content = document.querySelector("#content");
    navBar(content);
    mainContent(content);
}
