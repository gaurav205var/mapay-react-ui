import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

export const CheckEmail = createAsyncThunk(
  "email",
  async (email, { dispatch }) => {
    try {
      const emailResponse = await fetch(
        `https://creddemoapi.azurewebsites.net/api/User/CheckEmail/${email}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const emailData = await emailResponse.json();

      const { userid, fullname } = emailData;
      const uid = userid;
      const link = generateLink();
      const payloadForSecondApi = {
        link,
        fullname,
        email,
        uid,
      };

      // Fetch another API using POST method
      const ResetPasswordLink = await fetch(
        "https://creddemoapi.azurewebsites.net/api/User/ResetPasswordLink",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payloadForSecondApi),
        }
      );
      const additionalApiData = await ResetPasswordLink.json();

      // Perform actions with the additionalApiData as needed

      return {
        emailData,
        additionalApiData,
      };
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  }
);

// Function to generate a random token
const generateToken = () => {
  const tokenLength = 8; // Set the desired length of your token
  const randomBytes = CryptoJS.lib.WordArray.random(tokenLength);
  return CryptoJS.enc.Hex.stringify(randomBytes);
};

// Function to calculate expiration time and convert it to base64
const calculateExpiration = () => {
  const expirationTime = new Date();
  expirationTime.setMinutes(expirationTime.getMinutes() + 15);

  // Format expiration time as "yyyy-MM-ddTHH:mm:ssZ"
  const formattedExpiration = expirationTime
    .toISOString()
    .replace(/\.\d+Z$/, "Z");

  // Convert expiration to base64
  const expirationBase64 = btoa(formattedExpiration);

  return expirationBase64;
};

// Usage
const generateLink = () => {
  const token = generateToken();

  const expirationBase64 = calculateExpiration();

  const absoluteUrl = window.location.origin; // Get the current absolute URL

  const link = `${absoluteUrl}/new-password/${token}/${expirationBase64}`;

  return link;
};

//slice
const ResetPwdSlice = createSlice({
  name: "ResetPwdSlice",
  initialState: {
    loading: false,
    error: null,
    pass: "",
    additionalApiData: "", // New field to store additional API data
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(CheckEmail.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(CheckEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.pass = action.payload;
      state.additionalApiData = action.payload.additionalApiData;
    });
    builder.addCase(CheckEmail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const selectAdditionalApiData = (state) =>
  state.resetLink.additionalApiData;

export default ResetPwdSlice.reducer;
