// Textareas
const reg = document.getElementById("regular")
const data = document.getElementById("dattest")
const result = document.getElementById("result")

// Buttons
const ejecutar = document.getElementById("ejecutar")
const test = document.getElementById("test")
const match = document.getElementById("match")
const replace = document.getElementById("replace")
const search = document.getElementById("search")
const split = document.getElementById("split")
const grabar = document.getElementById("grabar")

ejecutar.onclick = () => {
    const re = new RegExp(reg.value);
    found = re.exec(data.value)
    result.innerText = `Encontrado '${found}' en indice ${found.index}`
}

test.onclick = () => {
    const re = new RegExp(reg.value);
    found = re.test(data.value)
    result.innerText = `${found}`
}

match.onclick = () => {

}

replace.onclick = () => {

}

search.onclick = () => {

}

split.onclick = () => {

}

grabar.onclick = () => {

}