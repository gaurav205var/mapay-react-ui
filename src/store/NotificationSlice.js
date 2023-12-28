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
        // const { notificationCount } = responseData;
        const notificationCount = 5;
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
        console.log("HTTP Status Code:", GetNotification.status);
        console.log("Headers:", GetNotification.headers);

        if (!GetNotification.ok) {
            throw new Error(`HTTP error! Status: ${GetNotification.status}`);
        }

        const ResNotification = await GetNotification.json();
        console.log("heyyy", ResNotification);
        return {
            ResNotification
        };

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
        error: null,
        data: ""
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(Notification.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(Notification.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.ResNotification;
        })
        builder.addCase(Notification.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload;
        })
    }
}
)
export default NotificationSlice.reducer