// Variables
const d = document
const encriptarButton = d.getElementById("encriptar")
const desencriptarButton = d.getElementById("desencriptar")
const copiarButton = d.getElementById("copiar")
const inputText = d.getElementById("text-input")
const resultado =  d.getElementById("result")

// Functions
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


// Events
encriptarButton.addEventListener("click", () => {
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
  
});

desencriptarButton.addEventListener("click", () => {
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
})

copiarButton.addEventListener("click", copy)
