
import { configureStore } from '@reduxjs/toolkit';
import mobileNavToggle from './features/toogleMobileSideNavSlice';

export const store = configureStore({
    reducer: {
        mobileNavToggle: mobileNavToggle,
    },
  });