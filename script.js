const projects = document.getElementById("projects");

projects.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "https://github.com/cleilsonalvino?tab=repositories";
  }, 1000);
});

document.addEventListener('DOMContentLoaded', function () {
ScrollReveal().reveal('.fade-up', {
  origin: 'bottom', // Direção de onde o elemento aparece
  distance: '50px', // Distância que o elemento se move
  duration: 800, // Duração da animação em milissegundos
  delay: 100, // Atraso entre animações
  easing: 'ease-in-out', // Estilo da animação
  interval: 200, // Intervalo entre animações de elementos semelhantes
  reset:true
});

ScrollReveal().reveal('.fade-left', {
  origin: 'left', // Direção de onde o elemento aparece
  distance: '50px', // Distância que o elemento se move
  duration: 800, // Duração da animação em milissegundos
  delay: 400, // Atraso entre animações
  easing: 'ease-in-out', // Estilo da animação
  interval: 200, // Intervalo entre animações de elementos semelhantes
  reset:true
});
})