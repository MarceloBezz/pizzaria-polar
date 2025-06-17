const form = document.getElementById('formLogin');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        email: form.email.value,
        senha: form.senha.value
    };

    const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
    });    

    const result = await response.json();
    if (result.accessToken) {
        alert(`Login bem sucedido! Bem vindo!`)
        window.location.href = "http://localhost:8080/dados"
    } else {
        alert("Usuário e/ou senha incorreto(s)!")
    }
});
