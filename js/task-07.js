const sizeControlRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector("span#text");

 sizeControlRef.addEventListener("input", () => {
     textRef.style.fontSize = sizeControlRef.value+'px';
 });