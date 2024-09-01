// src/features/toggleSlice.js

import { createSlice } from '@reduxjs/toolkit';

const toogleMobileSideNavSlice = createSlice({
  name: 'toggleMobileSideNav',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    setOpen: (state) => {
      state.isOpen = true;
    },
    setClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggle, setOpen, setClose } = toogleMobileSideNavSlice.actions;

export default toogleMobileSideNavSlice.reducer;
