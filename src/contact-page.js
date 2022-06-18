import './contact-style.css';

const contactContent = (()=>{
    const main = document.createElement('main');
    main.textContent = "hello"
    function appendContact(content) {
        content.appendChild(main);
    }
    return{appendContact}
})();

function loadContact() {
    const content = document.querySelector("#content");
    contactContent.appendContact(content);
    
}
export {loadContact}