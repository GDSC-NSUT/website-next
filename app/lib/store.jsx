import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navLogoState",
  initialState: {
    logoState: 0,
  },
  reducers: {
    toggleNav: (state, param) => {
      if (!param.payload) state.logoState = 1;
      else state.logoState = 0;
    },
  },
});

export const { toggleNav } = navSlice.actions;

const navLinkSlice = createSlice({
  name: "navLinkState",
  initialState: {
    activeIndex: undefined,
  },
  reducers: {
    setIndex: (state, param) => {
      state.activeIndex = param.payload;
    },
  },
});

export const { setIndex } = navLinkSlice.actions;

/* export default configureStore({
  reducer: {
    navLogoState: navSlice.reducer,
    navLinkState: navLinkSlice.reducer,
  },
});
 */

export const makeStore = () => {
  return configureStore({
    reducer: {
      navLogoState: navSlice.reducer,
      navLinkState: navLinkSlice.reducer,
    },
  });
};

