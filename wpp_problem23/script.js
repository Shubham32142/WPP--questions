/*
 Write a JavaScript function that changes the background color of an element when a mouse enters it.*/
let color = ['green', 'yellow', 'purple', 'blue', 'orange'];
document.querySelector('.color-changing').addEventListener('mouseenter', function () {
    //generates a random index
    let randomColor = Math.floor(Math.random() * color.length);
    //based on the index changes the color;
    this.style.backgroundColor = color[randomColor];
    })
