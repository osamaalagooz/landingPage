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
// get a list of all the page sections.
let pageSections = document.querySelectorAll('section');

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


navContent = ''
pageSections.forEach((section) => {
    id = section.id;
    name = section.dataset.nav;
    navContent += `<li><a id = "${id}_link" class = "menu__link" href="#${id}">${name}</a></li>` ;
    
}  
)
nav.innerHTML = navContent;






// Add class 'active' to section when near top of viewport

// remove the active class from the section and the navigator
const sectionDeactivate = (section) => {
    section.classList.remove('your-active-class');
    

    // remove the active class from the anchor element.
    let selector = `#${section.id}_link`;
    let link = document.querySelector(selector);
    link.classList.remove('active');
};
// add the active class to the section and the navigator
const sectionActivate = (section) => {
    
        section.classList.toggle('your-active-class');
        
        // add the active class to the anchor element.
        let selector = `#${section.id}_link`;
        let link = document.querySelector(selector);
        link.classList.add('active');
    
};
// activate the section that on the viewport
const addTheActiveClass = () => {
    
    pageSections.forEach(section => {
        const eleOffSetTop = section.getBoundingClientRect().top;
        sectionDeactivate(section);
        if (eleOffSetTop < .2 * section.scrollHeight && eleOffSetTop >= - 0.75 * section.scrollHeight) {
            sectionActivate(section);
        }
    });
};

window.addEventListener('scroll' ,addTheActiveClass);

// Scroll to anchor ID using scrollTO event
scrollTOSection = (e) => {
    if (e.target.nodeName === "A") {
        e.preventDefault()
        // get the section Id from it's anchor element Id (section1_link >> section1)
        let str = e.target.id;
        let sectionId = str.slice(0,8);
        let clickedSection = document.getElementById(sectionId);
        clickedSection.scrollIntoView();
    }
    
} 
nav.addEventListener('click', scrollTOSection);
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


