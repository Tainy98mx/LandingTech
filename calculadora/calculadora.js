const contenedorCalculadora = document.getElementById('calculadora');

if (contenedorCalculadora) {
  contenedorCalculadora.innerHTML = `
    <section class="seccion seccion-fondo">
      <div class="contenedor">
        <h2 class="titulo-seccion">Calculadora de Presupuesto</h2>
        <p class="descripcion-seccion">Calcula el costo aproximado de tu sitio web según la cantidad de páginas que necesitas.</p>

        <div class="caja-calculadora">
          <div class="fila-control">
            <label for="cantidad-paginas">Cantidad de páginas:</label>
            <input type="number" id="cantidad-paginas" min="1" max="50" value="5">
          </div>

          <div class="fila-info">
            <span>Precio por página:</span>
            <strong>$800</strong>
          </div>

          <div class="resultado-caja">
            <span class="texto-resultado">Costo estimado:</span>
            <div class="precio-final" id="costo-estimado">$4,000</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

const inputPaginas = document.getElementById('cantidad-paginas');
const elementoResultado = document.getElementById('costo-estimado');

if (inputPaginas) {
  inputPaginas.addEventListener('input', function() {
    const paginas = parseInt(inputPaginas.value, 10);
    const precioPorPagina = 800;

    if (paginas > 0) {
      const total = paginas * precioPorPagina;
      if (elementoResultado) {
        elementoResultado.textContent = '$' + total.toLocaleString();
      }
    } else {
      if (elementoResultado) {
        elementoResultado.textContent = '$0';
      }
    }
  });
}
