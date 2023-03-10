
<script>
export default {
  name: "v-error",
};
</script>
<script setup>
import {defineProps,computed,watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const errorStatus = computed(() => store.getters["common/error"]);
const errorMessage = computed(() => store.getters["common/message"]);

const props = defineProps({
  timeout: {
    type: Number,
    default: 25000,
  },
  classes:{
    type: Object,
    default: () => ({})
  }
});

function errorTime() {
  setTimeout(() => {
    store.commit("common/CLEAR_ERROR");
  },props.timeout);
}
function closeError(){
    store.commit("common/CLEAR_ERROR");
}
watch(errorStatus,() =>{
    errorStatus.value ? errorTime() : ''
})
</script>

<template>
  <Transition name="error">
  <div v-if="errorStatus" class="error-card__wrapper">
    <div class="container">
      <div class="row justify-content-center">
        <article
        :class="['error-card', props.classes]">
          <button
          @click="closeError"
          class="error-card__btn">
            <font-awesome-icon
              class="error-card__icon"
              icon="fa-solid fa-xmark"
            />
          </button>
          <h2 class="error-card__title">Error</h2>
          <div class="error-card__msg">
            {{errorMessage}}
          </div>
        </article>
      </div>
    </div>
  </div>
</Transition>
</template>

<style lang="scss" scoped>
.error-card__wrapper {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.error-card {
  background: var(--color-attention);
  color: var(--color-beige);
  text-align: justify;
  padding: 35px 15px 15px 15px;
  position: relative;
  &__title {
    text-align: center;
  }
  &__btn {
    position: absolute;
    right: 10px;
    top: 10px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  &__icon {
    color: var(--color-beige);
    font-size: 25px;
  }
}

.error-enter-active,
.error-leave-active{
  transition: all .5s ease-out;
}


.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>