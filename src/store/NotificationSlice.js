import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const Notification = createAsyncThunk("uid", async (uid) => {
    const authToken = localStorage.getItem("token");
    console.log("toekn", authToken);
    console.log("id in notification Slice", uid)
    console.log("tyepe", typeof (uid))
    try {

        const GetUser = await fetch(`https://creddemoapi.azurewebsites.net/api/Notifications/GetUserDetails/${uid}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            }
        });
        const responseData = await GetUser.json();
        const { notificationCount } = responseData;
        console.log("count", notificationCount);
        console.log("Data:", responseData);

        //fetch notification
        const GetNotification = await fetch(`https://creddemoapi.azurewebsites.net/api/Notifications/GetNotification/${uid}/${notificationCount}
`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            }
        });
        const ResNotification = await GetNotification.json();
        console.log("success", ResNotification);

    } catch (error) {
        // Handle errors
        console.error("Error:", error);
        throw error;
    };
});


const NotificationSlice = createSlice({
    name: "NotificationSlice",
    initialState: {
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(Notification.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(Notification.fulfilled, (state, action) => {
            state.loading = false;
        })
        builder.addCase(Notification.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
}
)
export default NotificationSlice.reducer