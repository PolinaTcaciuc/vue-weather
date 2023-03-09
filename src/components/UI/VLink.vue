<script>
export default {
  name: "v-link",
};
</script>

<script setup>
import { defineProps } from "vue";
defineProps({
  linkPath: {
    type: String,
  },
  role: {
    type: String,
  },
});
</script>

<template>
  <a v-if="!role" :href="linkPath" class="v-link">
    <slot></slot>
  </a>
  <a v-else-if="role" class="v-link" :role="role">
    <slot></slot>
  </a>
</template>












<style lang="scss">
.v-link {
  position: relative;
  color: inherit;
  text-decoration: none;
  transition: color 0.4s ease;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 1px;
    width: 100%;
    height: 1px;
    background-color: var(--color-main-black);
    transition: transform 0.4s ease,opacity 0.6s ease;
    opacity: 1;
  }
}
.v-link:hover {
  color: var(--color-grey);
  &::after {
    background: var(--color-grey);
    transform: translateY(3px);
    opacity:0;
  }
}
</style>