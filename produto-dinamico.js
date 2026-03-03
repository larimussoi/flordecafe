const params = new URLSearchParams(window.location.search);
const itemId = params.get("item");

const produto = produtos.find((p) => p.id === itemId);

if (produto) {
  document.getElementById("produto-titulo").textContent = produto.nome;
  const descricaoContainer = document.getElementById("produto-descricao");

  const paragrafos = produto.descricaoLonga.trim().split("\n\n");

  descricaoContainer.innerHTML = paragrafos
    .map((p) => `<p class="produto-paragrafo">${p.trim()}</p>`)
    .join("");

  document.querySelector(".produto-detalhe").style.backgroundImage =
    `url('${produto.background}')`;
} else {
  document.getElementById("produto-titulo").textContent =
    "Produto não encontrado";
}
