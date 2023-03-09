import {ref} from 'vue';
export function useToggle(baseState) {
  let state = baseState ? ref(baseState) : ref(false);
  const toggling = () => {
    state.value = !state.value;
  }
  return {
    state,
    toggling
  }
}