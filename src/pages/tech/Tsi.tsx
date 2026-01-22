import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import TechNavBar from "./components/nav-bar/TechNavBar";

import tsiTitle from "../../../public/images/tech/tsi-title.png";
import tsiPhoto from "../../../public/images/tech/tsi-photo.png";

import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import TsiMobile from "./mobile/TsiMobile";

export default function Tsi() {
    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <TsiMobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="철도기술" third="TSI" />

            <div className="w-full flex flex-col gap-4">
                <PageTitle title="철도기술" />
                <TechNavBar />

                <p className={cn(
                    "text-2xl text-primary pl-30",
                    isLaptop && "text-xl"
                )}>
                    ・ TSI
                </p>

                <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                    {/* HERO */}
                    <div className="w-full h-60 relative">
                        <img src={tsiTitle} className="w-full h-full object-cover" />

                        <div className="w-full h-full absolute flex flex-col top-0 left-0">
                            <p className={cn(
                                "w-full h-4/5 px-24 bg-black/50 text-white flex items-center text-lg",
                                isLaptop && "text-sm"
                            )}>
                                TSI (상호운영성기술기준)는
                                <br /><br />
                                국가간 횡단하는 유럽철도에서 근본적인 안전을 확보하기 위해 유럽위원회에 의해 제정된 시행령으로 유럽내 시스템을 공급하기 위해 요구되는 기술인증입니다.
                            </p>

                            <p className={cn(
                                "w-full h-1/5 bg-primary text-white px-8 flex items-center justify-center",
                                isLaptop && "text-xs"
                            )}>
                                "인증기관 철도 프로젝트 수행 경험으로
                                고객의 인증을 신속히 지원합니다."
                            </p>
                        </div>
                    </div>

                    {/* 본문 */}
                    <div className="w-full flex px-20 gap-16 items-center">
                        <div className={cn(
                            "w-[60%] flex flex-col text-label gap-4",
                            isLaptop && "text-sm"
                        )}>
                            <p>
                                유럽위원회는 고속철도시스템을 위해 Directive 96/48/EC 를 제정하였고, 상용철도시스템을 위해 Directive 2001/16/EC 를 제정하였습니다.
                            </p>

                            <p>
                                이후 TSI 는 고속철도 시스템을 위한 기반시설, 동력장치, 차량, 제어신호, 유지보수 및 운용분야에서 발효되었으며, 상용철도시스템을 위한 화차, 화차용통신, 제어신호, 교통 운용 및 유지보수 분야에서도 발효하고 시스템의 터널내 안전 및 승객의 접근성을 위한 기준도 발효하였습니다.
                            </p>
                        </div>

                        <div className="w-[40%] flex">
                            <img src={tsiPhoto} className="w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}