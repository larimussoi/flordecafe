const produtos = [
    {
        nome: "Croissant de pistache",
        descricao: "Croissant recheado com um delicioso brigadeiro de pistache.",
        preco: "R$35,00",
        img: "img/croissantpistache.jpg",
        alt: "croissant recheado com brigadeiro de pistache", 
        link: "produtos/croissant.html"
    },
    {
        nome: "Latte Matcha",
        descricao: "Matcha latte é uma deliciosa combinação de pó de matcha refrescante e leite.",
        preco: "R$25,00",
        img: "img/lattematcha.webp",
        alt: "xícara de latte matcha",
        link: "produtos/latte.html"
    },
    {
        nome: "Bruschetta (3un)",
        descricao: "A bruschetta é uma entrada clássica da culinária italiana, que consiste em fatias de pão torrado cobertas com uma mistura de ingredientes frescos e saborosos.",
        preco: "R$25,00",
        img: "img/bruschetta.jpeg",
        alt: "foto de uma porção de bruschettas",
        link: "produtos/bruschetta.html"
    },
    {
        nome: "Smoothie de Blueberry",
        descricao: "Smoothie de mirtilos frescos.",
        preco: "R$20,00",
        img: "img/smoothieblb.jpg",
        alt: "smoothie de blueberry",
        link: "produtos/smoothie.html"
    },
    {
        nome: "Torta de limão",
        descricao: "Fatia de torta de limão deliciosa.",
        preco: "R$10,00",
        img: "img/tortalimao.jpg",
        alt: "torta de limão",
        link: "produtos/torta.html"
    },
    {
        nome: "Cappuccino",
        descricao: "Uma bebida de café e leite de aproximadamente 150 a 180ml equilibrada entre o doce do leite e o espresso.",
        preco: "R$10,00",
        img: "img/cappuccino.jpg",
        alt: "taça de cappuccino",
        link: "produtos/cappuccino.html"
    }
];

const container = document.getElementById("produtos-container");

produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("col-12", "col-md-6", "col-xl-4", "pb-4");
    card.innerHTML = `
        <div class="card h-100">
            <img class="produto-img" src="${produto.img}" alt="${produto.alt}">
            <div class="card-body">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
                <p>${produto.preco}</p>
                <a href="${produto.link}" class="btn-ver" target="_blank">Ver mais</a>
            </div>
        </div> `;
    container.appendChild(card);
});