// Variables
const encriptarButton = document.getElementById("encriptar")
const desencriptarButton = document.getElementById("desencriptar")
const copiarButton = document.getElementById("copiar")
const inputText = document.getElementById("text-input")
const resultado =  document.getElementById("result")

// Funcion encriptadora
const encriptar = (contenido) => {
  contenido = contenido.replace("e", "enter")
  contenido = contenido.replace("i", "imes")
  contenido = contenido.replace("a", "ai")
  contenido = contenido.replace("o", "ober")
  contenido = contenido.replace("u", "ufat")

  return contenido
}

const desencriptar = (contenido) => {
  contenido = contenido.replace("enter", "e")
  contenido = contenido.replace("imes", "i")
  contenido = contenido.replace("ai", "a")
  contenido = contenido.replace("ober", "o")
  contenido = contenido.replace("ufat", "u")

  return contenido
}


// Eventos
encriptarButton.addEventListener("click", () => {
  let contenido = inputText.value
  resultado.value = encriptar(contenido)
});

desencriptarButton.addEventListener("click", () => {
  let contenido = inputText.value
  resultado.value = desencriptar(contenido)
})







/*
const encriptar = (contenido) => {
  const arrayContenido = contenido.split("")
  const arrayEncriptado = []

  for (i = 0; i < arrayContenido.length; i++) {
    if (arrayContenido[i] === "e") arrayEncriptado[i] = "enter"
    else if (arrayContenido[i] === "i") arrayEncriptado[i] = "imes"
    else if (arrayContenido[i] === "a") arrayEncriptado[i] = "ai"
    else if (arrayContenido[i] === "o") arrayEncriptado[i] = "ober"
    else if (arrayContenido[i] === "u") arrayEncriptado[i] = "ufat"
    else arrayEncriptado[i] = arrayContenido[i]
  }

  return arrayEncriptado.join("")
}
*/