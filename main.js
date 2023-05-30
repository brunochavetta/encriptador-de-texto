function encriptarTexto(texto) {
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
  
    return textoEncriptado;
  }

  function desencriptarTexto(textoEncriptado) {
    let texto = textoEncriptado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
  
    return texto;
  }

  function encriptar() {
    let textoOriginal = document.getElementById("textoOriginal").value;
    let textoEncriptado = encriptarTexto(textoOriginal);
    document.getElementById("resultado").textContent = textoEncriptado;
  }

  function desencriptar() {
    let textoOriginal = document.getElementById("textoOriginal").value;
    let textoDesencriptado = desencriptarTexto(textoOriginal);
    document.getElementById("resultado").textContent = textoDesencriptado;
  }

  function copiarTexto() {
    let resultado = document.getElementById("resultado");
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand("copy");
  
    setTimeout(function() {
      alert("El texto ha sido copiado al portapapeles.");
    }, 500);
  }
  
  