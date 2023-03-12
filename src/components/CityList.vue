<script setup>
import CityCard from "./CityCard.vue";
import { useStore } from "vuex";
import { defineProps,computed } from "vue";
const props = defineProps({
  weatherData:{
    type:Array,
    required:true,
  }
})
 const store = useStore();
// const listOfCities = computed(() => store.getters["city/getWeatherData"]);
const currentSearch = computed(() => store.getters["city/getSearchCity"]);

const filteredCities = computed(() => {
  if(currentSearch.value === ''){
    return props.weatherData;
  }
  return props.weatherData.filter((city) => {
    return city.cityName
      .toLowerCase()
      .includes(currentSearch.value.toLowerCase());
  });
});
</script>
<template>
  <div class="container">
    <p class="alt-txt" v-if="filteredCities.length <= 0">{{currentSearch}} отсутствует в вашем списке...</p>
    <TransitionGroup
      name="animCity"
      tag="ul"
      class="city-list row justify-content-center pt-5">
      <city-card v-for="city in filteredCities" :key="city.id" :city="city">
      </city-card>
    </TransitionGroup>
  </div>
</template>



<style lang="scss">
.alt-txt {
  color: var(--color-attention) !important;
}
.animCity-move,
.animCity-enter-active,
.animCity-leave-active {
  transition: all 0.7s ease;
}

.animCity-enter-from,
.animCity-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
.animCity-leave-active {
  position: absolute;
}
.alt-txt {
  color: var(--main-blue);
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
}
</style>