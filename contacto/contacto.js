const contenedorContacto = document.getElementById('contacto');

if (contenedorContacto) {
  contenedorContacto.innerHTML = `
    <section class="seccion">
      <div class="contenedor">
        <h2 class="titulo-seccion">Hablemos de tu proyecto</h2>
        <p class="descripcion-seccion">Envíanos un mensaje y te responderemos para darte asesoría personalizada.</p>

        <div class="caja-formulario">
          <form id="formulario-contacto">
            <div class="campo-grupo">
              <label for="nombre">Nombre completo:</label>
              <input type="text" id="nombre" placeholder="Tu nombre" required>
            </div>

            <div class="campo-grupo">
              <label for="correo">Correo electrónico:</label>
              <input type="email" id="correo" placeholder="correo@ejemplo.com" required>
            </div>

            <div class="campo-grupo">
              <label for="tipo-proyecto">¿Qué necesitas crear?</label>
              <select id="tipo-proyecto">
                <option value="web">Página web o Landing Page</option>
                <option value="app">Aplicación para celulares</option>
                <option value="sistema">Sistema de gestión interna</option>
                <option value="otro">Otro requerimiento</option>
              </select>
            </div>

            <div class="campo-grupo">
              <label for="mensaje">Mensaje:</label>
              <textarea id="mensaje" rows="4" placeholder="Explícanos brevemente tu idea..." required></textarea>
            </div>

            <button type="submit" class="boton-azul boton-ancho" id="btn-enviar-contacto">
              <i class="bi bi-send"></i> Enviar Mensaje
            </button>

            <div id="mensaje-exito" class="alerta-exito">
              ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

const formulario = document.getElementById('formulario-contacto');
const mensajeExito = document.getElementById('mensaje-exito');

if (formulario) {
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    if (mensajeExito) {
      mensajeExito.style.display = 'block';
      formulario.reset();
    }
  });
}
