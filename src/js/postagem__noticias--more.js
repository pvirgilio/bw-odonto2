async function buscaNoticias(idPagina) {
    const conexao = await fetch(`https://api-kwi5.onrender.com/v1/api/noticias/list?page=${idPagina}`);
    const conexaoConvertida = await conexao.json();
    const noticias = conexaoConvertida.response;
    return {
        noticias: noticias,
        totalPaginas: conexaoConvertida.total_paginas
    };
}

async function percorrerTodasPaginas() {
    let todasNoticias = [];
    let idPagina = 1;
    let { totalPaginas } = await buscaNoticias(idPagina);

    while (idPagina <= totalPaginas) {
        const { noticias, totalPaginas: paginas } = await buscaNoticias(idPagina);
        todasNoticias.push(...noticias);
        totalPaginas = paginas;
        idPagina++;
    }

    return todasNoticias;
}

percorrerTodasPaginas().then(todasNoticias => {
    console.log(todasNoticias); // Todas as notícias de todas as páginas
});