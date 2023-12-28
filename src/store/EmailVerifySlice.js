import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const GetUserandOtp = createAsyncThunk("uid", async (uid) => {
  console.log("id in email Slice",uid)
  try {
    //fetch the user details using user id
    const GetUser = await fetch(`https://creddemoapi.azurewebsites.net/api/User/GetUser/${uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const UserData = await GetUser.json();
    console.log("USER DATA", UserData)

    //fetch OTP 
    const GetOtp = await fetch(`https://creddemoapi.azurewebsites.net/api/User/GetUserOtp/${uid}/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const otp = await GetOtp.json();
    console.log("OTP ", otp);
    return {
      UserData,
      otp
    }
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    throw error;
  };
});

export const EmailVerification = createAsyncThunk(
  "input",
  async (input) => {
    const response = await fetch(
      "https://creddemoapi.azurewebsites.net/api/User/EmailVerify",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      }
    );

    if (!response.ok) {
      throw new Error("Error in API call");
    }

    const data = await response.json();
    return data;
  }
);


const EmailVerifySlice = createSlice({
  name: "EmailVerification",
  initialState: {
    data:"",
    UserData: "",
    loading: false,
    error: null,
    otp: "",
    verifyemail:""
  },
  extraReducers: (builder) => {
    builder.addCase(EmailVerification.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(EmailVerification.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    builder.addCase(EmailVerification.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    // Add the new extraReducers case for GetUserandOtp
    builder.addCase(GetUserandOtp.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(GetUserandOtp.fulfilled, (state, { payload: { UserData,otp } }) => {
      state.loading = false;
      state.UserData = UserData;
      state.otp = otp;
    })
    builder.addCase(GetUserandOtp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  }
})

export default EmailVerifySlice.reducer