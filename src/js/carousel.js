function carousel() {
  fetch("https://api-kwi5.onrender.com/v1/api/noticias")
    .then((response) => response.json())
    .then((data) => {
      const carousel = document.getElementById("myCarousel");

      data.response.slice(0, 5).forEach((el) => {
        carousel.innerHTML += `
        
          <div class="card-services">
            <a href="/pages/noticias-postagem.html?id=${el.id}&page=0">
              <img
                class="img-card-services"
                src="data:image/jpeg;base64,${el.file}"
                alt=""
              />
              <div class="text-card-services">
                <h4>Dentista</h4>
                <h3>${el.titulo}</h3>
                <p>
                  ${el.conteudo}
                </p>
              </div>
              </a>
          </div>
        

        `;
      });

      // Inicializando o carrossel após o preenchimento do conteúdo
      $(document).ready(function () {
        $(".carousel").slick({
          // Opções vão aqui
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          autoplay: true,
          prevArrow: '<button type="button" class="slick-prev"></button>',
          nextArrow: '<button type="button" class="slick-next"></button>',
          responsive: [
            {
              breakpoint: 1024, // para tela de tamanho médio
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600, // para tablets
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480, // para dispositivos móveis
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      });
    });
}

carousel();
