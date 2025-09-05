let index = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

document.querySelector(".next").onclick = () => {
  index++;
  if (index >= slides.length) index = 0; // loop back to first
  track.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
  index--;
  if (index < 0) index = slides.length - 1; // go to last
  track.style.transform = `translateX(-${index * 100}%)`;
};

// Accordion Toggle

const accordions = document.querySelectorAll(".accordion-item");

accordions.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  const btn = item.querySelector(".accordion-btn");

  header.addEventListener("click", () => {
    accordions.forEach((i) => {
      if (i !== item) {
        i.classList.remove("open");

        i.querySelector(".accordion-btn").classList.remove("active");

        i.querySelector(".accordion-btn").textContent = "˅";
      }
    });

    item.classList.toggle("open");

    btn.classList.toggle("active");

    btn.textContent = item.classList.contains("open") ? "^" : "˅";
  });
});
