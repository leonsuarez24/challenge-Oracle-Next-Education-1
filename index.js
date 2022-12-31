// Variables
const encriptarButton = document.getElementById("encriptar")
const desencriptarButton = document.getElementById("desencriptar")
const copiarButton = document.getElementById("copiar")
const inputText = document.getElementById("text-input")
const resultado =  document.getElementById("result")

// Funcion encriptadora
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

// Eventos
encriptarButton.addEventListener("click", () => {
  let contenido = inputText.value
  resultado.value = encriptar(contenido)
});

desencriptarButton.addEventListener("click", () => {
  let contenido = inputText.value
  resultado.value = desencriptar(contenido)
})

copiarButton.addEventListener("click", copy)







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