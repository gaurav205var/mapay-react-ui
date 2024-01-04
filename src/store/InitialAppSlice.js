import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const DropDown = createAsyncThunk("str", async (str) => {
    const authToken = localStorage.getItem("token");
    console.log("toekn", authToken);
    console.log("application Slice", str);
    try {
        const GetProfession = await fetch(`https://creddemoapi.azurewebsites.net/api/InitialApplication/HealthProfession/${str}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            }
        });
        const response = await GetProfession.json();
        console.log("Profession", response);

        // fetch another Api for getting Registration Type
        const GetRegistraion = await fetch("https://creddemoapi.azurewebsites.net/api/InitialApplication/RegistrationTypes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            }

        });
        const anotherResponse = await GetRegistraion.json();
        console.log("Registration Type", anotherResponse);

        return { response, anotherResponse };
    }
    catch (error) {
        // Handle errors
        console.error("Error:", error);
        throw error;
    };

});


export const GetDoc = createAsyncThunk("hpid", async (hpid) => {
    const authToken = localStorage.getItem("token");
    try {
        const GetDocList = await fetch(`https://creddemoapi.azurewebsites.net/api/InitialApplication/Getdocname/${hpid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            }
        });
        const DocList = await GetDocList.json();
        console.log("DocList", DocList);
        return {
            DocList
        }

    } catch (error) {
        // Handle errors
        console.error("Error:", error);
        throw error;
    };
});

const InitialAppSlice = createSlice({
    name: "InitialApplication",
    initialState: {
        loading: "",
        error: null,
        data: "",
        registraion: "",
        docList: ""
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(DropDown.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(DropDown.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.response;
            state.registraion = action.payload.anotherResponse;
        })
        builder.addCase(DropDown.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        
        // Add the new extraReducers case for GetUserandOtp
        builder.addCase(GetDoc.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(GetDoc.fulfilled, (state, action) => {
            state.loading = false;
           state.docList = action.payload.DocList;
        })
        builder.addCase(GetDoc.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

    }
})

export default InitialAppSlice.reducer