import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PasteState {
  text: string
}

const initialState: PasteState = {
  text: ""
}
export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    }
  }
})

export const { setText } = pasteSlice.actions
export default pasteSlice.reducer