import * as pageLoad from './page-load.js'
import * as menuTab from './menu-page.js'

pageLoad.loadPage();
const navLinks = pageLoad.navBar.navLinks;
const mainContent = document.querySelector("main");

// menuTab.loadMenu();

navLinks.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element.textContent);
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild)
        }
        if (element.textContent === "Home") {
            pageLoad.loadPage();
        } 
        else if(element.textContent === "Menu"){
            menuTab.loadMenu();
        }
            
    });
});