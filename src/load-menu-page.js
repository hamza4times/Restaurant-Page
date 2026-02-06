export {loadMenuPage};

function loadMenuPage(){
    let contentDIV = document.querySelector('#content');
    
    let menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-div');
    contentDIV.appendChild(menuDiv);

    let shawarmaIMG = document.createElement('img');
    shawarmaIMG.setAttribute('class', 'menuIMG')
    shawarmaIMG.setAttribute('src', 'https://www.munatycooking.com/wp-content/uploads/2023/12/chicken-shawarma-image-feature-2023.jpg');
    menuDiv.appendChild(shawarmaIMG);
    createItemDescription("Shawarma", "description", menuDiv);

    let friesIMG = document.createElement('img');
    friesIMG.setAttribute('class', 'menuIMG')
    friesIMG.setAttribute('src', 'https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries-.jpg');
    menuDiv.appendChild(friesIMG);
    createItemDescription("Fries", "description", menuDiv);

    let tenderIMG = document.createElement('img');
    tenderIMG.setAttribute('class', 'menuIMG')
    tenderIMG.setAttribute('src', 'https://static.vecteezy.com/system/resources/thumbnails/071/004/082/small/crispy-chicken-tenders-in-red-basket-with-sauce-stock-photo.jpg');
    menuDiv.appendChild(tenderIMG);
    createItemDescription("Tender", "description", menuDiv);

    let wingsIMG = document.createElement('img');
    wingsIMG.setAttribute('class', 'menuIMG')
    wingsIMG.setAttribute('src', 'https://thumbs.dreamstime.com/b/vibrant-image-crispy-chicken-wings-coated-spicy-sauce-served-alongside-golden-french-fries-red-checkered-basket-perfect-377517094.jpg');
    menuDiv.appendChild(wingsIMG);
    createItemDescription("Chicken Wings", "description", menuDiv);

    let nashvilleIMG = document.createElement('img');
    nashvilleIMG.setAttribute('class', 'menuIMG')
    nashvilleIMG.setAttribute('src', 'https://cdn.shopify.com/s/files/1/0583/2418/9372/t/23/assets/Nashville-Hot-Chicken-Sandwich.jpg?v=1748626473');
    menuDiv.appendChild(nashvilleIMG);
    createItemDescription("Nashville Burger", "description", menuDiv);

    let clubIMG = document.createElement('img');
    clubIMG.setAttribute('class', 'menuIMG')
    clubIMG.setAttribute('src', 'https://www.bhg.com/thmb/jJlVmSFUgnDFLoHrezFuEtsmDpc=/4000x0/filters:no_upscale():strip_icc()/bhg-Wishbone-Kitchen-Chicken-Cutlet-Club-9-4sgbpDazW9OtPXwy-dbT-e3c48e135c514049b8a570000e8ce17e.jpg');
    menuDiv.appendChild(clubIMG);
    createItemDescription("Club sandwich", "description", menuDiv);

    function createItemDescription(name, description, parent){
        let itemDescriptionContainer = document.createElement('div');
        parent.appendChild(itemDescriptionContainer);

        let itemName = document.createElement('h2');
        itemName.textContent = name;
        itemDescriptionContainer.appendChild(itemName);

        let itemDescription = document.createElement('p');
        itemDescription.textContent = description;
        itemDescriptionContainer.appendChild(itemDescription);

    }

}