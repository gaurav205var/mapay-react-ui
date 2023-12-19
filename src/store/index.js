import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import SignUpSlice from "./SignUpSlice";
import forget_pwdSlice from "./forget_pwdSlice";
import setNewPwdSlice from "./setNewPwdSlice";

const store = configureStore({
  reducer: {
    login: LoginSlice,
    signup: SignUpSlice,
    resetLink: forget_pwdSlice,
    resetPwd: setNewPwdSlice,
  },
});

export default store;
