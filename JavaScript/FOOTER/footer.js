// footer.js
function createFooter() {
  const footer = document.createElement('footer');
  footer.innerHTML = `
      <div class="footer-content">
          <!-- Contenido del footer -->
          <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      </div>
  `;
  document.body.appendChild(footer);
}

// Llama a la función para crear el footer cuando se carga la página
window.addEventListener('load', createFooter);
