import { LoginPayload } from '@/models/auth';
import axiosClient from './axios-client';

export const authApi = {
  login(payload: LoginPayload) {
    const url = '/login';
    return axiosClient.post(url, payload);
  },

  logout() {
    const url = '/logout';
    return axiosClient.post(url);
  },

  getProfile() {
    const url = '/profile';
    return axiosClient.get(url);
  },
};
