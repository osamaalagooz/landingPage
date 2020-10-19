/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const nav = document.getElementById('navbar__list');
// get list of all the page sections.
let sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

let navbulder = () => {
    navContent = ''
    sections.forEach((section) => {
        id = section.id;
        name = section.dataset.nav;
        navContent += `<li><a id = "${id}_link" class = "menu__link" href="#${id}">${name}</a></li>` ;
        
    }  
    )
    nav.innerHTML = navContent;
}
navbulder();




// Add class 'active' to section when near top of viewport
const offsetTop = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";

    // remove the active class from the anchor element.
    let selector = `#${section.id}_link`;
    let link = document.querySelector(selector);
    link.classList.remove('active');
};
// adding the active class
const addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
        
        // add the active class to the anchor element.
        let selector = `#${section.id}_link`;
        let link = document.querySelector(selector);
        link.classList.add('active');
    };
};
// activate the section that on the viewport
const sectionActivation = () => {
    sections.forEach(section => {
        const elementOffset = offsetTop(section);

        inviewport = () => elementOffset < 200 && elementOffset >= -400;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

window.addEventListener('scroll' ,sectionActivation);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


