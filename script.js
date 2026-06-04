// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Toggle specs table
function toggleSpecs(btn) {
  const wrapper = btn.nextElementSibling;
  const isOpen = wrapper.classList.contains('open');
  wrapper.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  btn.innerHTML = isOpen
    ? '▾ &nbsp; Технически характеристики'
    : '▴ &nbsp; Скрий характеристики';
}
