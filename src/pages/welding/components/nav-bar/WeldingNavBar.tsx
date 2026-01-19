import { useDeviceStore } from "../../../../store/useDeviceStore";
import { cn } from "../../../../utils/cn";
import TabButton from "./TabButton";

export default function WeldingNavBar() {

    const isTablet = useDeviceStore((s) => s.deviceType === "tablet");

    return <aside className={cn("w-full h-14 bg-white flex items-center",
        isTablet && "h-fit"
    )}>
        <TabButton url="/welding/iso3834" title="ISO3834" />
        <TabButton url="/welding/en15085" title="EN15085-2" />
        <TabButton url="/welding/en1090" title="EN1090" />
        <TabButton url="/welding/wps" title="용접사/WPS" />
    </aside>
}