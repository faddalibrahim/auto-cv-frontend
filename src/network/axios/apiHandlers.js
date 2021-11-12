import axiosClient from "./apiClient";
import {
  STUDENT_LOGIN,
  STUDENT_REGISTER,
  STUDENT_FORGOT_PASSWORD,
  STUDENT_RESET_PASSWORD,
} from "./apiEndPoints";

export function studentLogin(data) {
  return axiosClient.post(STUDENT_LOGIN, data);
}

export function studentRegister(data) {
  return axiosClient.post(STUDENT_REGISTER, data);
}

export function studentForgotPassword(data) {
  return axiosClient.post(STUDENT_FORGOT_PASSWORD, data);
}

export function studentResetPassword(data) {
  return axiosClient.post(STUDENT_RESET_PASSWORD, data);
}
