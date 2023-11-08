//const tag = document.querySelector( "h2" ) selects the html section tag
//
//tag.innerHTML = "this is a text" changes html text//
//tag.style.color ="red"

let pageNumber = 0 //page numbers so it can change pages based on copy

//arrays of objects
const pages =[
     {copy:'letting you view her <a href="https://sylvian98.github.io/Sylvia-Ifeoma-Nwokoro/">porfolio', background:"#edc7a9", circle:"#3e78ed"},
    
    
    {copy:"also a UI/Graphic Designer", background:"#d3c7f3", circle:"#f7fe00"},
   {copy: "Someone with 2 years of working Expierence", background:"#a1fffe", circle:"#e34a47"
    },
    
   
]

//data  array of strings
//const pages =[
//    "Letting you view my Portfolio",
//    "Im also a UI/Graphic Designer",
//    "I have 2 years of working Expierence",
//    
//    
//]

//const test=document.querySelector("p")

const nextTag = document.querySelector("footer img.next") 
const prevTag = document.querySelector("footer img.prev")

const randomTag = document.querySelector("footer img.random")

const outputTag = document.querySelector("h2")
const circleTag=document.querySelector("section div.cirlce")
bodyTag = document.querySelector("body")

const next = function(){
    pageNumber++
    
    if (pageNumber > pages.length -1){
        pageNumber = 0
    }
    
     updateFuntion() 
    //    pageNumber = pageNumber + 1
//    or can do pageNumber++
}


const previous= function(){
    pageNumber= pageNumber -1
    if (pageNumber < 0){
        pageNumber = pages.length -1
    }
    updateFuntion()
}

const random = function(){
    pageNumber =  Math.floor (Math.random() * pages.length)
    
    updateFuntion()
    
}

const updateFuntion = function(){
//    test.style.backgroundColor="red"
//     outputTag.innerHTML=pageNumber 
outputTag.innerHTML=pages[pageNumber].copy //collecting an array of strings
circleTag.style.backgroundColor= pages[pageNumber].circle
bodyTag.style.backgroundColor=pages[pageNumber].background
}

nextTag.addEventListener('click',function(){
    next() //to run the next funtion
//    previous()
                       })


prevTag.addEventListener('click',function(){
    previous()
})

randomTag.addEventListener('click', function(){
    random()
})

document.addEventListener("keyup",function(event){
    
//    console.log(event)
    
//    next()
    if(event.key =="ArrowRight"){
        next()
    }
     else if (event.key =="ArrowLeft"){
         previous()
     }
   
    
})

////Notes:
//Math is a bult in object
//Math.pow() - rounds to the nearest power Number
//
//Math.round - rounds to the nearest whole Number
//
//Math.ceil - to the nearest ceiling (rounds up)
//
//Math.floor - to the nearesr floor (rounds down)
//
//Math.random - Picks a random number



