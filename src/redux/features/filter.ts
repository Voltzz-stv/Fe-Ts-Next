import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  data: {
    filterdata: {
      date_filter: {
        start_date: string | null;
        end_date: string | null;
      };
      month_filter: string[];
      region_filter: string[];
      state_filter: string[];
      productline_filter: string[];
      lob_filter: string[];
      ppl_filter: string[];
      pl_filter: string[];
      vin_filter: string[];
      mc_filter: string[];
    };
  };
  submitted: number;
  fmsNav: number;
}

const initialState = {
  data: {
    filterdata: {
      date_filter: {
        start_date: null,
        // start_date: "2023-11-01",
        end_date: null,
        // end_date: "2023-11-02",
      },
      month_filter: [],
      region_filter: [],
      state_filter: [],
      productline_filter: [],
      lob_filter: [],
      ppl_filter: [],
      // ppl_filter: ["MAV 28"],
      pl_filter: [],
      vin_filter: [],
      mc_filter: [],
    },
  },
  submitted: 0,
  fmsNav: 0,
} as FilterState;

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilters(state, action: PayloadAction<FilterState>) {
      state.data = action.payload.data;
      state.submitted = action.payload.submitted;
      state.fmsNav = action.payload.fmsNav;
    },
    applyFilters(
      state,
      action: PayloadAction<FilterState["data"]["filterdata"]>
    ) {
      state.data.filterdata = action.payload;
    },
    chgSubmitted(state, action: PayloadAction<number>) {
      state.submitted = action.payload;
    },
    chgFmsNav(state, action: PayloadAction<number>) {
      state.fmsNav = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  addFilters,
  applyFilters,
  chgFmsNav,
  chgSubmitted,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
