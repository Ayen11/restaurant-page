export const name = "loadPage"



export function loadPageFunc() { 

const contentRef = document.querySelector('#content');
contentRef.classList.add("container");

const headerRef = document.createElement("h1");
headerRef.textContent = "Hi! What am I doing with my life?2";

const paraRef = document.createElement("p");
paraRef.textContent = "some copy about how wonderful the restaurant is.";




contentRef.appendChild(headerRef);
contentRef.appendChild(paraRef);

};
