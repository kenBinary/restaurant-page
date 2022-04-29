import './style.css';

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
    content.appendChild(main);
}



export default function loadPage() {
    const content = document.querySelector("#content");
    navBar(content);
    mainContent(content);

}
