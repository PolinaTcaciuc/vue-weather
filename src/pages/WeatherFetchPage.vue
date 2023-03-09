<template>
  <section class="weather-fetch">
    <div class="container">
      <div class="row justify-content-center">
        <search-form :classes="searchFormClasses"/>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchForm from "@/components/SearchForm.vue";

const searchFormClasses = {
    input:['col-8','col-md-6' ,'col-lg-5'],
    btn:['col-3', 'col-md-2'],
}
</script>

<style lang="scss">
</style>