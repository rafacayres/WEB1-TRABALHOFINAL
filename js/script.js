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

    /* VALIDAÇÃO DE FORMULÁRIO */
    const form = document.querySelector("form");

    if (form) { 
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Impede o site de recarregar

            // 1. CAPTURA DOS DADOS
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const idade = document.getElementById("idade").value.trim();
            const mensagem = document.getElementById("mensagem").value.trim();

            // Verifica se algum campo está vazio
            if (nome === "" || email === "" || mensagem === "" || idade === "") {
                alert("Por favor, preencha todos os campos!");
                return;
            }


            const idadeNumero = parseInt(idade);

            // Verifica se não é número OU se é menor que 16
            if (isNaN(idadeNumero) || idadeNumero < 16) {
                alert("É necessário ter pelo menos 16 anos para enviar a mensagem.");
                return;
            }
            

            if (idadeNumero > 120) {
                 alert("Por favor, insira uma idade válida.");
                 return;
            }

            // Verifica se tem @ e se tem ponto
            if (!email.includes("@") || !email.includes(".")) {
                alert("Por favor, insira um e-mail válido.");
                return;
            }

            // --- SUCESSO ---
            alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
            form.reset(); 
        });
    }

    const btnSortear = document.getElementById('btn-sortear');
    const areaResultado = document.getElementById('area-resultado');
    const numeroDisplay = document.getElementById('numero-camisa');
    const textoDisplay = document.getElementById('texto-jogador');

// Lista de referências para números icônicos
const referencias = {
    1: " Você é seguro como Taffarel e Alisson.",
    2: " Você é como o Cafu levantando a taça.",
    3: "Zagueiro de raça, estilo Lúcio ou Thiago Silva.",
    4: "Xerife da zaga, como Aldair ou David Luiz.",
    5: "O cão de guarda no meio, estilo Mauro Silva.",
    6: "Lateral de classe mundial, como Roberto Carlos.",
    7: "A camisa de Bebeto e Jairzinho.",
    8: "Maestro do meio-campo, como Sócrates ou Kaká.",
    9: "O Fenômeno! Matador como Ronaldo.",
    10: "A camisa de Pelé, Rivaldo, Neymar e Ronaldinho.",
    11: "Como Romário e Adriano Imperador.",
    20: "A camisa que Vini Jr usou no início.",
};

btnSortear.addEventListener('click', () => {
    // 1. Efeito visual de "carregando"
    btnSortear.disabled = true;
    btnSortear.innerText = "Sorteando...";
    numeroDisplay.innerText = "";
    textoDisplay.innerText = "";
    
    // Remove animação anterior para poder rodar de novo
    areaResultado.classList.remove('fade-in');

    // 2. Espera 600ms para dar suspense (setTimeout)
    setTimeout(() => {
        // Sorteia número entre 1 e 23
        const numeroSorteado = Math.floor(Math.random() * 23) + 1;

        // Atualiza o HTML
        numeroDisplay.innerText = numeroSorteado;
        
        // Verifica se tem frase especial, senão usa uma genérica
        if (referencias[numeroSorteado]) {
            textoDisplay.innerText = referencias[numeroSorteado];
        } else {
            textoDisplay.innerText = "Você seria uma peça fundamental no elenco!";
        }

        // Adiciona classe de animação e libera o botão
        areaResultado.classList.add('fade-in');
        btnSortear.disabled = false;
        btnSortear.innerText = "Sortear Novamente";
    }, 600);
});
});