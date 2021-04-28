const headerButton = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
const menuLinkTextList = document.querySelectorAll(".menu__link-text");
const checkboxList = document.querySelectorAll(".task-four__checkbox");
const textCheckbox = document.getElementById("text");
const taskFourText = document.querySelector(".task-four__text");
const buttonCheckbox = document.getElementById("button");
const taskFourButton = document.querySelector(".task-four__button");
const imageCheckbox = document.getElementById("image");
const taskFourImage = document.querySelector(".task-four__image");
const checkallCheckbox = document.getElementById("checkall");

const checkState = (checkboxList) => {
    const checkedNow = document.querySelectorAll(".task-four__checkbox:checked");
    if (checkedNow.length > 0 && checkedNow.length <= 2) { checkallCheckbox.indeterminate = true }
    if (checkedNow.length === 0) { checkallCheckbox.indeterminate = false; checkallCheckbox.checked = false; }
    if (checkedNow.length === 3) { checkallCheckbox.indeterminate = false; checkallCheckbox.checked = true; }
}


headerButton.addEventListener('click', () => {
    menu.classList.toggle("menu_hidden");
    menuLinkTextList.forEach((el) => { el.classList.toggle("menu__link-text_hidden"); })
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

textCheckbox.addEventListener('click', () => { taskFourText.classList.toggle("task-four__text_visible"); checkState(checkboxList); });
buttonCheckbox.addEventListener('click', () => { taskFourButton.classList.toggle("task-four__button_visible"); checkState(checkboxList); });
imageCheckbox.addEventListener('click', () => { taskFourImage.classList.toggle("task-four__image_visible"); checkState(checkboxList); });
checkallCheckbox.addEventListener('click', () => {

    if (checkallCheckbox.checked === true) {
        checkboxList.forEach((el) => el.checked = true);
        taskFourText.classList.add("task-four__text_visible");
        taskFourButton.classList.add("task-four__button_visible");
        taskFourImage.classList.add("task-four__image_visible");

    }
    else {
        checkboxList.forEach((el) => el.checked = false);
        taskFourText.classList.remove("task-four__text_visible");
        taskFourButton.classList.remove("task-four__button_visible");
        taskFourImage.classList.remove("task-four__image_visible");
    }
})