// initial selectors from to cache the window height, width and scroll values 
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
let scrollPosition = window.scrollY;
let isReversed = false;

//initial selectors from css
let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');

const $project = document.getElementById('project2');
const $about = document.getElementById('about');

//creating the boundaries for project and about pages
const projectBounds = $project.getBoundingClientRect();
const aboutBounds = $about.getBoundingClientRect();

//setting the point on the page where the background changes
let breakpointFrom = projectBounds.top - (windowHeight * 0.5) + scrollPosition;
let breakpointTo = aboutBounds.top + aboutBounds.height - (windowHeight * 0.5) + scrollPosition;

// allowing the webpage to read how much percentage has been scrolled

function scrollPercent(){
    return((scrollPosition) / (document.body.scrollHeight - windowHeight) * 100)
}
updateBar()


//updating the bar based on the scroll percentage
function updateBar(){

    progressBar.style.transform = `translateY(${scrollPercent()}%)`
    requestAnimationFrame(updateBar)
    //console.log(scrollPercent())
}

window.addEventListener("resize", function() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;

    const projectBounds = $project.getBoundingClientRect();
    const aboutBounds = $about.getBoundingClientRect();

    breakpointFrom = projectBounds.top - (windowHeight * 0.5) + scrollPosition;
    breakpointTo = aboutBounds.top + aboutBounds.height - (windowHeight * 0.5) + scrollPosition;
});

window.addEventListener("scroll", function() {
    scrollPosition = window.scrollY;
    //changing the colour from white to black depening on section scrolled over
    if (scrollPosition > breakpointFrom && scrollPosition < breakpointTo){
        if(isReversed == false){
            isReversed = true;
            document.body.classList.add('is-reversed')
        }
    
    } else {
        if(isReversed == true){
            isReversed = false;
            document.body.classList.remove('is-reversed')
            }
    }
})  


/*next steps: 
    - make the progress indicator start in second section
    - sort out responsiveness
        - e.g. prodcut page images, make sure the whole div "protect-top/bottom" is responsive
    - make project page
*/
