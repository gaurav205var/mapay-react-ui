import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const SignUpUser = createAsyncThunk("userSignUp", async (SignUpData) => {
  try {
    const response = await fetch("https://creddemoapi.azurewebsites.net/api/User/SignUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SignUpData),
    });

    if (!response.ok) {
      throw new Error("Error in API call");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
});

export const SignUpSlice = createSlice({
  name: "SignUpSlice",
  initialState: {
    data:"",
    loading: false,
    error: null,
    SignUpStatus: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignUpUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(SignUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(SignUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export default SignUpSlice.reducer;
