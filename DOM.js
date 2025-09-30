//ACCESSING HTML TAGS FROM DOM PROPERTIES
/*//getElementByTagName
console.log(document.getElementsByTagName('h1'));

//getElementByClassName
console.log(document.getElementsByClassName('cls'));

//querySelector
console.log(document.querySelector('.cls1'));*/

//INNERTEXT, TEXTCONTENT, INNERHTML
//TODO: whats the difference between textContent and innerText
/*let h1 = document.querySelector('.tittle');
console.log(h1.innerText);
console.log(h1.textContent);
console.log(h1.innerHTML);*/

//ADDING,REMOVING AND TOGGLING CLASSES
/*const h1 = document.querySelector('h1');*/
//display all the classes within h1
// console.log(h1.classList);

/*
//SETTING CLASSES TO ELEMENT
h1.classList.add('title');
console.log(h1.classList);

//REMOVING CLASSES FROM ELEMENT
h1.classList.remove('title');
console.log(h1.classList);

//TOGGLE CLASSES
//add if provided class is not within classList but remove if within classList
h1.classList.toggle('tittle')


//ALL ABOUT ATTRIBUTE
const a = document.querySelector('a');
//attributes are properties inside any tag object

//getting attributes
let getAttributes = a.href
console.log(getAttributes);

let changeAttributeValue = a.href='https://www.youtube.com';
console.log(changeAttributeValue);

//Using Method To Get and Set Attributes
const img = document.querySelector('img');
console.log(img.getAttribute('src'));
img.setAttribute('alt',"beautiful WebStorm logo");
console.log(img.getAttribute('alt'))
*/


//ACCESSING A TAG PARENT,SIBLING,OR CHILDREN
/*console.log(h1.parentElement);
console.log(h1.children);
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

//STYLING IN JS INSTEAD OF CSS
console.log(h1.style);
//changing style; in the HTML file you get an inline style
h1.style.color = 'green';





//CREATING TAGS -- puts it in the DOM Object
let newH1 = document.createElement('h1');
let newSpan = document.createElement('span');
newH1.classList.add('new-h1');
newH1.textContent = 'me na the new tag in town';
newSpan.textContent = 'lowkey span';
console.log(newH1)

//APPENDING CREATED TAG-- puts it [at the end] of the selected tag of the HTML file
let body = document.body;
let main = document.querySelector('main');
main.appendChild(newH1); //appends newH1 at the end of the body tag
console.log(main);

let h3 = document.querySelector('h3');*/

//INSERT BEFORE A SPECIFIED ELEMENT
/*main.insertBefore(newH1,h3)*/

//INSERT ADJACENT ELEMENTS
/*
h3.insertAdjacentElement("beforebegin",newH1); //position before the opening [tag of]the newH1 tag
h3.insertAdjacentElement("afterbegin",newH1); // position after but within the opening [tag of the] newH1 tag
h3.insertAdjacentElement("beforeend",newH1); //position before but within the closing [tag of] the newH1 tag
h3.insertAdjacentElement("afterend",newH1); // position after the closing [tag of the] newH1 tag
*/

//APPEND AND PREPEND
//unlike appendChild, append enbles you to add multiple tags at the end of a tag
/*
main.append(newH1,newSpan);
//same with prepend, but it adds before a tag; at the beginning
main.prepend(newH1,newSpan)
//REMOVE CHILD and REMOVE
let unorderedList = document.querySelector('ul');
let allList = document.querySelectorAll('li');
let list = document.querySelector('.one');
// Remove just a child
unorderedList.removeChild(allList);
//Remove the entire [parent] tag
newSpan.remove();
*/

//EVENTS
//Events are situation that happens when a user or a browser takes action[manipulates] a page
//SEARCH: can we create our own event

//bad way 2
let badWayButton = document.querySelector('.second-btn');
/*badWayButton.onclick = function() {
  console.log('JS why');
}*/

//BEST WAY
/*let bestWayButton = document.querySelector('.best');

bestWayButton.addEventListener('click',/!*setInterval(()=>{console.log('tick tick')},2000)*!/);
setTimeout(()=>{
  clearInterval(interval);
  console.log('you got lucky');
},3000)*/


//Event Object -- a special object passed as a parameter to a listener --
const para = document.querySelector('p');
para.addEventListener('click',(event)=>{
    event.preventDefault();
    para.classList.toggle('para')}
);
console.log(para.classList);
