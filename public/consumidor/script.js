document.getElementById("usuarioLogado").innerHTML = localStorage.getItem("userLogado");

JSON.parse(localStorage.getItem("doacoes")).forEach(element => {
    console.log(element);
    let e = JSON.parse(localStorage.getItem(element));
    let novoCard = document.createElement("div");
    novoCard.className = "card";
    let novoNomeDoacao = document.createElement("h1");
    novoNomeDoacao.innerHTML = e.nomeDoacao;
    let novoComida = document.createElement("p");
    novoComida.innerHTML = (e.numero + " - " + e.alimento + " - " + e.data);
    let novoEndereco = document.createElement("p");
    novoEndereco.innerHTML = ("Endereço: " + e.endereco);
    let novoBairro = document.createElement("p");
    novoBairro.innerHTML = ("Bairro: " + e.bairro);
    let novoCidade = document.createElement("p");
    novoCidade.innerHTML = ("Cidade: " + e.cidade);
    let novoCEP = document.createElement("p");
    novoCEP.innerHTML = ("CEP: " + e.cep);
    let perecivel = document.createElement("p");
    perecivel.innerHTML = ("Perecivel: " + e.perecivel);
    let btnRemover = document.createElement("button");
    btnRemover.innerHTML = "Retirar Alimento";
    btnRemover.onclick = () => {
        let doacoes = JSON.parse(localStorage.getItem("doacoes"));
        let index = doacoes.indexOf(element);
        if (index > -1) {
            doacoes.splice(index, 1);
        }
        localStorage.setItem("doacoes", JSON.stringify(doacoes));
        localStorage.removeItem(element);
        novoCard.remove();
    };
    novoCard.appendChild(novoNomeDoacao);
    novoCard.appendChild(novoComida);
    novoCard.appendChild(novoEndereco);
    novoCard.appendChild(novoBairro);
    novoCard.appendChild(novoCidade);
    novoCard.appendChild(novoCEP);
    novoCard.appendChild(perecivel);
    novoCard.appendChild(btnRemover);
    document.getElementById("conteudo").append(novoCard);
});
