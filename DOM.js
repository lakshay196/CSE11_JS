const x = document;
const result = document.getElementsByClassName("p1");

x[0].innerHtml = "lakshay";
x[1].innerHtml = "Gupta";


const result3 =document.getElementsByTagName("p");
result[2].innerhtml = "this ";
result[1].style.color = "blue";

const test2 = document.querySelectorAll( "ul li");
for ( x in test2 ) {
    test2[x].style.backgrooundColor = "green";
    test2[x].style.margin = "10px";
    test2[x].style.color = "blue";
}
    
console.log(test2); 


