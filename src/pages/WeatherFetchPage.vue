<script setup>
import SearchForm from "@/components/SearchForm.vue";
import CityList from "@/components/CityList.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const loadingStatus = computed(() => store.getters["common/loading"]);

const searchFormClasses = {
  input: ["col-8", "col-md-6", "col-lg-5"],
  btn: ["col-3", "col-md-2"],
};
const errorClasses = ["col-11", "col-md-8", "col-lg-7"];
</script>

<template>
  <section class="weather-fetch">
    <div class="container">
      <div class="row justify-content-center">
        <search-form :classes="searchFormClasses" />
      </div>
      <div class="row justify-content-center">
        <v-loader :isLoading="loadingStatus"></v-loader>
      </div>
    </div>
    <v-error :classes="errorClasses"></v-error>
    <div class="container">
      <city-list></city-list>
    </div>
  </section>
</template>

