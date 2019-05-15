<template>
  <button @click="disparaAcao()" class="botao" :class="estiloBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
  props: {
    tipo: {
      required: true,
      type: String
    },
    rotulo: {
      required: true,
      type: String
    },
    estilo: String,
    confirmacao: Boolean
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operacao de deletar?")) {
          // dispara um evento pra quem tiver escutando
          this.$emit("botaoAtivado", { date: new Date() });
        }
      } else {
        this.$emit("botaoAtivado", { date: new Date() });
      }
    }
  },

  computed: {
    estiloBotao() {
      switch (this.estilo) {
        default:
        case "padrao":
          return "botao-padrao";
        case "perigo":
          return "botao-perigo";
      }
    }
  }
};
</script>

<style scoped>
.botao {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>
