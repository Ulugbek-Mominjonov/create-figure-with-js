window.addEventListener('DOMContentLoaded', () => {
  let width = document.querySelector('#width'),
      height = document.querySelector("#height"),
      borderRadius = document.querySelector('#radius'),
      color = document.querySelector('#color'),
      createBtn = document.querySelector('.creater-btn');

  function addStyle (width, height, radius, color) {
    let figure = document.querySelector('.figure');

    figure.style.width = width + 'px';
    figure.style.height = height + 'px';
    figure.style.borderRadius = radius + '%'
    figure.style.backgroundColor = color;
  }

  let inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('change', () => {
      if(input.value < 0){
        input.value = 0;
      }
    })
  })


  createBtn.addEventListener('click', () => {
    addStyle(width.value, height.value, borderRadius.value, color.value);

  })


})