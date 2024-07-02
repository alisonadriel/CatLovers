// Seleciona o botão do menu pelo ID
const btnMenu = document.getElementById("btn");

// Função para alternar o menu
function toggleMenu(event) {
  // Previne o comportamento padrão no evento touchstart
  if (event.type === "touchstart") event.preventDefault();

  // Seleciona o elemento de navegação pelo ID
  const nav = document.getElementById("nav");
  
  // Alterna a classe 'active' no elemento de navegação
  nav.classList.toggle("active");

  // Verifica se o menu está ativo
  const active = nav.classList.contains("active");
  
  // Define o atributo 'aria-expanded' com base no estado do menu
  event.currentTarget.setAttribute("aria-expanded", active);

  // Atualiza o rótulo 'aria-label' com base no estado do menu
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

// Adiciona eventos de clique e toque ao botão do menu
btnMenu.addEventListener("click", toggleMenu);
btnMenu.addEventListener("touchstart", toggleMenu);
