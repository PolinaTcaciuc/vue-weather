<script>
export default {
  name: "v-title",
};
</script>

<script setup>
import { computed, defineProps ,ref} from 'vue';
const props = defineProps({
  fontSize: {
      type: String,
      default: "45px",
    },
    textAlign:{
      type:String,
      default:'center',
    },
    isAnimate:{
      type:Boolean,
      default:false,
    },
    color:{
      type: String,
      default:'inherit',
    },
    gradientFrom: {
      type: String,
      default: "rgb(100, 225, 225)",
    },
    gradientTo: {
      type: String,
      default: "rgba(183, 50, 156, 0.796)",
    },
    duration: {
      type: Number,
      default: 5,
    },
    timingFunction: {
      type: String,
      default: "cubic-bezier(1, 1.05, 0.98, 1.02)",
    },
})
const isAnimate = ref(props.isAnimate);
const titleStyle = computed(() => ({
  fontSize: props.fontSize,
  textAlign: props.textAlign,
  color: props.color,
  ...(isAnimate.value && {
    backgroundImage: `linear-gradient(90deg, ${props.gradientFrom}, ${props.gradientTo})`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundSize: "300px 300px",
    backgroundPosition: "0 0",
    animation: `backgroundPositionAnimation ${props.duration}s infinite ${props.timingFunction}`,
  })
}));

</script>

<template>
  <h1 :style="titleStyle" class="v-title">
    <slot></slot>
  </h1>
</template>



<style lang="scss">
@keyframes backgroundPositionAnimation {
  from {
    background-position-x: 0px;
  }
  to {
    background-position-x: 300px;
  }
}
</style>
