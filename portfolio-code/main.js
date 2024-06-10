// initial selectors from CSS
let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');

// allowing the webpage to read how much percentage has been scrolled
function scrollPercent(){
    return((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)
}
updateBar()

//updating the bar based on the scroll percentage
function updateBar(){

    progressBar.style.height = `${scrollPercent()}%`
    requestAnimationFrame(updateBar)
    console.log(scrollPercent())
}

/*next steps: 
    - make the updating start at "0" rev and finish at "5" rev
    - make the red indicator scroll too
    - make the progress indicator start in second section
*/