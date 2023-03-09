<script>
export default {
  name: "v-input",
};
</script>

<script setup>
import { defineEmits, defineProps} from "vue";
const emit =  defineEmits(["update:modelValue"]);
 defineProps({
  modelValue: String,
  modelModifiers: {
    type: Object,
    default: () => ({}),
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Введите данные",
  },
  maxlength:Number,
});
function updateInputValue(e) {
  emit("update:modelValue", e.target.value);
}
</script>

<template>
  <input
  :value="modelValue"
  :class="['v-input']"
  :type="type"
  :placeholder="placeholder"
  @input="updateInputValue"
  :maxlength = maxlength
  />
</template>





<style lang="scss">
.v-input {
  padding: 10px ;
  outline: none;
  line-height: 0;
  border: 1px solid grey;
  max-height: 50px;
}

</style>