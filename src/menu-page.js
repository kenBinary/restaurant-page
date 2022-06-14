import './menu-style.css';

function mainContent(mainParent) {
    const test = document.createElement("div");
    test.textContent = "hello darkness my old friend";
    mainParent.appendChild(test);
    
}
export default function loadMenu() {
    const content = document.querySelector("main");
    mainContent(content);
}