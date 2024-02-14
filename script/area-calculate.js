/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle
 * step-2: added an id in the base input field
 * step-3: use getElementById to access the input field
 * step-4: get value from the input field. (value is string now)
 * step-5: convert the value to a number. use parseFloat
 * 
 */


function calculateTriangleArea(){
       // get triangle base value
const triangleBaseInput= document.getElementById('triangle-base');
const triangleBaseText = triangleBaseInput.value;
const base = parseFloat( triangleBaseText)

// get triangle height value
const triangleHightInput =document.getElementById('triangle-hight');
const triangleHightText = triangleHightInput.value;
const hight = parseFloat( triangleHightText);

    // calculate triangle area
const area = .5* base * hight ;
console.log('Area of the triangle is', area) ;

 // display triangle area
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText= area;
}

function calculateRectangleArea(){
    // get width of the rectangle 
   const widthInput = document.getElementById('rectangle-width')
   const widthtext = widthInput.value;
   width = parseFloat(widthtext);

// get length of the rectangle 
   const lengthInput = document.getElementById('rectangle-length');
   const lengthText = lengthInput.value;
   length = parseFloat(lengthText);
  // calculate rectangle area
   const area = width * length;
   console.log(' Are of the Rectangle' , area)

 // display rectangle area
   const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText= area;

}