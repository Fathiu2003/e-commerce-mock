// Simple mock cart functionality
const buttons = document.querySelectorAll('.product-card button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Added to cart! (Demo)');
  });
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! (Demo)');
});
