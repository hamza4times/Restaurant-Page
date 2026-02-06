/*
picture sources (from google images):
https://www.munatycooking.com/
https://thecozycook.com/
https://static.vecteezy.com/
https://thumbs.dreamstime.com/
https://cdn.shopify.com/
https://www.bhg.com/
*/
import "./styles.css";
import { loadMainPage } from "./load-main-page.js";
import { loadMenuPage } from "./load-menu-page.js";
import { loadAboutPage } from "./load-about-page.js";

let contentDIV = document.querySelector('#content');
loadMainPage();

let homeBTN = document.querySelector('#homeBTN');
homeBTN.addEventListener('click', () => {
    contentDIV.replaceChildren();
    loadMainPage();
});

let menuBTN = document.querySelector('#menuBTN');
menuBTN.addEventListener('click', () => {
    contentDIV.replaceChildren();
    loadMenuPage();
});

let aboutBTN = document.querySelector('#aboutBTN');
aboutBTN.addEventListener('click', () => {
    contentDIV.replaceChildren();
    loadAboutPage();
});