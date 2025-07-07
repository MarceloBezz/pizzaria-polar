const btnLogout = document.getElementById("logout")

window.addEventListener('load', async () => {
    try {
        const response = await fetch('https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/auth/logado');
        const data = await response.json();

        const btnLogin = document.getElementById("login")
        const btnCadastro = document.getElementById("cadastro")
        const txtNomeUsuario = document.getElementById("usuario")
        if (data.logado) {
            btnLogin.style.display = 'none'
            btnCadastro.style.display = 'none'
            btnLogout.style.display = 'inline'
            txtNomeUsuario.style.display = 'inline'
            txtNomeUsuario.textContent = `Olá, ${data.nome}`
        } else {
            btnLogin.style.display = 'block'
            btnCadastro.style.display = 'block'
            btnLogout.style.display = 'none'
            txtNomeUsuario.style.display = 'none'
        }

    } catch (error) {
        alert("Erro!")
    }
})

btnLogout.addEventListener('click', async () => {
    const response = await fetch('https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/auth/logout', {
        method: "POST"
    });
    const data = await response.json();
    alert(data.mensagem)
    location.reload();
})