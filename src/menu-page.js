import './menu-style.css';
import humbaPic from './assets/humba.jpg';
import kalderetaPic from './assets/kaldereta.jpg';
import lechonPic from './assets/lechon.jpg';
import lumpiaPic from './assets/lumpia.jpg';
import sisigPic from './assets/sisig.jpg';
const menuContent = (()=>{
    const firstSection = document.createElement('section');
    const secondSection = document.createElement('section');
    firstSection.classList.add("menu-first-section");
    secondSection.classList.add("menu-second-section");
    const menuListNames = ["Humba", "Kaldereta", "Sisig","Lechon", "Lumpia"];
    const menuItems = [];
    for (let index = 0; index < menuListNames.length; index++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = menuListNames[index];
        menuItems.push(newDiv);
        firstSection.appendChild(newDiv);
    }
    const menuPictures = [humbaPic,kalderetaPic,lechonPic,lumpiaPic,sisigPic];
    const humba = new Image();
    // humba.src = menuPictures[4];
    secondSection.appendChild(humba);


    function appendMenu(mainParent) {
        mainParent.appendChild(firstSection);
        mainParent.appendChild(secondSection);
    }
    return {appendMenu,menuItems}
})();

function loadMenu() {
    const content = document.querySelector("main");
    menuContent.appendMenu(content);
    menuContent.menuItems.forEach((element)=>{
        element.addEventListener('click',()=>{
            console.log("bruh");
        });
    });
}
export {loadMenu}