const noticiaSection = document.querySelector(".noticias__container");
const asideSection = document.querySelector(".aside__post");
const btnPaginacaoSection = document.querySelector(
  ".noticias__navegacao--numero"
);
var noticias = [];
var objetoApiClicado;
// var idNoticia;

console.log(objetoApiClicado);

console.log(noticiaSection);
console.log(asideSection);

verificaApi(0);
noticiasRecentesApi();

function verificaApi(numeroPagina) {
  console.log(numeroPagina);

  fetch(
    `https://api-kwi5.onrender.com/v1/api/noticias/list?page=${numeroPagina}`
  )
    .then((response) => response.json())
    .then((data) => {
      noticias = data.response;
      console.log(data.pagina_atual);
      console.log(data.total_paginas);
      console.log(noticias);
      exibirNoticias(noticias, numeroPagina);
      // exibirNoticiasAside(noticias);
      exibirBtnPaginacao(data.total_paginas);
      clickbtn();
      // openNoticias(noticias);
      let paginaAtual = numeroPagina;
      console.log(paginaAtual);
    })
    .catch((erro) => {
      console.log(erro);
    });
}

export async function noticiasRecentesApi() {
  const conexao = await fetch("https://api-kwi5.onrender.com/v1/api/noticias");
  const numeroPagina = 1;
  const conexaoConvertida = await conexao.json();
  console.log(conexaoConvertida);
  exibirNoticiasAside(conexaoConvertida.response, numeroPagina);
}

function exibirNoticias(noticias, numeroPagina) {
  noticiaSection.innerHTML = "";
  noticias.forEach((elemento) => {
    console.log(elemento.id);
    const data = converteData(elemento);
    noticiaSection.innerHTML += `<div class="noticias__cards">
        <a href="/pages/noticias-postagem.html?id=${elemento.id}&page=${numeroPagina}" data-id="${elemento.id}" class="img__noticias--container">
          <img src="data:image/png;base64,${elemento.file}" alt="Dentistas fazendo um tratamento bucal em uma paciente" class="img__noticias--cards">
        </a>
        <div class="noticias__cards--conteudo">
          <a href="/pages/noticias-postagem.html?id=${elemento.id}&page=${numeroPagina}" data-id="${elemento.id}" class="cards__conteudo--containertitulo">
            <h3 class="cards__conteudo--titulo">${elemento.titulo}</h3>
          </a>
          <div class="cards__conteudo--info">
            <ul class="conteudo__info--lista">
              <li class="conteudo__info--item">${data}</li>
              
              <li class="conteudo__info--item">Bw odonto</li>
            </ul>
            <p class="conteudo__info--texto">${elemento.descricao}</p>
          </div>
          <a href="/pages/noticias-postagem.html?id=${elemento.id}&page=${numeroPagina}" data-id="${elemento.id}"  class="noticias__btn">Continue lendo</a>
        </div>`;
  });
}

export function converteData(elemento) {
  const dataApi = elemento.pub_date;
  const data = dataApi.split("T")[0];
  return data;
}

function exibirBtnPaginacao(numeroDePaginas) {
  btnPaginacaoSection.innerHTML = "";
  for (let i = 1; i <= numeroDePaginas; i++) {
    console.log(`btn ${i}`);
    btnPaginacaoSection.innerHTML += `
      <a href="/pages/noticias.html?pagina=${i}" class="noticias__navegacao" id="navegacao__numero" data-pag="${i}">${i}</a>
    `;
  }
}

function clickbtn() {
  const btnPage = document.querySelectorAll("[data-pag]");
  console.log(btnPage);
  btnPage.forEach((e) => {
    e.addEventListener("click", (event) => {
      event.preventDefault();
      console.log(e);
      let idbtn = e.getAttribute("data-pag");
      console.log(idbtn);
      verificaApi(idbtn);
      return idbtn;
    });
  });
}

export function exibirNoticiasAside(noticias, pagina) {
  asideSection.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    asideSection.innerHTML += `
        <div class="aside__post--card">
              <a href="/pages/noticias-postagem.html?id=${noticias[i].id}&page=${pagina}" data-id="${noticias[i].id}" class="post__card--imgcontainer">
                <img src="data:image/png;base64,${noticias[i].file}" alt="Dentista mostrando 4 mitos dos implante dentarios" class="post__card--img">
              </a>
              <span class="post__card--data">Junho 7,2023</span>
              <a href="/pages/noticias-postagem.html?id=${noticias[i].id}&page=${pagina}" data-id="${noticias[i].id}" class="post__card--titulo">${noticias[i].titulo}</a>
            </div>
        `;
  }
}
