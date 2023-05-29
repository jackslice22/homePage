window.addEventListener("DOMContentLoaded", () => {
  const car = document.getElementById("car");
  const girl = document.getElementById("girl");
  const carSound = document.getElementById("carSound");

  // Play the car sound when the page loads
  carSound.play();

  window.addEventListener("scroll", () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    car.style.left = `${scrollPercentage * 0.8}%`;
    girl.style.left = `${scrollPercentage * 0.4}%`;
  });
});

window.onload = () => {
  const car = document.getElementById("car");
  const girl = document.getElementById("girl");

  // Move the car and girl into position after a delay
  setTimeout(() => {
    car.style.left = "20%";
    girl.style.left = "5%";
  }, 100);
};
