// Função para exibir o título, parágrafo e subparágrafo no DOM
function exibirConteudo(data) {
  const title = document.querySelector("#titleOralproblems");
  const paragrafo = document.querySelector("#paragOral");
  const subParagrafo = document.querySelector("#subParag-oral");

  title.textContent = data.titulo;
  paragrafo.textContent = data.descricao;
  subParagrafo.textContent = data.conteudo;
}

// Função para exibir a imagem no DOM
function exibirImagem(data) {
  const imgP = document.querySelector(".bw__dentista1");
  imgP.src = `data:image/${data.formato};base64,${data.image}`;
}

// Função para lidar com erros de requisição da API
function exibirErro(error) {
  console.log("Ocorreu um erro:", error);
  // Exibir mensagem de erro no DOM ou realizar outras ações apropriadas
}

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api-kwi5.onrender.com/v1/api/noticia/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.image);
      exibirConteudo(data);
      exibirImagem(data);
    })
    .catch((error) => {
      exibirErro(error);
    });
});
