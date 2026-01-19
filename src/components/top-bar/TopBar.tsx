import { useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo.png";
import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";

export default function TopBar() {

    const navigate = useNavigate();

    const device = useDeviceStore((s) => s.deviceType);

    const isTablet = device === "tablet";

    return (
        <div
            className={cn(
                // ✅ 기존 PC / laptop 클래스 (절대 수정 X)
                "w-full h-20 flex px-16 items-center justify-between pt-2 pb-2",

                // ✅ tablet일 때만 보정
                isTablet && "h-14 px-4"
            )}
        >
            <div
                className={cn(
                    // ✅ 기존 클래스 유지
                    "h-full flex items-end cursor-pointer",

                    // tablet 보정 (정렬 안정)
                    isTablet && "items-center"
                )}
                onClick={() => navigate("/")}
            >
                <img
                    src={logo}
                    className={cn(
                        // ✅ 기존 클래스 유지
                        "h-full",

                        // tablet일 때만 축소
                        isTablet && "h-8"
                    )}
                />
                {!isTablet && <h1
                    className={cn(
                        // ✅ 기존 클래스 유지
                        "text-label text-lg pb-1 font-semibold",

                        // tablet 보정
                        isTablet && "text-sm pb-0"
                    )}
                >
                    철도시스템기술 인증 전문회사
                </h1>}
            </div>

            <div className="flex flex-col items-center">
                <p
                    className={cn(
                        // ✅ 기존 클래스 유지
                        "text-label text-sm font-semibold tracking-tighter",

                        // tablet 축소
                        isTablet && "text-xs"
                    )}
                >
                    전문가 상담 / 무료세미나 신청
                </p>
                <div className="flex gap-1 items-center">
                    <p
                        className={cn(
                            // ✅ 기존 클래스 유지
                            "text-primary text-xl font-bold",

                            // tablet 축소
                            isTablet && "text-base"
                        )}
                    >
                        02-6353-1505
                    </p>
                </div>
            </div>
        </div>
    );
}