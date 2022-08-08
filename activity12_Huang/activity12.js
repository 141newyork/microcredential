//storage
const firstName = document.querySelector('#firstN')
const lastName = document.querySelector('#lastN')
const submitForm = document.querySelector('.input1')

submitForm.addEventListener('click',function(){
  localStorage.setItem('FN',firstName.value);
  sessionStorage.setItem('LN',lastName.value);
})
//forms
//viewpassword
const myPassword = document.querySelector('#myPassword');
const viewPassword = document.querySelector('#viewPassword');
  viewPassword.addEventListener('click',function(){
   const secret = myPassword.getAttribute('type')==='password' ? 'text' : 'password';
   myPassword.setAttribute('type',secret)
})
//automatic slideshow
const slideAuto = document.querySelectorAll('.slideAuto')
let indexSlide=0;
slideshowAuto()
function slideshowAuto(){
  let numSlides =slideAuto.length;
  if(indexSlide >= numSlides){indexSlide=0}
  if(indexSlide < 0){indexSlide=numSlides-1;}
  for(let eachIndex = 0 ; eachIndex < numSlides;eachIndex++){
    slideAuto[eachIndex].style.display = 'none';
  }
  slideAuto[indexSlide].style.display = 'block'
  setTimeout(slideshowAuto,3000);
  indexSlide++;
}
//slideshow
const slides = document.querySelectorAll('.slide')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let currentSlide = 1;
let numberSlides = slides.length;
slideshow(currentSlide);
prev.addEventListener('click',function(){
  currentSlide--
  slideshow(currentSlide)
})
next.addEventListener('click',function(){
  currentSlide++
  slideshow(currentSlide)
})
function slideshow(n){
  // when currentSlide reaches up to the number of slide, it will set back to 1, which is the first slide
  if (currentSlide > numberSlides){
    currentSlide = 1;
  }
  if(currentSlide<1){currentSlide=numberSlides;}
  for(let eachSlides =0; eachSlides<numberSlides;eachSlides++){
    slides[eachSlides].style.display='none';
  }
  slides[currentSlide-1].style.display='block';
}
