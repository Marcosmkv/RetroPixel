function pesquisar() {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  //Pra caso apertar "Pesquisar" sem nada digitado no input://
  if (campoPesquisa == "") {
    section.innerHTML = "<h2>Nenhum jogo encontrado!</h2>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  console.log(campoPesquisa);

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let genero = "";
  let lancamento = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    genero = dado.genero.toLowerCase();

    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      genero.includes(campoPesquisa) ||
      lancamento.includes(campoPesquisa)
    ) {
      resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <h3>Lançamento:${dado.lancamento}</h3>
                <h3>Gênero:${dado.genero}</h3>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}"><b>Saiba Mais</b></a>
</div>
        `;
    }
    dado.titulo.includes(campoPesquisa);
  }

  if (!resultados) {
    resultados = "<h2>Nenhum jogo encontrado!</h2>";
  }

  section.innerHTML = resultados;
}
