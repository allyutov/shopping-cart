<template>
  <div class="shopping-cart-page">
    <div class="shopping-cart-page-content">
      <AppTabs :tabs="tabs" />
      <p class="shopping-cart-page__title">Shipping Info</p>
      <form action="" class="shopping-cart-page-form">
        <fieldset>
          <p class="shopping-cart-page-form__subtitle">Recipient</p>
          <AppInputElement placeholder="Full name" />
          <AppInputElement />
        </fieldset>
        <fieldset>
          <p>Address</p>
          <AppInputElement />
          <AppInputElement />
          <AppInputElement />
          <div>
            <AppInputElement />
            <AppInputElement />
          </div>
        </fieldset>
        <button type="button">Continue</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import type { TabType } from "@/types/tabs";
import { reactive } from "vue";

declare module "@/components/layouts/shop.vue";
import AppTabs from "@/components/common/tabs.vue";

declare module "@/components/form/input-element.vue";
import AppInputElement from "@/components/form/input-element.vue";

export default {
  name: "StartPage",

  components: {
    AppTabs,
    AppInputElement,
  },

  setup() {
    const tabs: TabType[] = reactive([
      {
        name: "Shipping",
        route: "start-page",
      },
    ]);

    return {
      tabs,
    };
  },
};
</script>

<style lang="scss">
.shopping-cart-page {
  height: 100%;
  background-color: #e6e9f1;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    color: #5a1094;
    font-size: 26px;
    line-height: 31px;
    margin-top: 20px;
  }
}

.shopping-cart-page-content {
  max-width: 300px;
  width: 100%;
  padding: 16px 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border-radius: 14px;
}

.shopping-cart-page-form {
  margin-top: 20px;

  fieldset {
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }
  }

  &__subtitle {
    font-size: 16px;
    line-height: 18px;
    color: #5a1094;
  }
}
</style>
