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



/**
 *
 *
 *
 * NO ME TOQUES LA POLLA Y ME PONGAS UNA MALA NOTA ME CAGO EN DIOS
 *
 *
 */





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
const ayuda = document.getElementById("help")

localStorage.setItem("testItem", "abc")

reg.value = localStorage.getItem("testItem")

ejecutar.onclick = () => {
    const re = new RegExp(reg.value, 'g');

    insert = ""

    while(found = re.exec(data.value)){
        insert += `Encontrado '${found[0]}' en indice ${found.index}`
    }

    result.innerText += insert
}

test.onclick = () => {
    const re = new RegExp(reg.value);
    found = re.test(data.value)
    result.innerText = `${found}`
}

match.onclick = () => {
    const re = new RegExp(reg.value, 'g');
    res = data.value.match(re)
    result.innerText = `${res}`
    console.log(res)
}

replace.onclick = () => {

    let reemplazo = prompt("Cadena de reemplazo")
    const re = new RegExp(reg.value, 'g');
    res = data.value.replace(re, reemplazo)
    result.innerText = `${res}`

}

search.onclick = () => {
    const re = new RegExp(reg.value, 'g');
    res = data.value.search(re)
    result.innerText = `${res}`
}

split.onclick = () => {
    const re = new RegExp(reg.value, 'g');
    res = data.value.split(re)
    result.innerText = `${res}`
}

grabar.onclick = () => {

}

ayuda.onclick = () => {
    //window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions", "_blank")
    window.open("ayuda.html", "_blank")
}