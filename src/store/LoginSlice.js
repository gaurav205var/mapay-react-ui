import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const LoginUser = createAsyncThunk("LoginData", async (loginData) => {
  try {
    const response = await fetch(
      "https://creddemoapi.azurewebsites.net/api/User/LogIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );

    if (!response.ok) {
      let errorResponse;
      try {
        const contentType = response.headers.get("content-type");

        // Check if the response has a JSON content type
        if (contentType && contentType.includes("application/json")) {
          // Try to parse the error response as JSON
          errorResponse = await response.json();
        } else {
          // If content type is not JSON, handle it accordingly
          errorResponse = { message: "Unexpected server error" };
        }
      } catch (error) {
        // If parsing as JSON fails, use a default error message
        errorResponse = { message: "Unexpected server error" };
      }

      // Throw an error with the status, status text, and error message
      throw new Error(
        `HTTP error! Status: ${response.status}, ${response.statusText}, ${errorResponse.message}`
      );
    }

    // Check if the response contains JSON data
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("success", data);

      return { data, status: response.status };
    } else {
      return { status: response.status };
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
});

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState: {
    // isAuthenticated: localStorage.getItem("token") ? true : false,
    user: "",
    // token: localStorage.getItem("token") || "",
    loading: false,
    error: null,
    loginStatus: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, { payload: { data, status } }) => {
        state.loading = false;
        // state.token = data.accessToken;
        // state.isAuthenticated = true;
        state.loginStatus = { status };
        // localStorage.setItem("token", JSON.stringify(data.accessToken));
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { login, logout } = LoginSlice.actions;
export default LoginSlice.reducer;