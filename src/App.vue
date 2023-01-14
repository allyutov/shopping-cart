<template>
  <AppShop />
</template>

<script lang="ts">
import AppShop from "@/components/layouts/shop.vue";
import { getToken } from "@/api";
import { useUserStore } from "@/stores/user";

export default {
  name: "App",

  components: {
    AppShop,
  },

  setup() {
    const checkToken = async () => {
      const user = useUserStore();

      if (!user.token) {
        const token = await getToken();
        user.setToken(token.auth_token);
      }
    };

    checkToken();
  },
};
</script>
