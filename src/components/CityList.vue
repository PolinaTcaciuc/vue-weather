<script setup>
import CityCard from "./CityCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const listOfCities = computed(() => store.getters["city/getWeatherData"]);
const currentSearch = computed(() => store.getters["city/getSearchCity"]);

const filteredCities = computed(() => {
  return listOfCities.value.filter((city) => {
    return city.cityName
      .toLowerCase()
      .includes(currentSearch.value.toLowerCase());
  });
});
</script>
<template>
  <p
    class="alt-txt"
    v-show="filteredCities.length <= 0 && listOfCities.length > 0"
  >
    {{ `&#xab;${currentSearch}&#xbb;` }} нет в вашем списке...
  </p>
  <div class="container">
    <TransitionGroup
      name="animCity"
      tag="ul"
      class="city-list row justify-content-center pt-5"
    >
      <city-card v-for="city in filteredCities" :key="city.id" :city="city">
      </city-card>
    </TransitionGroup>
  </div>
</template>



<style lang="scss">
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