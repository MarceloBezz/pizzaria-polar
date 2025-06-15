const btnLogout = document.getElementById("logout")

window.addEventListener('load', async () => {
    try {
        const response = await fetch('http://localhost:8080/auth/logado');
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
    const response = await fetch('http://localhost:8080/auth/logout', {
        method: "POST"
    });
    const data = await response.json();
    alert(data.mensagem)
    location.reload();
})