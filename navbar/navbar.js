const contenedorNavbar = document.getElementById('navbar');

if (contenedorNavbar) {
  contenedorNavbar.innerHTML = `
    <nav class="barra-navegacion">
      <div class="contenedor contenedor-barra">
        <a href="#hero" class="logotipo">
          <i class="bi bi-code-slash"></i>
          <span>Nova<strong>Dev</strong></span>
        </a>

        <button class="boton-menu" id="btn-menu">
          <i class="bi bi-list"></i>
        </button>

        <div class="enlaces-menu" id="menu-navegacion">
          <a href="#hero">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#estadisticas">Estadísticas</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#calculadora">Calculadora</a>
          <a href="#contacto" class="boton-azul">Contacto</a>
        </div>
      </div>
    </nav>
  `;
}

const botonMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu-navegacion');

if (botonMenu) {
  botonMenu.addEventListener('click', function() {
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'flex';
    }
  });
}
