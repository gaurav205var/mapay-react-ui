import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SetNewPwd = createAsyncThunk("password", async (Password) => {
  return fetch("https://creddemoapi.azurewebsites.net/api/User/ResetPassword", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Password),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("success", data);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

const SetNewPwdSlice = createSlice({
  name: "SetNewPwd",
  initialState: {
    loading: false,
    error: null,
    res: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SetNewPwd.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(SetNewPwd.fulfilled, (state, action) => {
      state.loading = false;
      state.res = action.payload;
    });
    builder.addCase(SetNewPwd.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default SetNewPwdSlice.reducer;
