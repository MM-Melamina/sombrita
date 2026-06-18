// main.js - Sombrita Website Interactivity

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-btn');
  
  // 1. Manejo del Tema Claro/Oscuro (Luz / Sombra)
  // Por defecto el sitio usa el tema oscuro (sombra)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  
  // Escucha el evento de clic en el botón de alternancia
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      // Feedback opcional de consola
      console.log(`Tema cambiado a: ${newTheme}`);
    });
  }

  // 2. Efectos adicionales de scroll (Ejemplo base)
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.padding = '10px 0';
      header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.padding = '0';
      header.style.boxShadow = 'none';
    }
  });
});
