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
      const { verifyemail, uid, tokenvalue,refreshToken } = data;
      return { data, status: response.status, verifyemail, uid, tokenvalue ,refreshToken};
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
    isAuthenticated: localStorage.getItem("token") ? true : false,
    user: "",
    token: localStorage.getItem("token") || "",
    loading: false,
    error: null,
    loginStatus: null,
    // verifyemail: "",
    uid: ""
  },
  reducers: {
    logout: (state) => {
      localStorage.clear();
      state.isAuthenticated = false;
      state.user = "";
      state.token = "";
      state.loginStatus = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, { payload: { data, status, uid, tokenvalue,refreshToken } }) => {
        state.loading = false;
        state.token = tokenvalue;
        state.isAuthenticated = true;
        state.loginStatus = { status };
        // state.verifyemail = verifyemail;
        state.uid = uid;
        state.user = data;
        localStorage.setItem("token", tokenvalue);
        localStorage.setItem("refToken",refreshToken);
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { logout } = LoginSlice.actions;
export default LoginSlice.reducer;