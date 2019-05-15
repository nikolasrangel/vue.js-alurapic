<template>
  <div class="painel" @dblclick="visivel = !visivel">
    <h2 class="painel-titulo">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="painel-corpo" v-show="visivel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  // propriedades que componente aceitar receber
  props: ["titulo"],

  data() {
    return {
      visivel: true
    };
  }
};
</script>

<style scoped>
/* 
  atributo __scoped__ no style
  deixa os estilos apenas para o 
  escopo do componente.
*/

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 2px 2px 2px;
}

/*
- classes que o transition cria pro elemento em que está
painel-fade-enter // antes do elemento ser incluído ou removido, o estado atual
painel-fade-enter-active // quando o elemento esta sendo incluído
painel-fade-leave-active // quando o elemento esta sendo removido
*/
.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.9s;
}
</style>
