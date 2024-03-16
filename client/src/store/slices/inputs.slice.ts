import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TInputs } from "../../components/SingleEntity/types/interface";

interface InputsState {
  inputs: TInputs[] | null;
  new_input_value: string;
}

const initialState: InputsState = {
  inputs: null,
  new_input_value: ""
};

export const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    setInputs: (state, action: PayloadAction<TInputs[]>) => {
      state.inputs = action.payload;
    },
    setNewInputValue: (state, action: PayloadAction<string>) => {
      state.new_input_value = action.payload;
    },

    openInputsToChange: (state, action: PayloadAction<number>) => {
      state.inputs = [
        ...state.inputs!.map((input) => {
          if (input.id === action.payload) return { ...input, status: true };
          return { ...input, status: false };
        })
      ];
    }
  }
});

export default inputsSlice.reducer;
export const inputsActions = inputsSlice.actions;
