'use strict';
//Task 1,4
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


//Task 2
const array =  [1,2,3,4,5];
const shiftOnStep = (arr, step) =>{
  console.log("Initial array:", arr)
  for(let i = 0; i< step; i++)
    {
      arr.unshift(arr[arr.length-1])
      arr.pop()
    }
  console.log(`Array after shift on ${step} steps:`, arr)
  return arr
}

shiftOnStep(array,3)

//Task 3
const strA = "aababba";
const strB = "abbaabcd";

const commonPart = (strA, strB) => {
  let res =[];
  for(let i =0; i<strA.length-1; i++){
   for(let len = i+1; len <= strA.length;){
     if(strB.includes(strA.substring(i,len))){
       res.push(strA.substring(i,len))
       len++;
     } else{break}
   } 

}
  console.log(`Common part of strings: ${res.sort((a, b) =>  b.length - a.length)[0]}`)
  return res[0]
}

commonPart(strA,strB)
