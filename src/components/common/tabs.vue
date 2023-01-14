<template>
  <div class="shopping-tabs">
    <span
      v-for="(tab, i) in tabs"
      :key="i"
      class="shopping-tabs__item"
      :class="{ 'shopping-tabs__item--active': tab.route === route.name }"
    >
      <router-link :to="{ name: tab.route }" class="shopping-tabs__link">
        {{ tab.name }}
      </router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { TabType } from "@/types/tabs";

export default defineComponent({
  name: "AppTabs",

  props: {
    tabs: {
      type: Object as PropType<TabType>,
      default: null,
    },
  },

  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>

<style lang="scss">
.shopping-tabs {
  &__link {
    text-decoration: none;
    font-size: 13px;
    line-height: 15px;
    color: #777879;
  }

  &__item {
    margin-right: 30px;
    position: relative;

    &--active {
      &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        right: -17px;
        top: 5px;
        border-top: 1px solid #dedcdc;
        border-right: 1px solid #dedcdc;
        transform: rotate(45deg);
      }

      .shopping-tabs__link {
        color: #5a1094;
      }
    }

    &:last-child {
      margin-right: 0;

      &:after {
        display: none;
      }
    }
  }
}
</style>
