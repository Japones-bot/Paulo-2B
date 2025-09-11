function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('artcile')
    cartao.className ='cartao'
    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>Reino Animal</h3>
        <div class="cartao__conteudo__pergunta">
            <p>Qual o unico animal mamifero que não consegue pular?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>O Elefante, devido à sua estrutura óssea nas pernas, que são projetadas para suportar o seu
            peso colossal, sem a flexibilidade necessária para o salto, e pelo seu tamanho extremo que
            dificulta a impulsão.</p>
        </div>
    </div>
    `
    container.appendChild(cartao)
}