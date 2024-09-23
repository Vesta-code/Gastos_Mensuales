let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionesGastos = [];
let gastoEnEdicion = -1;

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value.trim();
    let valorGasto = parseFloat(document.getElementById('valorGasto').value);
    let descripcionGasto = document.getElementById('descripcionGasto').value.trim();

    if (!nombreGasto || isNaN(valorGasto) || valorGasto <= 0) {
        alert("Por favor, ingresa un nombre y un valor de gasto válido.");
        return;
    }

    if (valorGasto > 150) {
        alert("Advertencia: Estás registrando un gasto mayor a $150.");
    }

    if (gastoEnEdicion >= 0) {
        listaNombresGastos[gastoEnEdicion] = nombreGasto;
        listaValoresGastos[gastoEnEdicion] = valorGasto;
        listaDescripcionesGastos[gastoEnEdicion] = descripcionGasto;
        document.getElementById('botonFormulario').innerText = 'Agregar Gasto';
        gastoEnEdicion = -1;
    } else {
        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionesGastos.push(descripcionGasto);
    }

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
  
    let htmlLista = '';
    let totalGastos = 0;
  
    listaNombresGastos.forEach((nombre, posicion) => {
      const valorDolares = listaValoresGastos[posicion];
      const descripcionGasto = listaDescripcionesGastos[posicion];
      totalGastos += valorDolares;
  
      htmlLista += `
        <li>
          <div>
            <strong>${nombre}</strong> - USD${valorDolares})
          </div>
          <div class="buttons">
            </div>
        </li>`;
    });
  

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos;
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    listaDescripcionesGastos.splice(posicion, 1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcionGasto').value = listaDescripcionesGastos[posicion];
    document.getElementById('botonFormulario').innerText = 'Actualizar Gasto';
    gastoEnEdicion = posicion;


  
  function validarGasto() {
    const gastoInput = document.getElementById("gasto");
    const gastoDolares = parseFloat(gastoInput.value);
      alert("¡Atención! El gasto supera el límite de $150 dólares.");
    }


function clickBoton() {
    const nombreGasto = document.getElementById("nombreGasto").value;
    const valorDolares = parseFloat(validarGasto.value);
    const descripcionGasto = document.getElementById("descripcionGasto").value;
  
    if (valorDolares > 150) {
      alert("¡Atención! El gasto supera el límite de $150 dólares.");
      return;
    }
  
    const listaDeGastos = document.getElementById("listaDeGastos");
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = `${nombreGasto}: $${valorDolares.toFixed(2)} (₲${valorGuaranies.toFixed(2)})`;
    listaDeGastos.appendChild(nuevoItem);
  
    const totalGastos = document.getElementById("totalGastos");
    let totalActual = parseFloat(totalGastos.textContent);
    totalActual += valorDolares;
    totalGastos.textContent = totalActual.toFixed(2);
  }
}
