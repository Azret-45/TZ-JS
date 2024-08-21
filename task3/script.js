const lights = document.querySelectorAll(".light");
let activeIndex = 0;

function updateLights() {
  lights.forEach((light) => (light.style.background = "black"));

  if (activeIndex === 0) {
    lights[activeIndex].style.background = "red";
  } else if (activeIndex === 1) {
    lights[activeIndex].style.background = "yellow";
  } else if (activeIndex === 2) {
    lights[activeIndex].style.background = "green";
  }
}

lights.forEach((light) => {
  light.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % lights.length;
    updateLights();
  });
});

updateLights();
