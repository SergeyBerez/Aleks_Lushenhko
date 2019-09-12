let btn = document.querySelector('#btn');
let btnshow = document.querySelector('#show');
let div = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

btnshow.onclick = open;

function open() {
  overlay.style.display = 'block';
  div.style.display = 'block';
}
overlay.onclick = close;
function close(arguments) {
  this.style.display = 'none';
  div.style.display = 'none';
}
