<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, computed, watch } from "vue";

interface Props {
  modalWidth?: string;
  modalHeight?: string;
}
const props = withDefaults(defineProps<Props>(), {
  modalWidth: "90%",
  modalHeight: "90vh",
});

// モーダルの開閉状態
const model = defineModel<boolean>();

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  // コンポーネントがアンマウントされたときに必ずスクロールを有効にする
  enableBodyScroll();
});

const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableBodyScroll = () => {
  document.body.style.overflow = "";
};

const modalStyle = computed(() => ({
  width: props.modalWidth,
  height: props.modalHeight,
}));

const contentStyle = computed(() => ({
  maxHeight: `calc(${props.modalHeight} - 60px)`,
}));

watch(model, (newValue) => {
  if (newValue) {
    disableBodyScroll();
  } else {
    enableBodyScroll();
  }
});

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && model.value) {
    model.value = false;
  }
};
</script>

<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="model" class="modal-overlay" @click="model = false">
        <div class="modal-container" :style="modalStyle" @click.stop>
          <button class="close-button" @click="model = false">&times;</button>
          <div class="modal-content" :style="contentStyle">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  flex-direction: column;
}

.close-button {
  aspect-ratio: square;
  position: absolute;
  top: 0px;
  right: 5px;
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  z-index: 1;
}

.modal-content {
  padding: 20px;
  overflow-y: auto;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
