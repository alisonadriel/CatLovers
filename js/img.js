// Arrays contendo os caminhos das imagens antigas e novas
const oldImages = [
  "img/orange-cat3.jpg",
  "img/orange-cat2.jpg",
  "img/catt4.jpg",
];

const newImages = ["img/catjs3.jpg", "img/catjs2.jpg", "img/catjs1.jpg"];

// Variáveis para rastrear as imagens atuais e as próximas
let currentImages = oldImages;
let nextImages = newImages;

// Função para trocar as imagens
function changeImages() {
  const imgElements = document.querySelectorAll(".cat-img img");

  // Remove a classe 'active' de todas as imagens
  imgElements.forEach((img) => {
    img.classList.remove("active");
  });

  setTimeout(() => {
    // Atualiza o src das imagens
    imgElements.forEach((img, imgIndex) => {
      img.src = nextImages[imgIndex];
    });

    // Adiciona a classe 'active' a todas as imagens
    setTimeout(() => {
      imgElements.forEach((img) => {
        img.classList.add("active");
      });
    }, 50);

    // Troca os arrays currentImages e nextImages
    [currentImages, nextImages] = [nextImages, currentImages];
  }, 1000);
}

// Troca as imagens a cada 4 segundos
setInterval(changeImages, 4000);

// Chama a função changeImages inicialmente para definir as imagens
changeImages();
