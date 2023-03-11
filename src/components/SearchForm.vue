<template>
  <form
    @submit.prevent="requestCity"
    method="#"
    action="#"
    class="form-search pt-3"
  >
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
      ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
    /></v-button>
  </form>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
const props = defineProps({
  classes: {
    type: Object,
    default: () => ({}),
  },
});
const store = useStore();
let city = computed({
  get() {
    return store.state.city.searchCity;
  },
  set(value) {
    store.commit("city/SET_CITY", value);
  },
});
const requestCity = () => store.dispatch("city/fetchCityWeatherData");
</script>

<style lang="scss">
.form-search {
  display: flex;
  justify-content: center;
  align-items: stretch;
  &__input {
    max-height: none;
    border-radius: 15px 0px 0px 15px;
  }
  &__btn {
    border: 1px solid grey;
    border-left: none;
    border-radius: 0px 15px 15px 0px;
  }
}
</style>