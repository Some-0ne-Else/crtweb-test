const headerButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
const menuLinkTextList = document.querySelectorAll(".menu__link-text");
console.log(menuLinkTextList)

headerButton.addEventListener('click', () => {
    menu.classList.toggle("menu_hidden");
    menuLinkTextList.forEach((el) => { el.classList.toggle("menu__link-text_hidden") })
})
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
        menu.classList.remove("menu_hidden");
        menuLinkTextList.forEach((el) => { el.classList.remove("menu__link-text_hidden") })
    }
    else {
        menu.classList.add("menu_hidden")
        menuLinkTextList.forEach((el) => { el.classList.add("menu__link-text_hidden") })
    }
})