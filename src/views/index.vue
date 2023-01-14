<template>
  <div class="shopping-cart-page">
    <div class="shopping-cart-page-content">
      <AppTabs :tabs="tabs" />
      <p class="shopping-cart-page__title">Shipping Info</p>
      <form class="shopping-cart-page-form" @submit.prevent="saveUser">
        <fieldset>
          <p class="shopping-cart-page-form__subtitle">Recipient</p>
          <AppInputElement v-model="user.fullName" placeholder="Full name" />
          <AppInputElement v-model="user.phone" placeholder="Phone" />
        </fieldset>
        <fieldset>
          <p class="shopping-cart-page-form__subtitle">Address</p>
          <AppInputElement v-model="user.address" placeholder="Address" />
          <AppInputElement
            v-model="user.country"
            placeholder="Country"
            :arr-elements="countries"
            @select-option="setCountry"
          />
          <AppInputElement
            v-model="user.city"
            placeholder="City"
            :arr-elements="cities"
            @select-option="setCity"
          />
        </fieldset>
        <button
          class="shopping-cart-page-form__button"
          :class="{ 'shopping-cart-page-form__button--disabled': isDisabled }"
          :disabled="isDisabled"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import type { TabType } from "@/types/tabs";
import type { CityType, UserInfoType } from "@/types/user";
import type { CountryType } from "@/types/user";
import { defineComponent, reactive, watch, computed, ref } from "vue";
import AppTabs from "@/components/common/tabs.vue";
import AppInputElement from "@/components/form/input-element.vue";
import { useUserStore } from "@/stores/user";
import { getCountries, getRegions } from "@/api";

export default defineComponent({
  name: "StartPage",

  components: {
    AppTabs,
    AppInputElement,
  },

  setup() {
    const UserStore = useUserStore();

    const tabs: TabType[] = reactive([
      {
        name: "Shipping",
        route: "start-page",
      },
    ]);

    const user = reactive<UserInfoType>({
      fullName: "",
      phone: "",
      address: "",
      city: "",
      country: "",
    });

    const isDisabled = computed(
      () =>
        user.fullName.length < 4 ||
        user.phone.length < 10 ||
        user.address.length < 4 ||
        user.city.length < 4 ||
        user.country.length < 4
    );

    const saveUser = async () => {
      await UserStore.setUser(user);
    };

    let countries = ref<CountryType[]>([]);

    watch(
      () => user.country,
      async () => {
        if (user.country.length > 2) {
          countries.value = await getCountries(user.country);
        } else {
          countries.value = [];
        }
      }
    );

    const setCountry = async (country: string) => {
      user.country = country;
      countries.value = [];
    };

    let cities = ref<CityType[]>([]);

    watch(
      () => user.city,
      async () => {
        if (user.city.length > 2 && user.country) {
          cities.value = await getRegions(user.country, user.city);
        } else {
          cities.value = [];
        }
      }
    );

    const setCity = async (city: string) => {
      user.city = city;
      cities.value = [];
    };

    return {
      tabs,
      user,
      isDisabled,
      saveUser,
      countries,
      setCountry,
      cities,
      setCity,
    };
  },
});
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

  &__button {
    height: 45px;
    line-height: 45px;
    border: none;
    border-radius: 4px;
    margin-top: 20px;
    width: 180px;
    background-color: #5a1094;
    color: #fff;
    cursor: pointer;

    &--disabled {
      opacity: 0.3;
      cursor: inherit;
    }
  }
}
</style>
