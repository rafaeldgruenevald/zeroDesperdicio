function registrarUsuario(nome, senha, empresa) {
    if (localStorage.getItem(nome)) {
        alert("Usuario ja existe!");
        return false;
    }

    localStorage.setItem(nome, JSON.stringify({"senha":senha,"empresa":empresa}));
    alert("Usuario registrado!")
    return true;
}

let registerForm = document.getElementById("registerForm");
let checkbox = document.getElementById("souEmpresa");
localStorage.setItem("checkboxEmpresa", "off");

checkbox.addEventListener("change", (e) => {
    if (localStorage.getItem("checkboxEmpresa") === "on") {
        localStorage.setItem("checkboxEmpresa", "off");
    } else {
        localStorage.setItem("checkboxEmpresa", "on");
    }
})

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let nome = (document.getElementById("usuario")).value;
    let senha = (document.getElementById("senha")).value;
    let empresa = localStorage.getItem("checkboxEmpresa");
    let confirmarSenha = (document.getElementById("confirmarSenha")).value;

    if (nome === "" || senha === "" || senha !== confirmarSenha) {
        alert("ERRO! Campos Invalidos!");
        return;
    }
    if (registrarUsuario(nome, senha, empresa)) {
        window.location.href = "../login/index.html";
    } else {
        console.log("nay");
    }
})