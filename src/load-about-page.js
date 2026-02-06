export {loadAboutPage};

function loadAboutPage(){
    let contentDIV = document.querySelector('#content');

    let aboutContainer = document.createElement('div');
    contentDIV.appendChild(aboutContainer);
    aboutContainer.setAttribute('id', 'aboutContainer')

    let title = document.createElement('h1');
    title.textContent = "------------------ABOUT PAGE------------------";
    contentDIV.appendChild(title);

    let para = document.createElement('p');
    para.textContent = "Contact us: ";
    let email = document.createElement('input');
    email.setAttribute('placeholder', 'Email');

    let textField = document.createElement('textarea');
    textField.setAttribute('placeholder', 'inquires');

    let submitBTN = document.createElement('button');
    submitBTN.textContent = "submit"

    aboutContainer.appendChild(para);
    aboutContainer.appendChild(email);
    aboutContainer.appendChild(textField);
    aboutContainer.appendChild(submitBTN);
}
