import type { AxiosResponse } from "axios";

export async function request<T>(callback: () => Promise<AxiosResponse<T>>) {
    try {
        const res = await callback();
        return { data: res.data as T, error: null };
    } catch (error: any) {
        return { data: null, error };
    }
}