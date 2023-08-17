setTimeout(() => {
  window.sr = ScrollReveal({ reset: false });

  sr.reveal("header", { duration: 3000 });
  sr.reveal(".card__odonto", { duration: 3000 });
  sr.reveal(".title__bw__odonto", {
    duration: 2000,
    easing: "ease-in-out",
  });
  sr.reveal(".subtitulo__bw__card, .text__bw__card ", {
    duration: 3000,
  });

  // Oral Problems
  sr.reveal(".bw__dentista1", { duration: 2000 });
  sr.reveal(
    ".titleOralproblems, .text__one__problem, .text__two__problem, .link__oral__problem",
    { duration: 3000 }
  );
  // Fim Oral problems

  //O que fazemos
  sr.reveal(".title__oque__fazemos", {
    origin: "right",
    duration: 1000,
    easing: "ease-in-out",
  });
  sr.reveal(".text__oque__fazemos, .card_oque_fazemos", { duration: 3000 });
  //Fim O que fazemos

  //Equipe bw
  sr.reveal(
    ".title__equipe__bw, .text__equipe__bw, .card__equipe__bw, .btn__avaliation",
    { duration: 3000 }
  );

  //Fim equipe bw

  //plans
  sr.reveal(".title-plans, .text-plans", { duration: 3000 });

  sr.reveal(".cards-plans:nth-child(1)", { duration: 3000 });
  sr.reveal(".cards-plans:nth-child(2)", { duration: 4000 });
  sr.reveal(".cards-plans:nth-child(3)", { duration: 5000 });

  //avaliation
  sr.reveal(".number__avaliation:nth-child(1)", { duration: 3000 });
  sr.reveal(".number__avaliation:nth-child(2)", { duration: 4000 });
  sr.reveal(".number__avaliation:nth-child(3)", { duration: 5000 });
  sr.reveal(".number__avaliation:nth-child(4)", { duration: 5000 });

  //news
}, 3000);
