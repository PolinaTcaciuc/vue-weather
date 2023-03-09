<script>
export default {
  name: "v-modal",
};
</script>

<script setup>
import { defineEmits, defineProps, watch } from "vue";
const emit = defineEmits(["closeModal"]);
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});
function closeModal() {
  emit("closeModal");
}
watch(
  () => props.isShow,
  () => {
    document.body.classList.toggle("no-scroll");
    document.querySelector("html").classList.toggle("no-scroll");
  }
);
</script>

<template >
  <div v-if="isShow" class="modal" @click="closeModal" role="dialog">
    <div class="modal__dialog" @click.stop>
      <div class="modal__content" data-simplebar ref="modalContent">
        <button
          class="modal__mobile-close"
          @swiped-down="closeModal"
          data-swipe-timeout="500"
          data-swipe-ignore="false"
        ></button>
        <div class="modal__close">
          <button @click="closeModal" class="modal__close-btn">
            <font-awesome-icon
              class="modal__close-icon"
              icon="fa-solid fa-xmark"
            />
          </button>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.622);
  z-index: 1000;
  opacity: 1;
}
.modal__dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-white-primary);
  height: 400px;
  max-width: 400px;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
}
.modal__content {
  padding: 15px 20px;
  text-align: justify;
  height: 100%;
}
.modal__mobile-close {
  display: none;
}
.modal__close {
  display: flex;
  justify-content: end;
  align-items: center;
  &-btn {
    cursor: pointer;
    border: none;
    background: transparent;
    &:hover {
      .modal__close-icon {
        color: var(--color-grey);
      }
    }
  }
  &-icon {
    font-size: 25px;
    color: var(--color-black-primary);
    transition: color 0.2s;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-out;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .modal__dialog {
    position: absolute;
    bottom: 0;
    left: 0;
    top: auto;
    transform: none;
    border-radius: 15px 15px 0px 0px;
    max-width: 100%;
    height: 75vh;
    min-height: auto;
  }
  .modal__content {
    height: 100%;
    padding: 25px 20px;
  }
  .modal-animate-enter-from {
    .modal__dialog {
      transform: translate(0%, -100%);
      opacity: 0;
    }
  }
  .modal-enter-active {
    transition: all 0.6s ease-out;
    .modal__dialog {
      transition: all 0.6s ease-out;
      transform: translate(0%, 100%);
      opacity: 0;
    }
  }
  .modal-enter-to {
    .modal__dialog {
      transform: none;
      bottom: 0;
      left: 0;
      opacity: 1;
    }
  }
  .modal-leave-active {
    transition: all 0.6s ease;
    opacity: 0;
  }
  .modal-leave-to {
    .modal__dialog {
      transition: all 0.6s ease;
      transform: translate(0%, 100%);
    }
  }
}

@media (max-width: 576px) {
  .modal__dialog {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    transform: none;
    background: rgb(247, 243, 243);
    border-radius: 15px 15px 0px 0px;
    max-width: 100%;
    max-height: 67vh;
    height: 100%;
    min-height: auto;
  }
  .modal__content {
    padding: 70px 20px 10px 20px;
  }
  .modal__close {
    display: none;
  }
  .modal__mobile-close {
    display: block;
    width: 100%;
    height: 70px;
    background: transparent;
    position: absolute;
    top: 0;
    border: none;
    left: 0;
    &::before {
      content: "";
      width: 100px;
      height: 3px;
      background: var(--color-black-primary);
      top: 50%;
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
  }
}
.simplebar-vertical .simplebar-scrollbar::before {
  background-color: var(--color-purple);
}
.simplebar-track.simplebar-vertical {
  top: 10px !important;
  width: 12px;
}
.simplebar-scrollbar.simplebar-visible:before {
  opacity: 1 !important;
}
</style>