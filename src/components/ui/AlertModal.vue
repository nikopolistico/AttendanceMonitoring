<template>
  <div
    v-if="alertState.show"
    class="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
    style="backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px)"
    @click="!alertState.isConfirmation && closeAlert"
  >
    <!-- Modal dialog -->
    <div
      class="relative bg-white rounded-2xl max-w-md w-full mx-3 sm:mx-4 transform transition-all animate-scale-in shadow-2xl overflow-hidden"
      @click.stop
    >
      <!-- Modal Header with centered icon -->
      <div class="px-6 sm:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8 text-center">
        <div
          class="rounded-full p-3 sm:p-4 mx-auto w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6"
          :style="iconContainerStyle"
        >
          <svg
            class="w-7 h-7 sm:w-8 sm:h-8"
            :style="{ color: iconColor }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="alertState.type === 'success'"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
            <path
              v-else-if="alertState.type === 'error'"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
            <path
              v-else-if="alertState.type === 'warning'"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4v2m0 0h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <h3 class="text-lg sm:text-xl font-bold uppercase tracking-wide" style="color: #002147">
          {{ alertState.title }}
        </h3>
      </div>

      <!-- Modal Body -->
      <div class="px-6 sm:px-8 py-5 sm:py-6">
        <p class="text-xs sm:text-sm leading-relaxed text-center" style="color: #4b5563">
          {{ alertState.message }}
        </p>
      </div>

      <!-- Modal Footer -->
      <div class="px-6 sm:px-8 py-4 border-t bg-gray-50 flex justify-center gap-3">
        <button
          v-if="alertState.isConfirmation && alertState.cancelText"
          @click="handleCancel"
          type="button"
          class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase transition-all duration-200 hover:shadow-lg border-2"
          style="background: #f3f1ee; color: #002147; border-color: #e5e7eb"
        >
          {{ alertState.cancelText }}
        </button>
        <button
          @click="handleMainAction"
          type="button"
          class="px-6 py-2.5 rounded-lg font-bold text-sm uppercase transition-all duration-200 hover:shadow-lg hover:scale-105 transform text-white"
          :style="{ background: buttonColor }"
        >
          {{ alertState.confirmText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAlert } from '../../composables/useAlert'

const { alertState, closeAlert, handleConfirm, handleCancel } = useAlert()
const handleMainAction = () => {
  if (alertState.value.isConfirmation) {
    handleConfirm()
  } else {
    closeAlert()
  }
}
const iconColor = computed(() => {
  const colors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#004595',
  }
  return colors[alertState.value.type] || colors.info
})

const iconContainerStyle = computed(() => {
  const styles = {
    success: { background: '#f0fdf4', border: '2px solid #10b981' },
    error: { background: '#fee2e2', border: '2px solid #ef4444' },
    warning: { background: '#fef3c7', border: '2px solid #f59e0b' },
    info: { background: '#f0f9ff', border: '2px solid #004595' },
  }
  return styles[alertState.value.type] || styles.info
})

const buttonColor = computed(() => {
  const colors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#004595',
  }
  return colors[alertState.value.type] || colors.info
})
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.2s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.2s ease-out;
}
</style>
