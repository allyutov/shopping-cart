<template>
  <label class="app-input-label">
    <input
      type="text"
      class="app-input"
      :placeholder="placeholder"
      :value="modelValue"
      @focus="$emit('onFocus')"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="app-input-label-select">
      <div
        v-for="(element, index) in arrElements"
        :key="index"
        class="app-input-label-select__option"
        @click="$emit('selectOption', element.name)"
      >
        {{ element.name }}
      </div>
    </div>
  </label>
</template>

<script>
export default {
  name: "InputElement",

  props: {
    inputType: {
      type: String,
      default: "text",
    },

    placeholder: {
      type: String,
      default: "",
    },

    modelValue: {
      type: [String, Number],
      default: "",
    },

    arrElements: {
      type: Array,
      default: null,
    },
  },

  emits: ["update:modelValue", "onFocus", "selectOption"],
};
</script>

<style lang="scss">
.app-input-label {
  margin-top: 20px;
  display: block;
  position: relative;
}

.app-input-label-select {
  position: absolute;
  background-color: #ffffff;
  top: 40px;
  left: 0;
  max-height: 200px;
  width: 100%;
  z-index: 1;
  box-shadow: 0 3px 6px rgb(0 0 0 / 10%);

  &__option {
    cursor: pointer;
    padding: 8px;
    border-bottom: 1px solid #dedcdc;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}

.app-input {
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  border: 1px solid #dedcdc;
  width: 100%;
  font-size: 16px;
  color: #6b6b6b;
  padding: 0 15px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
}
</style>
