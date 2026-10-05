const contenedorServicios = document.getElementById('servicios');

if (contenedorServicios) {
  contenedorServicios.innerHTML = `
    <section class="seccion seccion-fondo">
      <div class="contenedor">
        <h2 class="titulo-seccion">Servicios que ofrecemos</h2>
        <p class="descripcion-seccion">Creamos soluciones digitales prácticas para que cualquier negocio pueda vender y operar por internet.</p>

        <div class="grid-servicios">
          <div class="tarjeta-servicio">
            <div class="icono-servicio">
              <i class="bi bi-window"></i>
            </div>
            <h3>Páginas Web y Landing Pages</h3>
            <p>Creamos sitios web para presentar tu marca, explicar tus productos y conseguir nuevos clientes de forma rápida y atractiva.</p>
          </div>

          <div class="tarjeta-servicio">
            <div class="icono-servicio">
              <i class="bi bi-phone"></i>
            </div>
            <h3>Aplicaciones Móviles</h3>
            <p>Creamos aplicaciones para celulares Android e iPhone para que tus clientes puedan comprar y pedir servicios desde su bolsillo.</p>
          </div>

          <div class="tarjeta-servicio">
            <div class="icono-servicio">
              <i class="bi bi-gear-wide-connected"></i>
            </div>
            <h3>Sistemas a Medida</h3>
            <p>Creamos programas para ordenar tu negocio: control de inventarios, reportes de ventas automáticos y cobros con tarjeta.</p>
          </div>

          <div class="tarjeta-servicio">
            <div class="icono-servicio">
              <i class="bi bi-cloud-check"></i>
            </div>
            <h3>Mantenimiento y Nube</h3>
            <p>Aseguramos que tu página web esté siempre activa en internet, con copias de seguridad y máxima velocidad de carga.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

if (typeof gsap !== 'undefined') {
  gsap.from('.tarjeta-servicio', {
    scrollTrigger: '#servicios',
    duration: 0.8,
    y: 35,
    opacity: 0,
    stagger: 0.15
  });
}
