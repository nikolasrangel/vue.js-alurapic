<template>
  <nav>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path">{{ route.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    routes: {
      required: true,
      type: Array
    }
  }
};
</script>

<style>
</style>
