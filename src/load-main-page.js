export {loadMainPage};

function loadMainPage(){
    let divContent = document.querySelector('#content');

    let heroContainer = document.createElement('div');
    heroContainer.setAttribute('id', 'hero');
    divContent.appendChild(heroContainer);

    let image = document.createElement('img');
    image.setAttribute('id', 'hero-img');
    image.setAttribute('src', 'https://www.munatycooking.com/wp-content/uploads/2023/12/chicken-shawarma-image-feature-2023.jpg');
    image.setAttribute('width', '400px');
    image.setAttribute('height', '400px');
    image.setAttribute('alt', 'a picture of a appetizing shawarma wrap with fries on the side');
    heroContainer.appendChild(image);

    let heading = document.createElement('h1');
    heading.textContent = "World's Best Shawarma";
    heading.setAttribute('id', 'hero-heading');
    heroContainer.appendChild(heading);

    let text = document.createElement('p');
    text.setAttribute('id', 'hero-text');
    text.textContent = "We serve the best, warmest, and tastiest shawarma's in the world, actually! It's so good it does not even exist...";
    heroContainer.appendChild(text);

}