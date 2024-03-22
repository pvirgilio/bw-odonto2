// function obterParametroDaURL(parametro) {
//     const url = window.location.search;
//     const urlParams = new URLSearchParams(url);
//     return urlParams.get(parametro);
// }
// const parametroValor = obterParametroDaURL('id');
//   console.log(parametroValor);

// Usando localStorage

import { noticiasRecentesApi, converteData } from "./noticias.js";

const url = window.location.search;
const urlParams = new URLSearchParams(url);
const urlId = urlParams.get("id");
console.log(urlId);

const urlPg = window.location.search;
const urlPgParams = new URLSearchParams(urlPg);
const urlPage = urlPgParams.get("page");
console.log(urlPage);

async function verificaApi(id, page) {
  const conexao = await fetch(
    `https://bwodonto.onrender.com/v1/api/noticias/list?page=${page}`
  );
  const noticiasResponse = await conexao.json();
  var noticia = noticiasResponse.response;
  console.log(noticia);
  const noticiaSelecionada = noticia.find((noticia) => noticia.id == id);
  console.log(noticiaSelecionada);
  exibirBanner(noticiaSelecionada);
  exibirNoticias(noticiaSelecionada);
  noticiasRecentesApi();
}

verificaApi(urlId, urlPage);

//

function exibirBanner(noticias) {
  const bannerSection = document.querySelector(".banner__postagem--container");
  const data = converteData(noticias);
  bannerSection.innerHTML += `
        <div class="banner__postagem--conteudo">
            <h2 class="banner__postagem--titulo">${noticias.titulo}</h2>
            <p class="banner__postagem--data">${data}</p>
        </div>
        `;
}

function exibirNoticias(noticias) {
  const noticiaSection = document.querySelector(".postagem__container");
  noticiaSection.innerHTML += `
        <div class="postagem__container--conteudo">
              <img src="data:image/png;base64,${noticias.file}" alt="Dentista mostrando 4 mitos dos implante dentarios" class="postagem__imagem">
              <p class="postagem__texto">${noticias.conteudo}</p>
            </div>
            <div class="postagem__container--tags">
              <i class="fa-solid fa-tag tags__icone"></i>
              <ul class="tags__lista">
                <li class="tags__item"><a href="#" class="tags__link">Notícias</a></li>
                <li class="tags__item"><a href="#" class="tags__link">Cuidado</a></li>
                <li class="tags__item"><a href="#" class="tags__link">Dental</a></li>
                <li class="tags__item"><a href="#" class="tags__link">Dentista</a></li>
                <li class="tags__item"><a href="#" class="tags__link">Implante</a></li>
                <li class="tags__item"><a href="#" class="tags__link">Dentista</a></li>
              </ul>
            </div>
            `;
}
// verificaId()
