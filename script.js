function buscarCombinações() {
    var inputText = document.getElementById('inputText').value;
    
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = "<p>Buscando combinações para: <strong>" + inputText + "</strong></p>";
}
