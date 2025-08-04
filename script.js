/* CARROSSEL */

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.getElementById('nextBtn').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
});

document.getElementById('prevBtn').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
});