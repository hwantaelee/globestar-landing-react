import { useDeviceStore } from "../../../../store/useDeviceStore";
import { cn } from "../../../../utils/cn";
import TabButton from "./TabButton";

export default function IntroduceNavBar() {

    const isTablet = useDeviceStore((s) => s.deviceType === "tablet");

    return <aside className={cn("w-full h-14 bg-white flex items-center",
        isTablet && "h-fit"
    )}>
        <TabButton url="/introduce" title="회사소개" end={true} />
        <TabButton url="/introduce/clients" title="고객사 리스트" />
        <TabButton url="/introduce/map" title="오시는 길" />
    </aside>
}