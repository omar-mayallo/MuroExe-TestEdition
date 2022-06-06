import { createSlice } from "@reduxjs/toolkit";
import ShopData from "./ShopData";

const initialState = { shopData: ShopData };

const shopSlice = createSlice({
  name: "ShopData",
  initialState,
  reducers: {
    getDepartmentData: (state, action) => {
      state.shopData = state.shopData.find(
        (departmentData) => departmentData.id === action.payload
      );
    },
  },
});

export const { getDepartmentData } = shopSlice.actions;
export default shopSlice.reducer;
