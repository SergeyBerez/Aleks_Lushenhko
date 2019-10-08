let ul = document.querySelector('ul');
let but = document.querySelector('[type="button"]');

but.addEventListener('click', function(e) {
  if (ul.style.marginLeft == '-390px') {
    ul.style.marginLeft = '0px';
    but.defaultValue = 'сдвинуть вправо';
  } else {
    ul.style.marginLeft = '-390px';
    but.defaultValue = 'сдвинуть влево';
  }
});
