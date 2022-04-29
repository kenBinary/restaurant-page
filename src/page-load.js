import './style.css';
export default function loadPage() {
    const content = document.querySelector("#content");
    const navBar = document.createElement("nav");
    const main = document.createElement("main");
    content.textContent = "bruh";
    content.classList.add("test");
    content.appendChild(navBar);
    content.appendChild(main);
}