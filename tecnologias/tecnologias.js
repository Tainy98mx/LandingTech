const contenedorTech = document.getElementById('tecnologias');

if (contenedorTech) {
  contenedorTech.innerHTML = `
    <section class="seccion">
      <div class="contenedor">
        <h2 class="titulo-seccion">¿Qué creamos con cada tecnología?</h2>
        <p class="descripcion-seccion">Te explicamos de forma sencilla para qué usamos cada herramienta en el desarrollo de tu proyecto.</p>

        <div class="grid-tecnologias">
          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-filetype-html"></i></div>
            <h4>HTML5</h4>
            <span class="subtitulo-tech">Estructura base</span>
            <p>Crea el esqueleto y los textos de tu página para que la información esté bien organizada.</p>
          </div>

          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-filetype-css"></i></div>
            <h4>CSS3</h4>
            <span class="subtitulo-tech">Diseño visual</span>
            <p>Crea la apariencia atractiva, colores claros y adapta la pantalla a cualquier tamaño de celular.</p>
          </div>

          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-filetype-js"></i></div>
            <h4>JavaScript</h4>
            <span class="subtitulo-tech">Interactividad real</span>
            <p>Crea calculadoras automáticas, botones interactivos y validaciones inmediatas en formularios.</p>
          </div>

          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-braces"></i></div>
            <h4>React</h4>
            <span class="subtitulo-tech">Pantallas modernas</span>
            <p>Crea aplicaciones web ultra rápidas que muestran datos al instante sin recargar la página.</p>
          </div>

          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-hdd-network"></i></div>
            <h4>Node.js</h4>
            <span class="subtitulo-tech">Servidor y lógica</span>
            <p>Crea el motor interno que procesa las compras, envía correos y conecta con la base de datos.</p>
          </div>

          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-database"></i></div>
            <h4>Bases de Datos</h4>
            <span class="subtitulo-tech">Almacén seguro</span>
            <p>Crea registros protegidos donde se guardan cuentas de clientes, compras y catálogos de productos.</p>
          </div>

          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-credit-card"></i></div>
            <h4>APIs de Pago</h4>
            <span class="subtitulo-tech">Cobros en línea</span>
            <p>Crea conexiones seguras para que tus clientes puedan pagar con tarjeta bancaria o transferencias.</p>
          </div>

          <div class="tarjeta-tech">
            <div class="icono-tech"><i class="bi bi-git"></i></div>
            <h4>Git & GitHub</h4>
            <span class="subtitulo-tech">Seguridad del código</span>
            <p>Crea respaldos del código en todo momento para asegurar que tu sistema nunca pierda cambios.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
