export default function colorButton() {
  const button = document.querySelectorAll('.shoes-options .color');
  const shoe = document.querySelector('.shoes img');
  const shoeCarrinho = document.querySelector('.img-buy img');

  const nome = document.querySelector('.shoes-desc h1');
  const nomeCarrinho = document.querySelector('.buy-desc h1');

  const precoCarrinho = document.querySelector('.buy-compra h2');
  const preco = document.querySelector('.shoes-desc h2');

  const animar = document.querySelector('.shoes .img');

  button.forEach((item) => {
    item.addEventListener('click', handleClick);
  });

  function handleClick(event) {
    const btn = event.currentTarget.getAttribute('id');

    $(event.currentTarget).addClass('border').siblings().removeClass('border');
    if (btn == 1) {
      const src = (shoe.src = `img/jordan${btn}.png`);
      shoeCarrinho.src = src;

      let produto = (nome.innerText = 'Air Jordan 1 Chicago');
      nomeCarrinho.innerText = produto;

      let produtoPreco = (preco.innerHTML = '<span>R$</span>1.049,99');
      precoCarrinho.innerHTML = produtoPreco;
    } else if (btn == 2) {
      const src = (shoe.src = `img/jordan${btn}.png`);
      shoeCarrinho.src = src;

      let produto = (nome.innerText = 'Air Jordan 1 Retro High Dior');
      nomeCarrinho.innerText = produto;

      let produtoPreco = (preco.innerHTML = '<span>R$</span>11.799,99');
      precoCarrinho.innerHTML = produtoPreco;
    } else if (btn == 3) {
      const src = (shoe.src = `img/jordan${btn}.png`);
      shoeCarrinho.src = src;

      let produto = (nome.innerText =
        'Air Jordan 1 Retro Hight "Travis Scott"');
      nomeCarrinho.innerText = produto;

      let produtoPreco = (preco.innerHTML = '<span>R$</span>9.979,99');
      precoCarrinho.innerHTML = produtoPreco;
    }
  }
}
