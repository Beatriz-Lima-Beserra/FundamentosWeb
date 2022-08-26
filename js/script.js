let nome = window.document.getElementById( "nome" )
let email = document.querySelector("#email")
let telefone = document.querySelector("#telefone")
let enviar = document.querySelector("#enviar")

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }
    else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green" 
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    }
    else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
    }
}

function validaTelefone(){
    let ttxtTelefone = document.querySelector("txtTelefone")
    if (telefone.value.length < 11) {
        txtTelefone.innerHTML = "Telefone inválido"
        txtTelefone.style.color = "red"
    }
    else {
        txtTelefone.innerHTML = "Telefone válido"
        txtTelefone.style.color = "green"
    }
}
