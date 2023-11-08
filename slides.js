//pick all of the images and layer them based on the z-index


const slideArea = document.querySelector(".slides")

const images = slideArea.querySelectorAll("img")

//want to keep track of 2 things - the slide we are talking about and the z-index

let currentSlide = 0

let z = 1  //the first z index already has a placement of 1

//when i click the slide area change the slide based on the z-index

slideArea.addEventListener("click", function(){
    
    currentSlide = currentSlide + 1 
    
    if (currentSlide > images.length -1 ){
        currentSlide = 1
    }
    
    z = z + 1
   
    
    
    images.forEach(function(image){
        
        image.style.animation =""
        
        
    })
    
    
    
    
    images[currentSlide].style.zIndex = z
    
    images[currentSlide].style.animation="fade 0.5s"

    
})


slideArea.addEventListener("mouseover", function(){
    
    images.forEach(image =>{
        
//        const  x = 100 * Math.random() - 50
//        
//        const y = 100 *Math.random() -50
        
    const x =25 * (Math.floor (Math.random() * 5 )) -50
    
    const y =25 * (Math.floor (Math.random() * 5 )) -50
        
        image.style.transform = `translate(${x}px, ${y}px)`
        
       
    })
    
})

slideArea.addEventListener("mouseout", function(){
    
    images.forEach(image =>{
                   
        image.style.transform=""        
    
                   
                   })
    
    
    
})



//`` backticks


//forEach - loop over each indivudual image