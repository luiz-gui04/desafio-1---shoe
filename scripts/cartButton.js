export default function cartButton() {
  const cart = document.querySelector('.cart-buy');
  const buy = document.querySelector('.buy');
  const mais = document.querySelector('.buy .quantidade .buy-mais');
  const menos = document.querySelector('.buy .quantidade .buy-menos');
  const unidade = document.querySelector('.buy-quantidade');
  const sair = document.querySelector('.buy-finalizar p');
  let somar = 1;

  cart.addEventListener('click', handleClick);
  function handleClick() {
    buy.classList.add('grid');
  }

  mais.addEventListener('click', function () {
    somar++;
    unidade.innerText = somar;
  });

  menos.addEventListener('click', function () {
    somar--;
    unidade.innerText = somar;
    if (somar < 1) {
      buy.classList.remove('grid');
      somar = 1;
      unidade.innerText = somar;
    }
  });

  sair.addEventListener('click', function () {
    buy.classList.remove('grid');
    somar = 1;
    unidade.innerText = somar;
  });
}
