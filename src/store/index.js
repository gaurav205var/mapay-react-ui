import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import SignUpSlice from "./SignUpSlice";
import forget_pwdSlice from "./forget_pwdSlice";
import setNewPwdSlice from "./setNewPwdSlice";
import EmailVerifySlice  from "./EmailVerifySlice";
import NotificationSlice from "./NotificationSlice";

const store = configureStore({
  reducer: {
    login: LoginSlice,
    signup: SignUpSlice,
    resetLink: forget_pwdSlice,
    resetPwd: setNewPwdSlice,
    emailVerify: EmailVerifySlice,
    notification: NotificationSlice,
  },
});

export default store;
