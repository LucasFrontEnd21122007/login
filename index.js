document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aqui você pode adicionar a lógica de autenticação
        // Por exemplo, verificar se o usuário e a senha estão corretos

        // Exemplo simples para demonstração
        if (username === "usuario" && password === "senha") {
            alert("Login bem-sucedido!");
        } else {
            alert("Login falhou. Tente novamente.");
        }
    });
});

