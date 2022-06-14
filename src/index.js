import * as pageLoad from './page-load.js'
import loadMenu from './menu-page.js'

pageLoad.loadPage();
const navLinks = pageLoad.navBar.navLinks;
const mainContent = document.querySelector("main");
navLinks.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element.textContent);
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild)
        }
        if (element.textContent === "Menu") {
            loadMenu()
        }
    });
});