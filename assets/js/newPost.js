function gerarPostagem(titulo, autor, conteudo) {
    let dataAtual = new Date();
    let dia = String(dataAtual.getDate()).padStart(2, '0');
    let mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Os meses em JavaScript começam do 0 para janeiro
    let ano = dataAtual.getFullYear();

    let data = dia + '/' + mes + '/' + ano;

    let postagem = `
    <article>
        <header>
            <figure>
                <img src="assets/img/banner.png" alt="Imagem figurativa para o post">
            </figure>
            <h2>${titulo}</h2>
            <h4>${data} ⊶ ${autor}</h4>
        </header>
    `;
    for (let paragrafo of conteudo) {
        postagem += `\n<p>${paragrafo}</p>`;
    }
    postagem += "\n</article>";
    return postagem;
}

// Exemplo de uso:
let titulo = "Ele não tem queixo";
let autor = "Marcio Fuchshuber Moraes";
let conteudo = [
    "No ônibus, contemplando a paisagem bela do Rio de Janeiro ao longe (vista de Niterói), escuto duas senhoras conversando quando uma delas diz:",

    "- Ele falou pra mim que se eu continuar desse jeito, ele vai separar de mim.",
    
    "A resposta da outra mudou tudo no meu dia:",
    
    "- Ele não tem queixo de fazer isso!",
    
    "Certamente, mas muito certamente todos os paraenses vão concordar comigo que as chances eram grandes dela saber o que é Jurunas, Guamá e adjacências..."
];

console.log(gerarPostagem(titulo, autor, conteudo));
