import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";
import { useDeviceStore } from "../../store/useDeviceStore";

interface Props {
    url: string;
    title: string;
    end?: boolean;
}

export default function TabButton({ url, title, end = false }: Props) {
    const isTablet = useDeviceStore((s) => s.deviceType === "tablet");

    return (
        <NavLink
            to={url}
            end={end}
            className={() =>
                cn(
                    // ✅ 기존 PC / laptop 클래스 (절대 수정 X)
                    "flex-1 px-4 h-12 flex items-center text-lg justify-center font-medium transition-colors bg-primary text-white",

                    // ✅ tablet일 때만 글자 크기 축소
                    isTablet && "text-xs px-2"
                )
            }
        >
            {title}
        </NavLink>
    );
}