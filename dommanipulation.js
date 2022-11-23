// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function setup() {
  let ratings = document.getElementById("rating");
  let spanElements = ratings.children;

  for(let i =0;i<spanElements.length;i++){
    spanElements[i].addEventListener('click',(e)=>{ 
       addRemoveActiveClass(spanElements,i)
      })
  }

  
}

function  addRemoveActiveClass(spanElements,clickedElementIndex){
  for(let j=0;j<spanElements.length;j++){
  
    if(j<=clickedElementIndex){
      addActiveClass(spanElements,j)
    }else{
       removeActiveClass(spanElements,j)
    }
  }
}

function addActiveClass(spanElements,index){
  spanElements[index].classList.add("active")
}

function removeActiveClass(spanElements,index){
  if(spanElements[index].classList.contains("active")){
    spanElements[index].classList.remove("active")
  }
}

// Example case. 
document.body.innerHTML = `
<div id='rating'>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>4</span>
  <span>5</span>
</div>`;

setup();