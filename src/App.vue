<template>
  <AppShop />
</template>

<script lang="ts">
declare module '@/components/layouts/shop.vue';
import AppShop from '@/components/layouts/shop.vue'

export default {
  name: 'App',

  components: {
    AppShop,
  }
}
</script>