let btn = document.querySelector('#btn');
let btnshow = document.querySelector('#show');
let div = document.querySelector('.modal');

btn.onclick = hide;
function hide() {
  div.style.opacity = '1';
}
btnshow.onclick = show;

function show() {
  div.style.opacity = '0';
}
