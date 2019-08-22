let btn = document.querySelector('#btn');
let btnshow = document.querySelector('#show');
let div = document.querySelector('.modal');

btn.onclick = hide;
function hide() {
  div.hidden = true;
}
btnshow.onclick = show;

function show() {
  div.hidden = false;
}
