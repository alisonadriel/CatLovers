const oldImages = [
  "img/orange-cat3.jpg",
  "img/orange-cat2.jpg",
  "img/catt4.jpg"
];

const newImages = [
  "img/catjs3.jpg",
  "img/catjs2.jpg",
  "img/catjs1.jpg"
];

let currentImages = oldImages; 
let nextImages = newImages; 

function changeImages() {
  const imgElements = document.querySelectorAll(".cat-img img");

  
  imgElements.forEach(img => {
    img.classList.remove('active');
  });

  
  setTimeout(() => {
    imgElements.forEach((img, imgIndex) => {
      img.src = nextImages[imgIndex];
    });

    
    setTimeout(() => {
      imgElements.forEach(img => {
        img.classList.add('active');
      });
    }, 50); 
    
    [currentImages, nextImages] = [nextImages, currentImages];
  }, 1000); 
}


setInterval(changeImages, 4000);


changeImages();
