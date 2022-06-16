import { createSlice } from "@reduxjs/toolkit";

export const alertsSlice = createSlice({
  name: "counter",
  initialState: {
    showSuccess: false,
    successMessage: undefined,
    showInfo: false,
    infoMessage: undefined,
    showError: false,
    errorMessage: undefined,
    showWarning: false,
    warningMessage: undefined,
  },
  reducers: {
    showSuccessModal: (state, action) => {
      state.showSuccess = true;
      state.successMessage = action.payload.message;
    },
    hideSuccessModal: (state) => {
      state.successMessage = undefined;
      state.showSuccess = false;
    },
    //
    showErrorModal: (state, action) => {
      state.showSuccess = true;
      state.successMessage = action.payload.message;
    },
    hideErrorModal: (state) => {
      state.successMessage = undefined;
      state.showSuccess = false;
    },
    //
    showInfoModal: (state, action) => {
      state.showSuccess = true;
      state.successMessage = action.payload.message;
    },
    hideInfoModal: (state) => {
      state.successMessage = undefined;
      state.showSuccess = false;
    },
    //
    showWarningModal: (state, action) => {
      state.showSuccess = true;
      state.successMessage = action.payload.message;
    },
    hideWarningModal: (state) => {
      state.successMessage = undefined;
      state.showSuccess = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showSuccessModal,
  showErrorModal,
  showInfoModal,
  showWarningModal,
  //
  hideErrorModal,
  hideInfoModal,
  hideSuccessModal,
  hideWarningModal,
} = alertsSlice.actions;

export default alertsSlice.reducer;
