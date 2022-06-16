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
      state.successMessage = action.payload?.message;
    },
    hideSuccessModal: (state) => {
      state.successMessage = undefined;
      state.showSuccess = false;
    },
    //
    showErrorModal: (state, action) => {
      state.showError = true;
      state.errorMessage = action.payload?.message;
    },
    hideErrorModal: (state) => {
      state.successMessage = undefined;
      state.showError = false;
    },
    //
    showInfoModal: (state, action) => {
      state.showInfo = true;
      state.infoMessage = action.payload?.message;
    },
    hideInfoModal: (state) => {
      state.infoMessage = undefined;
      state.showInfo = false;
    },
    //
    showWarningModal: (state, action) => {
      state.showWarning = true;
      state.warningMessage = action.payload?.message;
    },
    hideWarningModal: (state) => {
      state.warningMessage = undefined;
      state.showWarning = false;
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
