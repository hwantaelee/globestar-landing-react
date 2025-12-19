import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 클래스명 충돌 방지 함수
 * 사용법 : cn("px-4 py-2 bg-black text-white rounded", className)
 * @param inputs 
 * @returns 
 */
export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs));
}
