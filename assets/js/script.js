// OBJETIVO 1 - Quando clicar  no botão do personagem na lista, marcar o botão como selecionado
//passo 1 - Pegar os botões no JS e verificar quando o usuário clicar em cima deles.
const botoes = document.querySelectorAll(".botao");

//OBJETIVO 2 - Quando clicar no botão do personagem, mostrar as informações do personagem
//passo 1 - pegar os personagens no JS para mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    //passo 3 - verificar se já existe um botao selecionado, se sim, deve remover a seleção dele
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");

    //passo 2 - adicionar a classe "selecionado" no botao que o usuario clicou
    botao.classList.add("selecionado");

     // Pausar a música de todos os personagens
     const musicas = document.querySelectorAll('.musica');
     musicas.forEach(musica => musica.pause());

      // Obter a música associada ao botão clicado
      const musica = botao.parentElement.querySelector('.musica');

       // Definir a posição da música como 0 (início)
    musica.currentTime = 0;

        // Tocar a música associada ao botão clicado
        musica.play();

    //objetivo2 - passo 3 - verificar se já existe um personagem selecionado, se sim, remover a seleção dele
    const personagemSelecionado = document.querySelector(
      ".personagem.selecionado"
    );
    personagemSelecionado.classList.remove("selecionado");

    //objetivo2 - passo 2 - adicionar a classe "selecionado" no personagem que o usuario selecionou
    personagens[indice].classList.add("selecionado");
  });
});
