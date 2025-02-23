const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider__image");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const allImages = document.querySelectorAll(".slider__image");

let index = 1;
const imageWidth = images[0].clientWidth;

const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, images[0]);

slider.style.transform = `translateX(${-imageWidth}px)`;

const updateSlider = () => {
  slider.style.transition = "transform 0.5s ease-in-out";
  slider.style.transform = `translateX(${-index * imageWidth}px)`;
};

rightArrow.addEventListener("click", () => {
  if (index >= allImages.length - 1) return;
  index++;
  updateSlider();
  setTimeout(() => {
    if (index === allImages.length - 1) {
      slider.style.transition = "none";
      index = 1;
      slider.style.transform = `translateX(${-index * imageWidth}px)`;
    }
  }, 500);
});

leftArrow.addEventListener("click", () => {
  if (index <= 0) return;
  index--;
  updateSlider();
  setTimeout(() => {
    if (index === 0) {
      slider.style.transition = "none";
      index = allImages.length - 2;
      slider.style.transform = `translateX(${-index * imageWidth}px)`;
    }
  }, 500);
});
