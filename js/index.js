// Variables ----------------------------------
const d = document
const inputText = d.getElementById("text-input")
const resultado =  d.getElementById("result")

// Functions ----------------------------------
const encriptar = (contenido) => {
  contenido = contenido.replaceAll("e", "enter")
  contenido = contenido.replaceAll("i", "imes")
  contenido = contenido.replaceAll("a", "ai")
  contenido = contenido.replaceAll("o", "ober")
  contenido = contenido.replaceAll("u", "ufat")

  return contenido
}

const desencriptar = (contenido) => {
  contenido = contenido.replaceAll("enter", "e")
  contenido = contenido.replaceAll("imes", "i")
  contenido = contenido.replaceAll("ai", "a")
  contenido = contenido.replaceAll("ober", "o")
  contenido = contenido.replaceAll("ufat", "u")

  return contenido
}

const copy = () => {
  resultado.select()
  navigator.clipboard.writeText(resultado.value);
}

// Events ---------------------------------------
d.addEventListener("click", (e) => {
  
  if (e.target.matches("#encriptar")) {
    let contenido = inputText.value

    if (contenido.length == 0) {
      Swal.fire(
        'Ningún mensaje fue encontrado',
        'Ingresa el texto que desees encriptar o desencriptar.',
        'error'
      )
    }
    else {
      resultado.value = encriptar(contenido)
      inputText.value = ""
    }
  }

  if (e.target.matches("#desencriptar")) {
    let contenido = inputText.value

    if (contenido.length == 0) {
      Swal.fire(
      'Ningún mensaje fue encontrado',
      'Ingresa el texto que desees encriptar o desencriptar.',
      'error'
      )
    }
    else {
      resultado.value = desencriptar(contenido)
      inputText.value = ""
    }
  }

  if (e.target.matches("#copiar")) {
    copy()
  }
})



