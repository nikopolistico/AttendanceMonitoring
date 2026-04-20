import { ref } from 'vue'

const alertState = ref({
  show: false,
  type: 'info', // 'success', 'error', 'warning', 'info'
  title: '',
  message: '',
  confirmCallback: null,
  cancelCallback: null,
  isConfirmation: false,
  confirmText: 'Confirm',
  cancelText: 'Cancel',
})

export function useAlert() {
  const showAlert = ({ type = 'info', title = '', message = '' }) => {
    alertState.value = {
      show: true,
      type,
      title,
      message,
      confirmCallback: null,
      cancelCallback: null,
      isConfirmation: false,
      confirmText: 'Dismiss',
      cancelText: '',
    }
  }

  const showSuccess = ({ title = 'Success', message = '' }) => {
    showAlert({ type: 'success', title, message })
  }

  const showError = ({ title = 'Error', message = '' }) => {
    showAlert({ type: 'error', title, message })
  }

  const showWarning = ({ title = 'Warning', message = '' }) => {
    showAlert({ type: 'warning', title, message })
  }

  const showInfo = ({ title = 'Information', message = '' }) => {
    showAlert({ type: 'info', title, message })
  }

  const showConfirmation = ({
    title = 'Confirm',
    message = '',
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    onConfirm = null,
    onCancel = null,
  }) => {
    alertState.value = {
      show: true,
      type: 'warning',
      title,
      message,
      confirmCallback: onConfirm,
      cancelCallback: onCancel,
      isConfirmation: true,
      confirmText,
      cancelText,
    }
  }

  const closeAlert = () => {
    alertState.value.show = false
  }

  const handleConfirm = () => {
    if (alertState.value.confirmCallback) {
      alertState.value.confirmCallback()
    }
    closeAlert()
  }

  const handleCancel = () => {
    if (alertState.value.cancelCallback) {
      alertState.value.cancelCallback()
    }
    closeAlert()
  }

  return {
    alertState,
    showAlert,
    showSuccess,
    showError,
    showWarning,
    showInfo,
    showConfirmation,
    closeAlert,
    handleConfirm,
    handleCancel,
  }
}
