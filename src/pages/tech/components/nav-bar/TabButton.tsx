import { NavLink } from "react-router-dom";
import { useDeviceStore } from "../../../../store/useDeviceStore";
import { cn } from "../../../../utils/cn";

interface Props {
    url: string;
    title: string;
    end?: boolean;
}

export default function TabButton({ url, title, end = false }: Props) {
    const device = useDeviceStore((s) => s.deviceType);
    const isTablet = device === "tablet";

    return (
        <NavLink
            to={url}
            end={end}
            className={({ isActive }) =>
                cn(
                    // 기본 (PC/Laptop)
                    "flex-1 px-4 h-12 flex items-center justify-center font-medium transition-colors bg-white",

                    // tablet에서 3개씩
                    isTablet && "w-1/3 flex-none text-xs h-8",

                    isActive ? "text-primary" : "text-label"
                )
            }
        >
            {title}
        </NavLink>
    );
}