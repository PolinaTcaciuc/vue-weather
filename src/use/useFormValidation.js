import { required, minLength, email, helpers } from "@vuelidate/validators";
export function useFormValidation() {
  const rules = (() => {
    return {
      userEmail: {
        required: helpers.withMessage("Обязательное поле", required),
        email: helpers.withMessage(
          "Проверьте, правильно ли указан адрес",
          email
        ),
      },
      userPassword: {
        required: helpers.withMessage("Обязательное поле", required),
        minLength: helpers.withMessage(
          "Пароль должен содержать не менее 6 символов",
          minLength(6)
        ),
      },
    };
  });
  return { rules };
}
