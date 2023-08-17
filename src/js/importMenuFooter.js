function importMenuFooter() {
  const headerMain = document.querySelector("header");
  const footerMain = document.querySelector("footer");

  headerMain.innerHTML = `
  <a style="text-decoration: none;" href="/index.html">
      <div class="logo__header">
        <img class="logo__bw" src="/img/odontoLogo.png" alt="" />
        <h1 class="text__logo"><span class="bw__text">BW</span> odonto</h1>
      </div>
  </a>
<nav class="menu">
  <div onclick="menuHeader()" class="container-btn-menu">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  </div>
  <ul class="container__menu">
      <div onclick="closeBtn()" class="container-closeBtn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>

    </div>
    <li><a href="/index.html">Home</a></li>
    <li><a href="/pages/aboutservices.html">Sobre nós</a></li>
    <li><a href="/pages/contato.html">Contato</a></li>
    <li><a href="/pages/noticias.html">Notícias</a></li>
    <li><a href="/pages/noticias.html">Login</a></li>
  </ul>
</nav>

<div class="contato__btn__header">
  <a href="">Entre em contato</a>
</div>


`;

  footerMain.innerHTML = `
  <section class="footer__container">
    <section class="footer__informacoes--container">
      <h3 class="footer__informacoes--titulo"><span class="bw--span">bw</span> odonto</h3>
      <address class="informacoes__endereco--container">
        <p class="informacoes__endereco"> Av. Industrial Gil Martins, N° 2345 - Cidade Nova, Teresina - PI.</p>
        <p class="informacoes__endereco--tel">Contato: (86)99816-3833</p>
      </address>
      <div class="footer__informacoes--redes">
        <ul class="informacoes__redes--lista">
          <li class="informacoes__redes--item">
            <a href="#" class="informacoes__redes--link instagram"><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li class="informacoes__redes--item">
            <a href="#" class="informacoes__redes--link facebook"><i class="fa-brands fa-square-facebook"></i></i></a>
          </li>
          <li class="informacoes__redes--item">
            <a href="#" class="informacoes__redes--link email"><i class="fa-regular fa-envelope"></i></a>
          </li>
          <li class="informacoes__redes--item">
            <a href="#" class="informacoes__redes--link whatsapp"><i class="fa-brands fa-whatsapp"></i></a>
          </li>
        </ul>
      </div>
    </section>
  <section class="foooter__explorar--container">
    <h3 class="foooter__explorar--titulo">Explorar</h3>
    <ul class="foooter__explorar--lista">
      <li class="foooter__explorar--item"><a href="/index.html" class="foooter__explorar--link">Home</a></li>
      <li class="foooter__explorar--item"><a href="/pages/aboutservices.html" class="foooter__explorar--link">Sobre Nós</a></li>
      <li class="foooter__explorar--item"><a href="/pages/contato.html" class="foooter__explorar--link">Contate-nos</a></li>
      <li class="foooter__explorar--item"><a href="/pages/noticias.html" class="foooter__explorar--link">Notícias</a></li>
      <li class="foooter__explorar--item"><a href="#" class="foooter__explorar--link">Login</a></li>
    </ul>
  </section>
  <section class="footer__links--container">
    <h3 class="footer__links--titulo">Links Rápidos</h3>
    <ul class="footer__links--lista">
      <li class="footer__links--item"><a href="#" class="footer__links--link">Notícias e blog</a></li>
      <li class="footer__links--item"><a href="#" class="footer__links--link">perguntas frequentes</a></li>
      <li class="footer__links--item"><a href="#" class="footer__links--link">Médicos</a></li>
      <li class="footer__links--item"><a href="#" class="footer__links--link">Termos de serviços</a></li>
    </ul>
  </section>
  <section class="footer__newsletter--container">
    <h3 class="footer__newsletter--titulo">Assine o Newsletter</h3>
    <p class="footer__newsletter--texto">Inscreva-se para receber as últimas notícias.</p>
    <fieldset class="newsletter__email--container">
      <input class="newsletter__email--input" placeholder="Seu endereço de email" type="email" name="email" id="email">
      <input class="newsletter__email--submit" type="submit" value="&#10132;">
    </fieldset>
  </section>
</section>
<div class="footer__linha"></div>
<p class="footer__copy">Direitos autorais &copy; 2023 SavantWeb. Desenvolvido por SavantWeb.</p>


`;
}

importMenuFooter();

function menuHeader() {
  const content = document.querySelector("#content");
  const btnMenu = document.querySelector(".container-btn-menu");
  const corpo = document.querySelector("body");
  const menu = document.querySelector(".container__menu");
  const closeBtn = document.querySelector(".container-closeBtn");

  menu.classList.remove("close-menu");
  menu.classList.add("active-menu");
  corpo.style.overflow = "hidden";
}

function closeBtn() {
  const menu = document.querySelector(".container__menu");
  const corpo = document.querySelector("body");

  menu.classList.remove("active-menu");
  menu.classList.add("close-menu");
  corpo.style.overflow = "auto";
}
