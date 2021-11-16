<template>
  <nav class="navbar navber-Light bg-dark">
    <div class="container-fluid">
      <a
        href="#"
        class="navbar-brand"
        style="color: #ffffff; text-decoration: none"
        >Marvel</a
      >
      <form action="/" class="d-flex">
        <input
          type="search"
          class="form-control me-2"
          placeholder="Поиск..."
          aria-label="search"
          v-model.trim="search" 
          @input="changeSearch(search)"
        /> <!-- Оператор trim убирает ненужные пробелы в начале и в конце запроса для большей корректности поискового запроса -->
        <button type="submit" class="btn btn-outline-light">Все</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['changeSearch'],
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style scoped>
</style>
