<script setup>
import { useVuelidate } from "@vuelidate/core";
import { defineEmits, reactive } from "vue";
import { useFormValidation } from "@/use/useFormValidation";

const emit = defineEmits(["notEnter"]);
const notEnter = () => {
  emit("notEnter");
};
const formLogin = reactive({
  userEmail: "",
  userPassword: "",
});
const { rules } = useFormValidation(formLogin);
const v$ = useVuelidate(rules, formLogin);
const checkForm = () => {
  v$.value.$touch();
};

</script>
<template>
  <form
    method="#"
    action="#"
    class="form-login"
    @submit.prevent="checkForm"
    novalidate
  >
    <h2 class="form-login__title">Вход</h2>
    <label class="form-login__label">
      <v-input
        v-model.trim="formLogin.userEmail"
        :type="'email'"
        placeholder="Введите email"
        class="form-login__input"
      />
      <TransitionGroup
        v-if="v$.userEmail.$errors.length > 0"
        class="errors-list"
        name="errors-list"
        tag="ul"
      >
        <li
          v-for="error in v$.userEmail.$errors"
          :key="error.$uid"
          class="errors-list__item"
        >
          {{ error.$message }}
        </li>
      </TransitionGroup>
    </label>
    <label class="form-login__label">
      <v-input
        v-model.trim="formLogin.userPassword"
        :type="'password'"
        placeholder="Введите пароль"
        class="form-login__input"
      />
      <TransitionGroup
        v-if="v$.userPassword.$errors.length > 0"
        class="errors-list"
        name="errors-list"
        tag="ul"
      >
        <li
          v-for="error in v$.userPassword.$errors"
          :key="error.$uid"
          class="errors-list__item"
        >
          {{ error.$message }}
        </li>
      </TransitionGroup>
    </label>
    <v-button animate="animate" class="mb-5"> Войти </v-button>
    <p class="form-login__text">
      Нет аккаунта?
      <v-link role="button" @click="notEnter"> Зарегистрируйся </v-link>
    </p>
  </form>
</template>


<style lang="scss">
.form-login {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  &__label {
    margin-bottom: 25px;
  }
  &__title {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
  &__input {
    width: 100%;
    box-shadow: 0px 5px 21px 2px rgb(235, 217, 220) inset,
      2px 7px 3px -3px rgba(55, 57, 55, 0.636);
    &:focus {
      box-shadow: 0px 5px 21px 2px rgba(235, 183, 192, 0.734) inset,
        2px 10px 3px -3px rgba(48, 49, 48, 0.636);
    }
  }
}
.errors-list {
  position: relative;
}
.errors-list-enter-active,
.errors-list-leave-active {
  transition: all 0.5s ease;
  transform: translateX(4px);
}
.errors-list-enter-from,
.errors-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.errors-list__item {
  color: var(--color-attention);
  font-size: 12px;
  position: absolute;
  top: 7px;
  left: 0;
}
</style>