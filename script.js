/* CARROSSEL */

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
});

/* CATÁLOGO */

const corposCelestes = [{
    nome: "Sol",
    tipo: "estrela",
    descricao: "Estrela central do nosso Sistema Solar e fonte de energia para a vida na Terra.",
    imagem: "img/sol.png"
  },
  {
    nome: "Mercúrio",
    tipo: "planeta",
    descricao: "O menor e mais interno planeta, com temperaturas extremas.",
    imagem: "img/mercurio.png"
  },
  {
    nome: "Vênus",
    tipo: "planeta",
    descricao: "O planeta mais quente do Sistema Solar, envolto por uma atmosfera densa.",
    imagem: "img/venus.png"
  },
  {
    nome: "Terra",
    tipo: "planeta",
    descricao: "Nosso planeta azul, único conhecido a abrigar vida.",
    imagem: "img/terra.png"
  },
  {
    nome: "Marte",
    tipo: "planeta",
    descricao: "Conhecido como Planeta Vermelho, com evidências de água congelada.",
    imagem: "img/marte.png"
  },
  {
    nome: "Júpiter",
    tipo: "planeta",
    descricao: "O maior planeta do Sistema Solar, com a famosa Grande Mancha Vermelha.",
    imagem: "img/jupiter.png"
  },
  {
    nome: "Saturno",
    tipo: "planeta",
    descricao: "Famoso por seus belos anéis compostos de gelo e rocha.",
    imagem: "img/saturno.png"
  },
  {
    nome: "Urano",
    tipo: "planeta",
    descricao: "Gigante gelado que gira quase deitado em sua órbita.",
    imagem: "img/urano.png"
  },
  {
    nome: "Netuno",
    tipo: "planeta",
    descricao: "Planeta mais distante, conhecido por ventos supersônicos.",
    imagem: "img/netuno.png"
  },
  {
    nome: "Plutão",
    tipo: "planeta-anão",
    descricao: "Reclassificado como planeta anão, localizado no Cinturão de Kuiper.",
    imagem: "img/plutao.png"
  },
  {
    nome: "Ceres",
    tipo: "asteroide",
    descricao: "O maior objeto do cinturão de asteroides entre Marte e Júpiter, classificado também como planeta anão.",
    imagem: "img/ceres.png"
  },
  {
    nome: "Vesta",
    tipo: "asteroide",
    descricao: "Um dos maiores asteroides do Sistema Solar, com superfície marcada por crateras.",
    imagem: "img/vesta.png"
  },
  {
    nome: "Pallas",
    tipo: "asteroide",
    descricao: "Segundo maior asteroide do cinturão principal, com formato irregular.",
    imagem: "img/pallas.png"
  },
  {
    nome: "Hygiea",
    tipo: "asteroide",
    descricao: "O quarto maior asteroide do cinturão principal, composto principalmente por carbono.",
    imagem: "img/hygiea.png"
  },
  {
    nome: "Eros",
    tipo: "asteroide",
    descricao: "Asteroide próximo da Terra, famoso por ter sido explorado pela sonda NEAR Shoemaker.",
    imagem: "img/eros.png"
  },
  {
    nome: "Halley",
    tipo: "cometa",
    descricao: "O cometa mais famoso, visível da Terra a cada 76 anos aproximadamente.",
    imagem: "img/halley.png"
  },
  {
    nome: "Hale-Bopp",
    tipo: "cometa",
    descricao: "Um dos cometas mais brilhantes do século XX, visível a olho nu por muitos meses em 1997.",
    imagem: "img/hale-bopp.png"
  },
  {
    nome: "Encke",
    tipo: "cometa",
    descricao: "Cometa periódico com o menor período conhecido, retornando a cada 3,3 anos.",
    imagem: "img/encke.png"
  },
  {
    nome: "Shoemaker-Levy 9",
    tipo: "cometa",
    descricao: "Famoso por colidir com Júpiter em 1994, deixando marcas visíveis por meses.",
    imagem: "img/shoemaker-levy9.png"
  },
  {
    nome: "Lua",
    tipo: "lua",
    descricao: "Satélite natural da Terra, essencial para as marés e estabilização do clima.",
    imagem: "img/lua.png"
  },
  {
    nome: "Europa",
    tipo: "lua",
    descricao: "Uma das luas de Júpiter, possui oceano subterrâneo e é alvo de estudos sobre vida extraterrestre.",
    imagem: "img/europa.png"
  },
  {
    nome: "Titã",
    tipo: "lua",
    descricao: "Maior lua de Saturno, possui atmosfera densa e lagos de metano líquido.",
    imagem: "img/tita.png"
  },
  {
    nome: "Ganimedes",
    tipo: "lua",
    descricao: "A maior lua do Sistema Solar, também orbitando Júpiter, até maior que o planeta Mercúrio.",
    imagem: "img/ganimedes.png"
  },
  {
    nome: "Io",
    tipo: "lua",
    descricao: "Lua de Júpiter extremamente vulcânica, com centenas de vulcões ativos.",
    imagem: "img/io.png"
  }
];

