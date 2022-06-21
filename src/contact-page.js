import './contact-style.css';

const contactContent = (()=>{
    const main = document.createElement('main');
    main.classList.add("contact-main");
    const newDiv = document.createElement('div');
    newDiv.classList.add("contact-div");
    const contactDetails = ["Sussy Restaurant","Sussy Avenue","Sussybaka@gmail.com","352-2343-1234"]
    for (let index = 0; index < contactDetails.length; index++) {
        const newH3 = document.createElement('h3');
        newH3.textContent = contactDetails[index];
        newDiv.appendChild(newH3);
    }
    function appendContact(content) {
        main.appendChild(newDiv);
        content.appendChild(main);
    }
    return{appendContact}
})();

function loadContact() {
    const content = document.querySelector("#content");
    contactContent.appendContact(content);
    
}
export {loadContact}