function increaseQuantity(id) {
  let quantity = document.getElementById(id);
  quantity.value++;
}

function decreaseQuantity(id) {
  let quantity = document.getElementById(id);
  if (quantity.value > 1) {
    quantity.value--;
  }
}
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    if (button.innerText === 'Добавить в корзину') {
      button.innerText = '✓ Уже в корзине';
      button.style.backgroundColor = 'blue';
    } else if (button.innerText === '✓ Уже в корзине') {
      button.innerText = 'Добавить в корзину';
      button.style.backgroundColor = '#4caf50';
    }
  });
});
