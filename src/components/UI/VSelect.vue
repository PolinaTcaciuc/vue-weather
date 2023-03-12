<template>
  <div
    ref="selectContainer"
    @click="selectOpen"
    :class="['select-container', { disabled: isDisabled }]"
  >
    <div class="select">
      <input
        readonly
        :value="currentOption"
        type="text"
        id="input"
        ref="input"
      />
    </div>
    <div class="option-container" data-simplebar>
      <div
        @click="changeOption(option)"
        class="option"
        v-for="option in props.options"
        :key="option.id"
        :id="option.id">
        <label> {{ option.name }} </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
};
</script>
<script setup>
import { defineEmits,defineProps, computed, ref, watchEffect } from "vue";
import { useStore } from "vuex";
const emit = defineEmits(["changeOption"]);
const props = defineProps({
  options:{
    type: Array,
    required:true
  }
})
const store = useStore();
const weatherData = computed(() => store.getters["city/getWeatherData"]);
let isDisabled = ref(false);
let currentOption = ref("");
const selectContainer = ref(null);

const selectOpen = () => {
  if (isDisabled.value) return;
  selectContainer.value.classList.toggle("active");
};
const changeOption = (option) => {
  document.querySelectorAll(".option").forEach((item) => {
    if (item.id != option.id) {
      item.classList.contains("activeOption")
        ? item.classList.remove("activeOption")
        : "";
    } else {
      item.classList.contains("activeOption")
        ? ""
        : item.classList.add("activeOption");
    }
  });
  currentOption.value = option.name;
  emit("changeOption", option.value);
};
watchEffect(() => {
  if (weatherData.value.length > 1) {
    currentOption.value = "Критерий сортировки";
    isDisabled.value = false;
  } else {
    currentOption.value = "Сортировка недоступна";
    isDisabled.value = true;
  }
});
</script>
<style lang="scss">
.select-container {
  position: relative;
}
.select-container.disabled {
  .select {
    background: var(--color-grey);
    &::after {
      cursor: not-allowed;
      border-bottom: 2px solid black;
      border-right: 2px solid black;
    }
    input {
      cursor: not-allowed;
    }
  }
}

.activeOption {
  background: var(--color-purple);
}
.select-container .select {
  position: relative;
  background: var(--color-pink-dirty);
  height: 60px;
}
.select-container .select::after {
  position: absolute;
  content: "";
  width: 15px;
  height: 15px;
  top: 50%;
  right: 15px;
  transform: translateY(-50%) rotate(45deg);
  border-bottom: 2px solid white;
  border-right: 2px solid white;
  cursor: pointer;
  transition: border-color 0.4s;
}

.select-container.active .select::after {
  border: none;
  border-left: 2px solid white;
  border-top: 2px solid white;
}
.select-container .select input {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  background: none;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
}
.select-container .option-container {
  position: absolute;
  z-index: 1000;
  top: 60px;
  width: 100%;
  background: #6e6477;
  height: 0;
  transition: 0.4s;
  border-radius: 0px 0px 18px 18px;
}

.select-container.active .option-container {
  height: 180px;
}

.select-container .option-container .option {
  position: relative;
  padding-left: 15px;
  height: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:not(:first-child){
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
}

.select-container .option-container .option.selected {
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
}

.select-container .option-container .option:hover {
  background: rgba(0, 0, 0, 0.2);
  padding-left: 20px;
  border-radius: 0px ;
  &:first-child{
    background: rgba(0, 0, 0, 0.2);
  padding-left: 20px;
  border-radius: 18px 18px 0px 0px;
  }
  &:last-child{
    background: rgba(0, 0, 0, 0.2);
  padding-left: 20px;
  border-radius: 0px 0px 18px 18px;
  }


}

.select-container .option-container .option label {
  color: white;
  cursor: pointer;
}
</style>
