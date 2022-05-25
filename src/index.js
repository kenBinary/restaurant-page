import * as pageLoad from './page-load.js'

pageLoad.loadPage();
const test = pageLoad.navBar.navLinks;
test.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element.textContent);
    });
});