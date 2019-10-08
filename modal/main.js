//--------------------------кнопка открытия окна
let btnshow = document.querySelector('#show');
btnshow.onclick = open;
function open() {
  //получили атрибут "#sign-in"
  let id = this.dataset.modal;
  console.log(id);
  //вставли его в метод поиска по селектору квери селектор
  document.querySelector(id).classList.add('show');

  document.querySelector(id).parentElement.classList.add('show');
}
//-------------------------кнопка закрытия окна
let btnclose = document.querySelector('#close');
btnclose.onclick = close;
function close() {
  let idclose = this.dataset.modal;

  document.querySelector(idclose).classList.remove('show');
  document.querySelector(idclose).parentElement.classList.remove('show');
}
//--------------------получает оверлай родительский элемет
let overlay = document.querySelector('.overlay');
overlay.onclick = overlayclose;
function overlayclose(e) {
  let elem = this.className;

  if (e.target.className == 'modal show') {
    console.log(1);
  } else {
    console.log(this.firstElementChild);
    this.classList.remove('show');
    this.firstElementChild.classList.remove('show');
  }
}
