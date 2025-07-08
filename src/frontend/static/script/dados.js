const nome = document.getElementById("nome")
const email = document.getElementById("email")
const cep = document.getElementById("cep")
const numero = document.getElementById("numero")
const telefone = document.getElementById("telefone")

const btnLogout = document.getElementById("logout")
const txtNomeUsuario = document.getElementById("usuario")

const inputFoto = document.getElementById("foto")
const formFoto = document.getElementById("form-foto")

const formDados = document.getElementById("dados")

window.addEventListener('DOMContentLoaded', async () => {
    const req = await fetch("https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/api/usuario/0")
    const dados = await req.json();

    txtNomeUsuario.style.display = 'inline'
    txtNomeUsuario.textContent = `Olá, ${dados.nome}`

    nome.value = dados.nome
    email.value = dados.email
    cep.value = dados.cep
    numero.value = dados.numero
    telefone.value = dados.telefone

})

btnLogout.addEventListener('click', async () => {
    const response = await fetch('https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/auth/logout', {
        method: "POST"
    });
    const data = await response.json();
    alert(data.mensagem)
    window.location.href = "https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/home"
})

inputFoto.addEventListener('change', async () => {
    if (inputFoto.files.length > 0) {
        const formData = new FormData();
        formData.append('foto', inputFoto.files[0])

        const response = await fetch("https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/api/usuario/foto", {
            method: "POST",
            body: formData
        })

        if (response.ok) {
            alert("Foto alterada com sucesso!")
            window.location.reload()
        } else {
            alert("Erro ao alterar foto!")
        }
    }
});

formDados.addEventListener('submit', async (event) => {
    event.preventDefault();

    const dados = {}
    console.log(formDados);
    
    const formData = new FormData(formDados)

    formData.forEach((value, key) => {
        dados[key] = value;
        console.log(dados[key])
    })

    try {
        const response = await fetch("https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/api/usuario/0", {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(dados)
        });

        if (response.status == 200) {
            alert("Cliente atualizado com sucesso!");
            window.location.reload();
        }
    } catch (error) {
        alert("Erro ao atualizar cliente! Tente novamente mais tarde")
    }
})
