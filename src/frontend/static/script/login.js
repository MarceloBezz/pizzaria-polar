const form = document.getElementById('formLogin');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        email: form.email.value,
        senha: form.senha.value
    };

    const response = await fetch('https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/auth/login', {
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
        window.location.href = "https://pizzariapolar02-frb6cze4bxbcerbs.brazilsouth-01.azurewebsites.net/dados"
    } else {
        alert("Usuário e/ou senha incorreto(s)!")
    }
});
