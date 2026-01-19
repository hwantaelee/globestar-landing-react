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
                    "flex-1 px-4 h-12 flex items-center text-lg justify-center font-medium transition-colors bg-white",
                    isTablet && "text-xs h-fit",
                    isActive ? "text-primary" : "text-label"
                )
            }
        >
            {title}
        </NavLink>
    );
}