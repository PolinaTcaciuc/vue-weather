<template>
  <article class="city-card col-11 col-md-3 col-lg-3" :id="id">
    <header class="city-card__header">
      <button class="city-card__btn">
        <font-awesome-icon class="city-card__icon" icon="fa-solid fa-xmark" />
      </button>
    </header>
    <div class="city-card__body">
      <div class="city-card__info-box">
        <h2 class="city-card__city-name">{{ cityName }}</h2>
        <p class="city-card__feels">
          Ощущается как <strong>{{ Math.round(feelsLike) }} &#176;</strong>
        </p>
        <p class="city-card__purity-sky">
          {{ useFirstLetterCapital(description) }}
        </p>
      </div>

      <div class="city-card__temp-box">
        <p class="city-card__temp-text">
          {{ Math.round(temp) }}&#176;
          <img
            :src="`http://openweathermap.org/img/wn/${icon}@2x.png`"
            alt="температура"
            class="city-card__temp-icon"
          />
        </p>
      </div>
    </div>
    <footer class="city-card__footer">
      <div class="city-card__wind-box">
        <font-awesome-icon
          class="city-card__wind-icon"
          icon="fa-solid fa-wind"
        />
        <p class="city-card__wind-text">{{ windSpeed }}</p>
      </div>
      <div class="city-card__humidity-box">
        <font-awesome-icon
          class="city-card__humidity-icon"
          icon="fa-solid fa-umbrella"
        />
        <p class="city-card__humidity-text">{{ humidity }} &#x25;</p>
      </div>
    </footer>
  </article>
</template>


<script setup>
import { defineProps, computed } from "vue";
import { useFirstLetterCapital } from "@/use/useFirstLetterCapital.js";
const props = defineProps({
  city: {
    type: Object,
    required: true,
  },
});
const id = computed(() => props.city.id);
const cityName = computed(() => props.city.cityName);
const feelsLike = computed(() => props.city.feelsLike);
const description = computed(() => props.city.description);
const temp = computed(() => props.city.temp);
const icon = computed(() => props.city.icon);
const windSpeed = computed(() => props.city.windSpeed);
const humidity = computed(() => props.city.humidity);
</script>

<style lang="scss">
.city-card {
  min-width: 280px;
  max-width: 310px;
  min-height: 450px;
  margin: 0 10px 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  border-radius: 18px;
  padding: 15px;
  background: var(--color-white-primary);
  background: #f1dcdc;
  box-shadow: -2px 2px 26px 2px inset var(--shadow-color);
  position: relative;
  &__header {
    align-self: end;
  }
  &__btn {
    cursor: pointer;
    border: none;
    background: transparent;
  }
  &__icon {
    font-size: 25px;
  }
  &__body {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    position: relative;
    flex: 1 1 auto;
  }
  &__city-name {
    text-align: center;
    margin-top: 0;
    padding-top: 20px;
  }
  &__feels {
    text-align: center;
    margin-top: 0;
    padding-top: 10px;
  }
  &__purity-sky {
    text-align: center;
    margin: 0;
  }
  &__temp-box {
    position: relative;
    font-size: 42px;
    width: 150px;
    height: 150px;
    font-weight: 500;
    background: var(--color-purple);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__temp-text {
    z-index: 200;
  }
  &__temp-icon {
    position: absolute;
    left: -33px;
    top: -18px;
    width: 100px;
    height: 100px;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__wind-box,
  &__humidity-box {
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 18px;
  }
  &__wind-icon,
  &__humidity-icon {
    margin-right: 10px;
  }
  &__humidity-text,
  &__wind-text {
    margin: 0;
  }
  &__info-box {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 500px) {
  .city-card {
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 170px;
    padding: 10px 10px 10px 10px;
    overflow: hidden;
    max-width: 425px;
    margin: 0;
    margin-bottom: 20px;
    min-width: 275px;

    &__header {
      display: flex;
      align-self: flex-end;
      justify-content: end;
      flex: 0 1 100%;
    }
    &__body {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 20px;
      padding-top: 10px;
      align-items: flex-start;
    }
    &__city-name,
    &__temp-feels,
    &__purity-sky {
      text-align: left;
      margin-top: 0;
      margin-bottom: 5px;
      padding: 0;
    }
    &__feels{
      margin-bottom: 5px;
      padding-top: 0;
      text-align: left;
    }
    &__temp-box {
      font-size: 28px;
      margin-left: 10px;
      width: 85px;
    height: 85px;
      font-weight: 500;
      background: var(--color-purple);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 auto;
    }
    &__temp-icon {
      position: absolute;
    left: -12px;
    top: -12px;
    width: 50px;
    height: 50px;
    }
    &__info-box {
      display: flex;
      margin-bottom: 0px;
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
