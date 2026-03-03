const produtos = [
  {
    id: "croissant",
    nome: "Croissant de Pistache",
    descricao: "Croissant recheado com brigadeiro de pistache.",
    descricaoLonga: `O croissant é uma das delícias mais encantadoras da confeitaria. Sua origem remonta à Áustria, onde nasceu o “kipferl”, um pão em forma de lua crescente que mais tarde conquistou os franceses, e foi na França que ganhou a leveza, as camadas amanteigadas e o nome que o tornaram famoso no mundo todo.
    Com seu cheiro irresistível e textura delicadamente folhada, o croissant é uma pequena obra de arte feita de massa, manteiga e paciência. Crocante por fora e macio por dentro, ele une sabor e beleza de um jeito que desperta todos os sentidos, perfeito para acompanhar um café, começar o dia ou simplesmente celebrar os prazeres simples da vida.
    Na Flor de Café temos diversos sabores de croissant, venha e experimente todos eles!`,
    preco: 35,
    img: "img/croissantpistache.jpg",
    alt: "Croissant recheado com pistache",
    background: "img/backgroundcroissant.jpg",
  },
  {
    id: "latte",
    nome: "Latte Matcha",
    descricao: "Matcha com leite cremoso.",
    descricaoLonga: `O latte é a combinação perfeita entre café e leite vaporizado, criando uma bebida suave, cremosa e aconchegante. De origem italiana, seu nome vem de “caffè latte”, que literalmente significa “café com leite”.
    Com sua espuma delicada e o aroma envolvente do espresso, o latte é um convite a desacelerar e apreciar o momento. Seu sabor equilibrado, nem forte demais, nem doce em excesso, conquista até quem não é fã de cafés intensos. E quando a arte do barista desenha corações ou folhas na espuma, o latte revela também sua beleza simples e acolhedora, perfeita para acompanhar uma boa conversa ou um instante de paz.`,
    preco: 25,
    img: "img/lattematcha.webp",
    alt: "Xícara de latte matcha",
    background: "img/backgroundlatte.jpg",
  },
  {
    id: "bruschetta",
    nome: "Bruschetta (3un)",
    descricao: "Entrada italiana clássica.",
    descricaoLonga: `A bruschetta é um clássico italiano que transforma a simplicidade em arte. Nascida nas antigas fazendas da Itália, ela surgiu como uma forma de aproveitar o pão do dia anterior, tostando-o e cobrindo com azeite, alho e tomates frescos.
    Com o tempo, ganhou variações, mas manteve sua essência: sabores frescos, cores vibrantes e uma textura que combina crocância e leveza. A bruschetta é o tipo de comida que não precisa de luxo — apenas bons ingredientes e um toque de carinho. Cada mordida traz o sabor do Mediterrâneo e a sensação de estar saboreando o verão em um pedaço de pão.`,
    preco: 25,
    img: "img/bruschetta.jpeg",
    alt: "Bruschettas",
    background: "img/backgroundbruschetta.jpg",
  },
  {
    id: "smoothie",
    nome: "Smoothie de Blueberry",
    descricao: "Smoothie refrescante de mirtilos.",
    descricaoLonga: `O smoothie é como um abraço gelado em forma de bebida — leve, colorido e cheio de vida. Nascido da mistura criativa de frutas frescas, iogurte, leite ou suco, ele combina sabor, nutrição e frescor em um só copo.
    Sua textura cremosa e o toque naturalmente adocicado fazem dele uma escolha perfeita para começar o dia ou recarregar as energias. Cada variação é uma nova experiência: de frutas vermelhas vibrantes a combinações tropicais com manga e coco. O smoothie é a prova de que saudável também pode ser delicioso e bonito, um verdadeiro raio de sol para o paladar.`,
    preco: 20,
    img: "img/smoothieblb.jpg",
    alt: "Smoothie de blueberry",
    background: "img/backgroundsmoothie.jpg",
  },
  {
    id: "torta",
    nome: "Torta de Limão",
    descricao: "Fatia deliciosa de torta.",
    descricaoLonga: `Bolos e tortas são o coração de muitas memórias doces. Desde as receitas simples de família até as versões mais elaboradas de confeitaria, eles carregam histórias, aromas e afetos. Um bolo recém-saído do forno tem aquele cheiro que acolhe, enquanto uma torta bem montada encanta pelos detalhes e pelas camadas que se revelam a cada fatia.
    Com massas fofinhas, recheios cremosos e coberturas que parecem abraços de açúcar, bolos e tortas são muito mais que sobremesas — são momentos de celebração e conforto. Seja no café da tarde ou em uma ocasião especial, sempre há espaço para um pedaço de doçura que aquece o coração.`,
    preco: 10,
    img: "img/tortalimao.jpg",
    alt: "Torta de limão",
    background: "img/backgroundtorta.jpg",
  },
  {
    id: "cappuccino",
    nome: "Cappuccino",
    descricao: "Espresso com leite cremoso.",
    descricaoLonga: `O cappuccino é um clássico italiano que une espresso, leite vaporizado e uma camada generosa de espuma, criando uma harmonia perfeita entre força e suavidade. Dizem que seu nome vem da cor do manto dos monges capuchinhos, um tom amarronzado e acolhedor, assim como a bebida.
    Com seu aroma intenso e sabor equilibrado, o cappuccino é um ritual de conforto: quente, cremoso e envolvente. Polvilhado com um toque de cacau ou canela, ele transforma qualquer pausa em um momento especial, uma pequena pausa para saborear o simples prazer de estar presente.`,
    preco: 10,
    img: "img/cappuccino.jpg",
    alt: "Taça de cappuccino",
    background: "img/backgroundcappuccino.jpg",
  },
];

const container = document.getElementById("produtos-container");
const selectOrdenacao = document.getElementById("ordenar-preco");

const produtosOriginais = [...produtos];

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function renderProdutos(lista) {
  container.innerHTML = "";

  lista.forEach((produto) => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-xl-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm border-0 produto-card">
        <img src="${produto.img}" 
             class="card-img-top produto-img"
             alt="${produto.alt}"
             loading="lazy">

        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${produto.nome}</h5>
          <p class="card-text text-muted small flex-grow-1">
            ${produto.descricao}
          </p>

          <div class="d-flex justify-content-between align-items-center mt-3">
            <p class="preco-produto fw-bold">${formatarPreco(produto.preco)}</p>
           <a href="produto.html?item=${produto.id}" class="btn-ver" target="_blank">Ver mais</a>
          </div>
        </div>
      </div>
    `;

    container.appendChild(col);
  });
}

selectOrdenacao.addEventListener("change", () => {
  let produtosOrdenados = [...produtos];

  if (selectOrdenacao.value === "menor") {
    produtosOrdenados.sort((a, b) => a.preco - b.preco);
  }

  if (selectOrdenacao.value === "maior") {
    produtosOrdenados.sort((a, b) => b.preco - a.preco);
  }

  if (selectOrdenacao.value === "padrao") {
    produtosOrdenados = [...produtosOriginais];
  }

  renderProdutos(produtosOrdenados);
});

renderProdutos(produtos);
