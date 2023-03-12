<script setup>
import SearchForm from "@/components/SearchForm.vue";
import CityList from "@/components/CityList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const loadingStatus = computed(() => store.getters["common/loading"]);
const weatherData = computed(() => store.getters["city/getWeatherData"]);
let selectedSort = computed(() => store.getters["city/getSelectedSort"]);
const searchFormClasses = {
  input: ["col-8", "col-md-6", "col-lg-5"],
  btn: ["col-3", "col-md-2"],
};
const errorClasses = ["col-11", "col-md-8", "col-lg-7"];
const sortedData = computed(() => {
  const data = weatherData.value.slice();
  if (selectedSort.value === "temp") {
    return data.sort((a, b) => b.temp - a.temp);
  } else {
    return data.sort((a, b) =>
      a[selectedSort.value]?.localeCompare(b[selectedSort.value])
    );
  }
});
const changeSelect = (value) => {
  store.commit("city/SET_SELECTED_SORT", value);
};
const optionsList = [
  {
    value: "cityName",
    name: "По названию",
    id: 1,
  },
  {
    value: "description",
    name: "По описанию",
    id: 2,
  },
  {
    value: "temp",
    name: "По температуре",
    id: 3,
  },
];
</script>

<template>
  <section class="weather-fetch">
    <div class="container">
      <div class="row justify-content-center">
        <search-form :classes="searchFormClasses" />
      </div>
      <div class="row justify-content-center">
        <div class="col-11 col-md-8 col-lg-7">
          <v-select
          :options="optionsList"
          @changeOption="changeSelect"> </v-select>
        </div>
      </div>

      <div class="row justify-content-center">
        <v-loader :isLoading="loadingStatus"></v-loader>
      </div>
    </div>
    <div class="container">
      <city-list :weatherData="sortedData"></city-list>
    </div>
  </section>
  <v-error :classes="errorClasses"></v-error>
</template>

<style lang="scss">
</style>