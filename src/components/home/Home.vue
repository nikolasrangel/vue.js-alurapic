<template>
  <div>
    <h1 class="centralizado">{{ title }}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="filtre pelo titulo"
      v-on:input="filtro = $event.target.value"
    >

    <ul class="lista-fotos">
      <li v-for="(photo, index) of photosFiltered" :key="index" class="lista-fotos-item">
        <meu-painel :titulo="photo.titulo">
          <image-responsiva :url="photo.url" :titulo="photo.titulo"/>
          <meu-botao
            tipo="button"
            rotulo="Remover"
            estilo="perigo"
            @botaoAtivado="remove($event, photo)"
            :confirmacao="true"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
// importa componentes
import Painel from "../shared/painel/Painel";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva";
import Botao from "../shared/botao/Botao";

export default {
  // criacao de seletores pros componentes importados
  components: {
    "meu-painel": Painel,
    "image-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      title: "photos",
      photos: [],
      filtro: ""
    };
  },

  // computed property: sao acessadas como propriedades no template
  computed: {
    photosFiltered() {
      if (this.filtro) {
        // regex que buscara pelo texto do filtro com case insensitive
        const regex = new RegExp(this.filtro.trim(), "i");

        return this.photos.filter(photo => regex.test(photo.titulo));
      } else {
        return this.photos;
      }
    }
  },

  // metodos do componente
  methods: {
    remove($event, photo) {
      alert(`Remover a foto: ${photo.titulo} (${$event.date}).`);
    }
  },

  created() {
    this.$http
      .get("https://alurapic-server.herokuapp.com/v1/fotos")
      .then(response => response.json())
      .then(fotos => (this.photos = fotos), err => console.log(err));
  }
};
</script>

<style scoped>
.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
