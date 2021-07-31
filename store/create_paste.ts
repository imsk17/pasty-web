import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PasteState {
  text: string,
  is_modifiable: boolean
}

const initialState: PasteState = {
  text: "",
  is_modifiable: true
}
export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
    setModifiability: (state, action: PayloadAction<boolean>) => {
      state.is_modifiable = action.payload
    }
  }
})

export const { setText, setModifiability } = pasteSlice.actions
export default pasteSlice.reducer