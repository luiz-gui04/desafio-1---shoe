export default function sizeButton() {
  const button = document.querySelectorAll('.size');
  const tamanhoCarrinho = document.querySelector('.buy-compra p span');

  button.forEach((item) => {
    item.addEventListener('click', handleClick);
  });

  function handleClick(event) {
    $(event.currentTarget).addClass('select').siblings().removeClass('select');
    const tamanho = document.querySelector('.size.select').innerText;
    tamanhoCarrinho.innerText = tamanho;
  }
}
