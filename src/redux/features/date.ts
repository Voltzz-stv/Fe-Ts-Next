import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DateState {
  date: {
    start_date: string | null;
    end_date: string | null;
  };
}

const initialState = {
  date: {
    start_date: null,
    end_date: null,
  },
} as DateState;

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    addDates(state, action: PayloadAction<DateState>) {
      state.date = action.payload.date;
    },
  },
});
export const { addDates } = dateSlice.actions;
export default dateSlice.reducer;
