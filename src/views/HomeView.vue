<template>
  <div class="home">
    <Sidebar />
    <Catalog />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Catalog from '@/components/Catalog.vue';

export default {
  name: 'HomeView',
  components: {
    Sidebar,
    Catalog
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
</style>
