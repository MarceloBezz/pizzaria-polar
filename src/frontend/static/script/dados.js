const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cep = document.getElementById("cep")
const numero = document.getElementById("numero")

const btnLogout = document.getElementById("logout")
const txtNomeUsuario = document.getElementById("usuario")

window.addEventListener('load', async () => {
    const req = await fetch("http://localhost:8080/api/usuario/0")
    const dados = await req.json();
    
    txtNomeUsuario.style.display = 'inline'
    txtNomeUsuario.textContent = `Olá, ${dados.nome}`

    nome.value = dados.nome
    email.value = dados.email
    cep.value = dados.cep
    numero.value = dados.numero
})

btnLogout.addEventListener('click', async () => {
    const response = await fetch('http://localhost:8080/auth/logout', {
        method: "POST"
    });
    const data = await response.json();
    alert(data.mensagem)
    location.reload();
})