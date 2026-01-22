import TabButton from "./TabButton";
import { useDeviceStore } from "../../../../store/useDeviceStore";
import { cn } from "../../../../utils/cn";

export default function TechNavBar() {
    const isTablet = useDeviceStore((s) => s.deviceType === "tablet");

    return <aside
        className={cn(
            // 기존 PC/Laptop 기본값
            "w-full h-14 bg-white flex items-center",

            // tablet에서만 2줄 허용
            isTablet && "flex-wrap h-auto h-fit"
        )}
    >
        <TabButton url="/tech" title="RAMS" end={true} />
        <TabButton url="/tech/isa-sil" title="ISA/SIL인증" />
        <TabButton url="/tech/safety-act" title="철도안전법승인" />
        <TabButton url="/tech/se" title="시스템 엔지니어링" />
        <TabButton url="/tech/iris" title="ISO/TS22163(IRIS)" />
        <TabButton url="/tech/tsi" title="TSI" />
    </aside>
}