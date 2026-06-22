// main.js - Sombrita Website Interactivity

document.addEventListener('DOMContentLoaded', () => {
  // 1. Alternar Menú de Navegación Móvil
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileToggle.classList.toggle('active');
      mainNav.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        mainNav.classList.remove('active');
      }
    });
  }

  // 2. Manejo de submenú desplegable (Dropdown) en Móviles
  const dropdown = document.querySelector('.dropdown');
  const dropdownToggle = document.querySelector('.dropdown-toggle');

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener('click', (e) => {
      // Solo controlar el despliegue mediante clic en pantallas móviles (menores a 768px)
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
      }
    });
  }

  // 3. Efectos de Scroll en el Header
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.style.boxShadow = '0 10px 30px rgba(10, 28, 63, 0.08)';
      } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.02)';
      }
    }
  });
});
