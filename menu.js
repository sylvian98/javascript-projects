const toggleTag = document.querySelector(".toggle-nav")


const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav")


toggleTag.addEventListener('click', function(){
    
    mainTag.classList.toggle("open")
    
    navTag.classList.toggle("open")
    if(mainTag.classList.contains("open")){
        
        toggleTag.innerHTML = '<img src="Slideshow-Assets/close.svg">Close'
        
        
    } else{
        
        toggleTag.innerHTML='<img src="Slideshow-Assets/menu.svg">Menu'
    }
    
    
    
    
})