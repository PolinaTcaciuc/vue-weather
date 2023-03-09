
<template>
  <section class="weather-start">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <v-title
            fontSize="45px"
            color="transparent"
            :isAnimate="true"
            class="weather-start__title"
            >vue-weather</v-title
          >
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <v-button
            @click="updateShowModal"
            class="weather-start__btn-auth mb-5"
            backgroundColor="pink"
            :hasCurve="true"
            animate="animate"
            fontWeight="500"
          >
            Авторизация
          </v-button>
        </div>
      </div>
      <Teleport to="body">
        <Transition name="modal">
          <v-modal :isShow="showModal" @closeModal="updateShowModal">
            <register-form
            @notRegister="updateRegister"
            v-if="isRegister"
            />
            <login-form
            @notEnter="updateRegister"
            v-if="!isRegister"
            />
          </v-modal>
        </Transition>
      </Teleport>
    </div>
  </section>
</template>
<script setup>
import RegisterForm from "@/components/RegisterForm.vue";
import LoginForm from "@/components/LoginForm.vue";

import { useToggle } from "@/use/useToggle ";
let { state: showModal, toggling: updateShowModal } = useToggle(false);
let { state: isRegister, toggling: updateRegister } = useToggle(true);

</script>

<style lang="scss">
.weather-start {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    text-align: center;
  }
  &__btn-auth {
    display: block;
    margin: 0 auto;
  }
}
</style>