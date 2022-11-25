const queryId = (id) => document.getElementById(`${id}`);
const body = document.body;
const slides = document.querySelectorAll(".slide");

let active = 0;

const bgBody = () => {
  body.style.backgroundImage = slides[active].style.backgroundImage;
};

bgBody();

const activeSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[active].classList.add("active");
};

queryId("right").addEventListener("click", () => {
  active++;
  if (active > slides.length - 1) {
    active = 0;
  }

  bgBody();
  activeSlide();
});

queryId("left").addEventListener("click", () => {
  active--;
  if (active < 0) {
    active = slides.length - 1;
  }

  bgBody();
  activeSlide();
});
