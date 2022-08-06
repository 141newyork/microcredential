//automatic slideshow
const slideAuto = document.querySelectorAll('.slideAuto')
function slideshowAuto(){
  let indexSlide = 0
  let numSlides =  slideAuto.length;
  if(indexSlide > numSlides){indexSlide=0}
  if(indexSlide < numSlides){indexSlide=numSlides-1;}
  for(let eachIndex = 0 ; eachIndex < numSlides;eachIndex++){
    slideAuto[eachIndex].style.display = 'none';
  }
  slideAuto[indexSlide].style.display = 'block'
}
//slideshow
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1;
let numberSlides = slides.length;
slideshow(currentSlide);
prev.addEventListener('click',function()){
  currentSlide--slideshow(currentSlide)
})

function slideshow(n){
  // when currentSlide reaches up to the number of slide, it will set back to 1, which is the first slide
  if (currentSlide > numberSlides){
    currentSlide = 1;
  }
}
