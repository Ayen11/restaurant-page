
const contentRef = document.querySelector('#content');
contentRef.classList.add("container");



//start
function loadStartFunc() { 

contentRef.innerHTML = " ";

const headerRef = document.createElement("h1");
headerRef.textContent = "Hi! What am I doing with my life?2";

const paraRef = document.createElement("p");
paraRef.textContent = "some copy about how wonderful the restaurant is.";




contentRef.appendChild(headerRef);
contentRef.appendChild(paraRef);

};


//about
function loadAboutFunc() { 

contentRef.innerHTML = " ";
    
const headerRef = document.createElement("h1");
headerRef.textContent = "About us:";
    
const paraRef = document.createElement("p");
paraRef.textContent = "We are a great very existing restaurant";
    
    
    
    
contentRef.appendChild(headerRef);
contentRef.appendChild(paraRef);
    
};



//contact
function loadContactFunc() { 

contentRef.innerHTML = " ";
        
const headerRef = document.createElement("h1");
headerRef.textContent = "Contact us:";
        
const paraRef = document.createElement("p");
paraRef.textContent = "We are around the block";
        
        
        
        
contentRef.appendChild(headerRef);
contentRef.appendChild(paraRef);
        
};    


export {loadStartFunc, loadAboutFunc, loadContactFunc}