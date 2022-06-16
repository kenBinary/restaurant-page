import './menu-style.css';

const menuContent = (()=>{
    const firstSection = document.createElement('section');
    const secondSection = document.createElement('section');
    firstSection.classList.add("menu-first-section");
    secondSection.classList.add("menu-second-section");
    const menuListNames = ["Humba", "Kaldereta", "Sisig","Lechno", "Lumpia"];
    const menuItems = [];
    for (let index = 0; index < menuListNames.length; index++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = menuListNames[index];
        menuItems.push(newDiv);
        firstSection.appendChild(newDiv);
    }
    function appendMenu(mainParent) {
        mainParent.appendChild(firstSection);
        mainParent.appendChild(secondSection);
    }
    return {appendMenu}
})();

function loadMenu() {
    const content = document.querySelector("main");
    menuContent.appendMenu(content);
}
export {loadMenu}