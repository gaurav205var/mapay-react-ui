import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const CheckHp = createAsyncThunk("payload", async (payload) => {
    const { uid, hpTypeId } = payload;
    const authToken = localStorage.getItem("token");
    try {
        const Check = await fetch(`https://creddemoapi.azurewebsites.net/api/InitialApplication/CheckHP/${uid}/${hpTypeId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            }
        })
        const response = await Check.json()
        console.log("success", response);
        return {
            response
        }
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
});

export const Registration = createAsyncThunk("UserInput", async (UserInput) => {
    const authToken = localStorage.getItem("token");
    try {
        const Register = await fetch("https://creddemoapi.azurewebsites.net/api/RegistrationType/RegistrationPost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            },
            body: JSON.stringify(UserInput),
        });
        const response2 = await Register.json();
        const statusCode = Register.status;
        console.log("success", response2);
        console.log("Status Code", statusCode);
        return {
            response2,
            statusCode
        }
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
})

const CheckHpSlice = createSlice({
    name: "CheckHpSlice",
    initialState: {
        loading: false,
        error: null,
        res: "",
        uAppID: "",
        statusCode:""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(CheckHp.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(CheckHp.fulfilled, (state, action) => {
            state.loading = false;
            state.res = action.payload.response;
        })
        builder.addCase(CheckHp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        //extrareducer for another api call
        builder.addCase(Registration.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(Registration.fulfilled, (state, action) => {
            state.loading = false;
            state.uAppID = action.payload.response2;
            state.statusCode = action.payload.statusCode;
            localStorage.setItem("uappid", action.payload.response2);
        })
        builder.addCase(Registration.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
})

export default CheckHpSlice.reducer