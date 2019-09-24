<template>
  <div class="h-full home mt-8">
    <section id="ultimos-lancamentos">
      <ul class="lista-livros">
        <li
          v-for="x in 4"
          :key="x"
          class="flex flex-wrap justify-center sm:justify-start"
        >
          <figure class="flex-none sm:mr-4">
            <img
              src="https://via.placeholder.com/100x150"
              width="100px"
              height="150px"
            />
          </figure>
          <div class="text-center sm:text-left">
            <h3 class="font-semibold">Titulo do Livro {{ x }}</h3>
            <p>Nome do autor</p>
            <p>40,00 R$</p>
          </div>
        </li>
      </ul>
    </section>
    <section id="noticias">
      <ul>
        <li v-for="x in 3" :key="x" class="mb-4">
          <figure class="mr-4">
            <img
              src="https://via.placeholder.com/400x200"
              width="400px"
              height="200px"
            />
          </figure>
          <div>
            <h3 class="font-semibold">Blog Post {{ x }}</h3>
            <p class="mb-4">data</p>
            <p>
              Socializar ideias e experiências de movimentos sociais anticapital
              baseadas no trabalho associado, propriedade comunal, autogestão,
              trabalho emancipado, desmercantilização, educação para além do
              capital
            </p>
          </div>
        </li>
      </ul>
    </section>
    <section id="manifesto">
      <p>
        A Editora Lutas Anticapital publica livros impressos com boa qualidade e
        preços acessíveis, e livros eletrônicos gratuitos, que difundem o
        pensamento marxista e o pensamento crítico nacional e internacional.
      </p>
      <h2>Objetivos</h2>
      <ul>
        <li>Difundir a teoria marxista</li>
        <li>Socializar os resultados de pesquisas de estudiosos marxistas</li>
        <li>
          Difundir o pensamento de pesquisadores e militantes da esquerda
          latino-americana
        </li>
        <li>
          Socializar ideias e experiências de movimentos sociais anticapital
          baseadas no trabalho associado, propriedade comunal, autogestão,
          trabalho emancipado, desmercantilização, educação para além do capital
          superação do Estado capitalista e da burocracia, partidos e sindicatos
          classistas, igualdade de gênero e igualdade substantiva, agroecologia,
          unificação das lutas dos movimentos sociais, revolução e
          internacionalismo
        </li>
        <li>
          Republicar livros esgotados e de grande importância para estudiosos e
          movimentos sociais anticapital
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
.home {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
}
.lista-livros {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-gap: 2rem;
}
</style>
