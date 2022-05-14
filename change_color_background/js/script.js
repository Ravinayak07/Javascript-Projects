//Choose a random color
const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
const value = document.querySelector('#color_name');

body.style.background = 'red';
button.addEventListener('click', changeBackground);

function changeBackground(){
    const colorIndex = parseInt(Math.random()*colors.length);
    value.textContent = colors[colorIndex];
    console.log(value.textContent);
    body.style.backgroundColor = colors[colorIndex];
}