function mostrarCatalogo(lista) {
  const container = document.getElementById("lista-corpos");
  container.innerHTML = "";
  lista.forEach(corpo => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${corpo.imagem}" alt="${corpo.nome}">
      <h3>${corpo.nome}</h3>
      <p>${corpo.descricao}</p>
    `;
    card.addEventListener("click", () => abrirModal(corpo));
    container.appendChild(card);
  });
}
mostrarCatalogo(corposCelestes);

document.getElementById("filtro").addEventListener("change", (e) => {
  const tipo = e.target.value;
  if (tipo === "todos") {
    mostrarCatalogo(corposCelestes);
  } else {
    mostrarCatalogo(corposCelestes.filter(c => c.tipo === tipo));
  }
});

document.getElementById("busca").addEventListener("input", (e) => {
  const termo = e.target.value.toLowerCase();
  mostrarCatalogo(corposCelestes.filter(c => c.nome.toLowerCase().includes(termo)));
});

function abrirModal(corpo) {
  document.getElementById("modalTitulo").textContent = corpo.nome;
  document.getElementById("modalDescricao").textContent = corpo.descricao;
  document.getElementById("modalImagem").src = corpo.imagem;
  document.getElementById("modal").style.display = "flex";
}

document.getElementById("fecharModal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

/* SIMULADOR */

const planetas = [{
    nome: "Mercúrio",
    distancia: 58
  },
  {
    nome: "Vênus",
    distancia: 108
  },
  {
    nome: "Terra",
    distancia: 150
  },
  {
    nome: "Marte",
    distancia: 228
  },
  {
    nome: "Júpiter",
    distancia: 778
  },
  {
    nome: "Saturno",
    distancia: 1427
  },
  {
    nome: "Urano",
    distancia: 2871
  },
  {
    nome: "Netuno",
    distancia: 4495
  }
];

function mostrarDistancias(planetaSelecionado) {
  const container = document.getElementById("graficoDistancia");
  container.innerHTML = "";

  const fator = 0.08;

  planetas.forEach(planeta => {
    const barraWrapper = document.createElement("div");
    barraWrapper.className = "barra-wrapper";

    const label = document.createElement("span");
    label.className = "label";
    label.textContent = planeta.nome;

    const barra = document.createElement("div");
    barra.className = "barra";
    barra.style.width = "0px";

    const distancia = document.createElement("span");
    distancia.className = "distancia";
    distancia.textContent = planeta.distancia + " milhões km";

    barraWrapper.appendChild(label);
    barraWrapper.appendChild(barra);
    barraWrapper.appendChild(distancia);
    container.appendChild(barraWrapper);

    setTimeout(() => {
      barra.style.width = (planeta.distancia * fator) + "px";
      if (planeta.nome === planetaSelecionado) {
        barra.classList.add("selecionado");
      }
    }, 150);
  });
}

mostrarDistancias("");

document.getElementById("planetaSelect").addEventListener("change", (e) => {
  mostrarDistancias(e.target.value);
});