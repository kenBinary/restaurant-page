import * as pageLoad from './page-load.js';
import * as menuTab from './menu-page.js';
import * as contactTab from './contact-page.js';

pageLoad.loadPage();
const navLinks = pageLoad.navBar.navLinks;
const mainContent = document.querySelector("#content");

navLinks.forEach((element)=>{
    element.addEventListener('click',()=>{
        mainContent.removeChild(mainContent.lastChild)
        if (element.textContent === "Home") {
            pageLoad.loadPage();
        } 
        else if(element.textContent === "Menu"){
            menuTab.loadMenu();
        }
        else if(element.textContent === "Contact"){
            contactTab.loadContact();
        }

    });
});