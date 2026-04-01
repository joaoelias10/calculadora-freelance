let totalOrcamento = 0;

const atualizarDisplay = () => {
    const display = document.getElementById('valor-total');
    display.innerText = `R$ ${totalOrcamento.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
};

const adicionarServico = (botao) => {
    const card = botao.parentElement;
    const valorAtributo = card.getAttribute('data-price');

    // Converte string para número decimal
    const valorServico = parseFloat(valorAtributo);

    // Soma ao total
    totalOrcamento += valorServico;

    // Feedback visual de clique
    botao.innerText = "Adicionado ✓";
    botao.style.borderColor = "#39ff14";
    botao.style.color = "#39ff14";

    atualizarDisplay();
};

const resetar = () => {
    totalOrcamento = 0;
    atualizarDisplay();

    // Reseta o estilo dos botões
    const botoes = document.querySelectorAll('.btn-add');
    botoes.forEach(btn => {
        btn.innerText = "Adicionar";
        btn.style.borderColor = "var(--neon-blue)";
        btn.style.color = "var(--neon-blue)";
    });
};