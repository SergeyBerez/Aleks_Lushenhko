document
  .querySelector('[type="button"]')
  .addEventListener('click', function(e) {
    let rand = Math.round(Math.random() * 1);
    // document.querySelector('[type="text"]').value = rand;
    let val = document.querySelector('[type="text"]').value;

    if (isNaN(parseInt(val))) {
      console.log(1);
      // document.body.innerHTML +='введите число';
    } else if (val == rand) {
      document.body.innerHTML += val;
      console.log(rand);
      console.log('вы угадали');
    } else {
      console.log('попробуйте еще раз');
    }
  });
