const contenedorFooter = document.getElementById('footer');

if (contenedorFooter) {
  contenedorFooter.innerHTML = `
    <footer class="pie-pagina">
      <div class="contenedor contenedor-pie">
        <div class="columna-pie">
          <div class="logotipo-pie">
            <i class="bi bi-code-slash"></i>
            <span>Nova<strong>Dev</strong></span>
          </div>
          <p class="texto-pie">Desarrollamos soluciones de software y páginas web claras y fáciles de usar.</p>
        </div>

        <div class="columna-pie">
          <h4>Navegación</h4>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#tecnologias">Tecnologías</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#calculadora">Calculadora</a></li>
          </ul>
        </div>

        <div class="columna-pie">
          <h4>Contacto</h4>
          <p><i class="bi bi-envelope"></i> hola@novadev.com</p>
          <p><i class="bi bi-telephone"></i> +52 (55) 1234-5678</p>
          <p><i class="bi bi-geo-alt"></i> Ciudad de México</p>
        </div>
      </div>

      <div class="barra-derechos">
        <div class="contenedor">
          <p>&copy; 2026 NovaDev. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;
}
