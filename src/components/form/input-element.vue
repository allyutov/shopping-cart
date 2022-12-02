<template>
  <label class="app-input-label">
    <input type="text" class="app-input" :placeholder="placeholder" />
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
  },
};
</script>

<style lang="scss">
.app-input-label {
  margin-top: 20px;
  display: block;
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
