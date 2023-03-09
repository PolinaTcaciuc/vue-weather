<template>
  <form @submit.prevent="searchCity" method="#" action="#" class="form-search pt-3">
    <v-input
      v-model.trim="city"
      type="search"
      placeholder="введите город..."
      :maxlength="30"
      :class="['form-search__input', props.classes.input]"
    />
    <v-button
      bg="pink"
      :class="['form-search__btn', props.classes.btn]"
      fontWeight="500"
      >Найти</v-button
    >
  </form>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  classes: {
    type: Object,
  },
});
</script>

<style lang="scss">
.form-search {
  display: flex;
  justify-content: center;
  align-items: stretch;
  &__input {
    max-height: none;
  }
  &__btn {
    border: 1px solid grey;
    border-left: none;
  }
}
</style>