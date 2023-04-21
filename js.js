function calcular() {
    // Obter os valores de largura e comprimento do terreno
    var largura = document.getElementById("largura").value;
    var comprimento = document.getElementById("comprimento").value;
  x
    // Converter os valores para números
    largura = parseFloat(largura);
    comprimento = parseFloat(comprimento);
  
    // Calcular a área do terreno
    var area = largura * comprimento;
  
    // Exibir o resultado na página
    document.getElementById("resultado").value = area + " metros quadrados";
  }
  