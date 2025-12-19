import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";
import { env } from "../utils/env";

export const api = axios.create({
    baseURL: env.apiUrl,
    timeout: 10000,
    withCredentials: true,
});

// 요청 인터셉터
api.interceptors.request.use(
    (config) => {
        // 예: 토큰 자동 첨부
        // const token = localStorage.getItem("accessToken"); // 로컬 스토리지 사용방식
        const token = useAuthStore.getState().token; // zustand persist 사용방식
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터
api.interceptors.response.use(
    (res) => res,
    (error) => {
        console.error("API ERROR:", error.response);

        // 401이면 자동 로그아웃 처리 (옵션)
        if (error.response?.status === 401) {
            // localStorage.removeItem("accessToken");  // 로컬 스토리지 사용방식
            useAuthStore.getState().setToken(null); // zustand persist 사용방식
            // window.location.href = "/login"; // 필요하면
        }

        return Promise.reject(error);
    }
);
