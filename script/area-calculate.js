function calculateTriangleArea(){
    // get
const triangleBaseInput= document.getElementById('triangle-base');
const triangleBaseText = triangleBaseInput.value;
const base = parseFloat( triangleBaseText)


const triangleHightInput =document.getElementById('triangle-hight');
const triangleHightText = triangleHightInput.value;
const hight = parseFloat( triangleHightText);

const area = .5* base * hight ;
console.log('Area of the triangle is', area) ;

const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText= area;
}

