const elementoContador = document.querySelectorAll(".contador");

// Função para verificar se o elemento está visível na janela de visualização
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para iniciar a contagem
function startCounting(elemento) {
  let contador = 1;
  const intervalo = setInterval(() => {
    elemento.textContent = `+${contador}`;
    if (contador === 100) {
      clearInterval(intervalo); // Parar a contagem ao atingir 100
    }
    contador++;
  }, 40);
}

// Ouvinte de evento para o evento de rolagem
window.addEventListener("scroll", function () {
  elementoContador.forEach((elemento) => {
    // Verificar se o elemento está visível e se ainda não começou a contagem
    if (isElementInViewport(elemento) && !elemento.hasStarted) {
      elemento.hasStarted = true; // Marcar o elemento como iniciado para evitar múltiplas contagens
      startCounting(elemento);
    }
  });
});
