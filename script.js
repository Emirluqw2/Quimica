const numeroAvogadro = 6.022e23;

// Masa del elemento → Número de moles
function calcularMoles() {
    const masaElemento = parseFloat(document.getElementById("masaElemento1").value);
    const masaMolar = parseFloat(document.getElementById("masaMolar1").value);
    if (masaElemento && masaMolar) {
        const moles = masaElemento / masaMolar;
        document.getElementById("resultadoMoles").innerText = `Número de moles: ${moles.toExponential(3)}`;
    } else {
        document.getElementById("resultadoMoles").innerText = "Por favor ingrese valores válidos.";
    }
}

// Número de moles → Número de átomos
function calcularAtomos() {
    const moles = parseFloat(document.getElementById("moles2").value);
    if (moles) {
        const atomos = moles * numeroAvogadro;
        document.getElementById("resultadoAtomos").innerText = `Número de átomos: ${atomos.toExponential(3)}`;
    } else {
        document.getElementById("resultadoAtomos").innerText = "Por favor ingrese un valor válido.";
    }
}

// Masa del elemento → Número de átomos
function calcularAtomosDesdeMasa() {
    const masaElemento = parseFloat(document.getElementById("masaElemento3").value);
    const masaMolar = parseFloat(document.getElementById("masaMolar3").value);
    if (masaElemento && masaMolar) {
        const moles = masaElemento / masaMolar;
        const atomos = moles * numeroAvogadro;
        document.getElementById("resultadoAtomosDesdeMasa").innerText = `Número de átomos: ${atomos.toExponential(3)}`;
    } else {
        document.getElementById("resultadoAtomosDesdeMasa").innerText = "Por favor ingrese valores válidos.";
    }
}

// Número de moles → Masa del elemento
function calcularMasaDesdeMoles() {
    const moles = parseFloat(document.getElementById("moles4").value);
    const masaMolar = parseFloat(document.getElementById("masaMolar4").value);
    if (moles && masaMolar) {
        const masa = moles * masaMolar;
        document.getElementById("resultadoMasaDesdeMoles").innerText = `Masa del elemento: ${masa.toExponential(3)} g`;
    } else {
        document.getElementById("resultadoMasaDesdeMoles").innerText = "Por favor ingrese valores válidos.";
    }
}
