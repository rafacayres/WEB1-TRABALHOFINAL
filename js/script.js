document.addEventListener("DOMContentLoaded", () => {
    
    /* --- FUNCIONALIDADE 1: CONTAGEM REGRESSIVA (Copa 2026) --- */
    const timerElement = document.getElementById("timer");
    
    if (timerElement) { // Só roda se existir o timer na página
        const dataCopa = new Date("June 11, 2026 00:00:00").getTime();

        setInterval(() => {
            const agora = new Date().getTime();
            const diferenca = dataCopa - agora;

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            timerElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }, 1000);
    }

    /* --- FUNCIONALIDADE 2: VALIDAÇÃO DE FORMULÁRIO (Sobre) --- */
    const form = document.querySelector("form");

    if (form) { // Só roda se existir um formulário na página
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o site de recarregar

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Validação simples
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            // Sucesso
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
            form.reset(); // Limpa os campos
        });
    }
});
