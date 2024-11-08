const imgSlider = document.querySelector(".img-slider");
const items = document.querySelectorAll;

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

let indexSlider = 0;

const slider = () => {
  imgSlider.style.transform = `rotate(${indexSlider * 60}deg)`;

  items.forEach((item) => {
    item.style.transform = `rotate(${indexSlider * -60}deg)`;
  });
};

nextBtn.addEventListener("click", () => {
  indexSlider++;

  slider();
});

prevBtn.addEventListener("click", () => {
  indexSlider--;

  slider();
});
slider;
