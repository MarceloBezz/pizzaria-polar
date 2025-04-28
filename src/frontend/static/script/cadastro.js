function proximo() {
    const parte1 = document.getElementById("parte-1");
    const parte2 = document.getElementById("parte-2");

    parte1.style.display = "none";
    parte2.style.display = "block";
}

function anterior() {
    const parte1 = document.getElementById("parte-1");
    const parte2 = document.getElementById("parte-2");

    parte1.style.display = "block";
    parte2.style.display = "none";
}

async function buscaCEP() {
    const cep = document.getElementById("cep").value.replace(/\D/g, '');

    const response = await fetch(`http://localhost:8080/api/cep/${cep}`);
    const data = await response.json();

    if (data.error || data.erro) {
        return;
    }

    document.getElementById("logradouro").value = data.logradouro;
    document.getElementById("bairro").value = data.bairro;
    document.getElementById("cidade").value = data.localidade;
}

function somenteNumeros(input) {
    input.value = input.value.replace(/\D/g, '');
}

function semNumeros(input) {
    input.value = input.value.replace(/[^a-zA-ZÁ-ÿ]/g, '');
}

document.getElementById('form-cadastro').addEventListener('submit', async (event) => {
    event.preventDefault();
    const form = document.getElementById('form-cadastro')

    const formData = new FormData(form);
    const dados = {};

    formData.forEach((value, key) => {
        dados[key] = value;
    });
    
    try {
        const response = await fetch('http://localhost:8080/api/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });
        if (response.status == 200) {
            alert("Cliente cadastrado com sucesso!")
        }
        
    } catch (error) {
        alert("Erro ao cadastrar!")
    }
})