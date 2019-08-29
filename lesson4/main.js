document
  .querySelector('[type="button"]')
  .addEventListener('click', function(e) {
    let rand = Math.round(Math.random() * 3);
    // document.querySelector('[type="text"]').value = rand;
    let val = document.querySelector('[type="text"]').value;

    if (isNaN(parseInt(val))) {
      console.log('введите число');
    } else if (val == rand) {
      console.log(val);
      console.log(rand);
      console.log('вы угадали');
    } else {
      console.log('попробуйте еще раз');
    }
  });
