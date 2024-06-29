const btnMenu = document.getElementById('btn');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);