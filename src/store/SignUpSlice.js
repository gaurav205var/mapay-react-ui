import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SignUpUser = createAsyncThunk("userSignUp", async (SignUpData) => {
  return fetch("https://creddemoapi.azurewebsites.net/api/User/SignUp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SignUpData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the data from the server
      console.log("Success:", data);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error:", error);
    });
});

export const SignUpSlice = createSlice({
  name: "SignUpSlice",
  initialState: {
    // isAuthenticated: localStorage.getItem("token") ? true : false,
    user: "",
    // token: localStorage.getItem("token") || "",
    loading: false,
    error: null,
    SignUpStatus: null,
  },
  reducers: {
    SignUp: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignUpUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SignUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(SignUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { SignUp } = SignUpSlice.actions;
export default SignUpSlice.reducer;
