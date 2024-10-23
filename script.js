// Constante de Avogadro
const avogadro = 6.02214076e23;

// Mostrar campos según la opción seleccionada
function showConversionFields() {
    const conversionType = document.getElementById("conversionType").value;
    document.getElementById("molesToGramsSection").style.display = "none";
    document.getElementById("gramsToMolesSection").style.display = "none";
    document.getElementById("molesToAtomsSection").style.display = "none";
    document.getElementById("atomsToMolesSection").style.display = "none";

    if (conversionType === "molesToGrams") {
        document.getElementById("molesToGramsSection").style.display = "block";
    } else if (conversionType === "gramsToMoles") {
        document.getElementById("gramsToMolesSection").style.display = "block";
    } else if (conversionType === "molesToAtoms") {
        document.getElementById("molesToAtomsSection").style.display = "block";
    } else if (conversionType === "atomsToMoles") {
        document.getElementById("atomsToMolesSection").style.display = "block";
    }
}

// Conversión de Moles a Gramos
function convertMolesToGrams() {
    const moles = parseFloat(document.getElementById("moles").value);
    const molarMass = parseFloat(document.getElementById("molarMass").value);
    const elementSymbol = document.getElementById("symbol").value;
    const mass = moles * molarMass;
    document.getElementById("result1").innerText = `${moles} moles de ${elementSymbol} = ${mass.toFixed(4)} gramos`;
}

// Conversión de Gramos a Moles
function convertGramsToMoles() {
    const grams = parseFloat(document.getElementById("grams").value);
    const molarMass = parseFloat(document.getElementById("molarMass2").value);
    const elementSymbol = document.getElementById("symbol2").value;
    const moles = grams / molarMass;
    document.getElementById("result2").innerText = `${grams} gramos de ${elementSymbol} = ${moles.toFixed(4)} moles`;
}

// Conversión de Moles a Átomos
function convertMolesToAtoms() {
    const moles = parseFloat(document.getElementById("molesToAtoms").value);
    const atoms = moles * avogadro;
    document.getElementById("result3").innerText = `${moles} moles = ${atoms.toExponential(4)} átomos`;
}

// Conversión de Átomos a Moles
function convertAtomsToMoles() {
    const atoms = parseFloat(document.getElementById("atoms").value);
    const moles = atoms / avogadro;
    document.getElementById("result4").innerText = `${atoms.toExponential(4)} átomos = ${moles.toFixed(4)} moles`;
}
