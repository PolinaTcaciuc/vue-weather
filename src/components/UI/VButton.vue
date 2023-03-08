<script>
export default {
  name: "v-button",
};
</script>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  backgroundColor: {
    type: String,
    default: "pink",
  },
  hasCurve: {
    type: Boolean,
    required: false,
  },
  animate: {
    type: String,
    default: "non-animate",
  },
  fontWeight: {
    type: [String, Number],
    default: 400,
  },
});
</script>

<template>
  <button
    :class="[
      'v-button',
      `v-button_${props.backgroundColor}`,
      `v-button_${props.backgroundColor}_${props.border}`,
      `v-button_${props.backgroundColor}_${animate}`,
      `v-button_fw_${fontWeight}`,
      { 'v-button_curve': props.hasCurve },
    ]"
  >
  <slot></slot>
  </button>
</template>

<style lang="scss">
.v-button {
  display: inline-block;
  cursor: pointer;
  padding: 15px 10px;
  user-select: none;
  color:var(--color-main-black);
  &_fw_400{
    font-weight: 400;
  }
  &_fw_500{
    font-weight: 500;
  }
  &_fw_600{
    font-weight: 600;
  }
  &_curve {
    border-radius: 0.75em;
  }
  &_pink {
    background: var(--color-pink);
    border: 2px solid var(--color-pink-dirty);
    &_animate {
      position: relative;
      transition: transform 0.15s;
      transform-style: preserve-3d;
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--color-pink-light);
        border-radius: inherit;
        box-shadow: 0 0 0 2px var(--color-pink-dirty), 0 0.625em 0 0 var(--color-beige);
        transform: translate3d(0, 0.75em, -1em);
        transition: transform 0.15s, box-shadow 0.15s;
      }
      &:hover {
        background: var(--color-beige-dark);
        transform: translate(0, 0.25em);
      }
      &:hover::before {
        box-shadow: 0 0 0 2px var(--color-pink-dirty), 0 0.5em 0 0 var(--color-beige);
        transform: translate3d(0, 0.5em, -1em);
      }
      &:active {
        background: var(--color-beige-dark);
        transform: translate(0em, 0.75em);
      }
      &:active::before {
        box-shadow: 0 0 0 2px var(--color-pink-dirty), 0 0 var(--color-beige);
        transform: translate3d(0, 0, -1em);
      }
    }
  }
}
</style>