const btn2 = document.querySelector('#btn2')
qccLink.onclick = function(){
    console.log('QCC was clicked!');
}
qccLink.onmouseover = testing;
function testing(){
  console.log('QCC link was  hovered or mouseover');
}
// example 2
const btn2 = document.querySelector('#btn2')
btn2.onclick = function(){

}
//example 12
const toTop = document.querySelector('.toTop')
//example 10
const inputTxt = document.querySelector('.inputTxt')
inputTxt.addEventListener('keydown',function*(){
  alert(`KEYDOWN! key "${e.key}" was pressed \n The ASCII code for the key "${e.key}" is ${e.which}`)
})
//example 9
const divColor = document.querySelectorAll('.divColor')
for(let eachDiv of divColor){
  eachDiv.addEventListener('mouseout',function(){
    eachDiv.style.backgroundColor = changeColor();
  })
}
//example 7
const colorContainer = document.querySelector('.colorContainer')
const btnColor = document.querySelector('#btnColor')

btnColor.addEventListener('click',function())
{
  //rgb values goes from 0 - 255
  const r = Math.floor(Math.random()*256)
  const g= Math.floor(Math.random()*256)
  const b = Math.floor(Math.random()*256)
  // change background color of the <div>
  container.style.backgroundColor = `rgb(${r},${g},${b})`

}
//example 6
const btn6 = document.querySelector('#btn6')
btn6.addEventListenter('mouseout',click1)
btn6.addEventListenter('dblclick',click2)
 function click1(){
   console.log('BUTTON = mouseout');
 }
