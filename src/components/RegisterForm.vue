<script setup>
import { reactive, defineEmits } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useFormValidation } from "@/use/useFormValidation";

const emit = defineEmits(["notRegister"]);
const formRegister = reactive({
  userEmail: "",
  userPassword: "",
});
const { rules } = useFormValidation(formRegister);
const v$ = useVuelidate(rules, formRegister);

const checkForm = () => {
  v$.value.$touch();
};
const notRegister = () => {
  emit("notRegister");
};
</script>

<template>
  <form
    method="#"
    action="#"
    class="form-register"
    @submit.prevent="checkForm"
    novalidate
  >
    <h2 class="form-register__title">Регистрация</h2>
    <label class="form-register__label">
      <v-input
        v-model.trim="formRegister.userEmail"
        :type="'email'"
        placeholder="Введите email"
        class="form-register__input"
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
    <label class="form-register__label">
      <v-input
        v-model.trim="formRegister.userPassword"
        :type="'password'"
        placeholder="Введите пароль"
        class="form-register__input"
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
    <v-button animate="animate" class="mb-5">Создать аккаунт</v-button>
    <p class="form-register__text">
      Уже есть аккаунт?
      <v-link @click="notRegister" role="button"> Войдите </v-link>
    </p>
  </form>
</template>

<style lang="scss">
.form-register {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  &__title {
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
  &__label {
    margin-bottom: 25px;
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
</style>