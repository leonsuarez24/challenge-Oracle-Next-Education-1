const encriptarButton = document.getElementById("encriptar")
const desencriptarButton = document.getElementById("desencriptar")
const copiarButton = document.getElementById("copiar")

const inputText =  document.getElementById("text-input")


encriptarButton.addEventListener("click", () => {
  let contenido = inputText.value
  console.log(contenido);
})

desencriptarButton.addEventListener("click", () => {
  let contenido = inputText.value
  console.log(contenido);
})
