let span = document.querySelectorAll('.span-togle-cont');
span.forEach(item => {
  item.addEventListener('click', showContent);
});
function closeContent() {
  let divs = document.querySelectorAll('.content-show');
  for (let i = 1; i < divs.length; i++) {
    divs[i].classList.add('close');
  }
}
closeContent();

function showContent(e) {
  //   this.nextElementSibling.classList.remove('close');

  let id = this.dataset.show;
  let divCont = document.querySelector('.content-show[data-show="' + id + '"]');
  let divparCont = this.parentElement.querySelector('.content-show');
  //   document.querySelector('[data-mod="' + id + '"]').classList.toggle('close');

  let divs = document.querySelectorAll('.content-show');
  for (let i = 0; i < divs.length; i++) {
    // if (!divs[i].classList.contains('close')) {
    //   divs[i].classList.add('close');
    // }
    divs[i].classList.add('close');
    console.log(divs[i]);
  }

  // closeContent();

  divparCont.classList.toggle('close');
}
