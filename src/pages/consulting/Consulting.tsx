import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";

import consultingTitle from "../../../public/images/consulting/consulting-title.png";
import consultingPhoto1 from "../../../public/images/consulting/consulting-photo1.png";
import consultingPhoto2 from "../../../public/images/consulting/consulting-photo2.png";
import consultingPhoto3 from "../../../public/images/consulting/consulting-photo3.png";

import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import ConsultingMobile from "./mobile/ConsultingMobile";

export default function Consulting() {
    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <ConsultingMobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="기술컨설팅" third="기술컨설팅" />

            <div className="w-full flex flex-col gap-4">
                <PageTitle title="기술컨설팅" />
                <div className="w-full h-14" />

                <p className={cn(
                    "text-2xl text-primary pl-30",
                    isLaptop && "text-xl"
                )}>
                    ・ 기술컨설팅
                </p>

                <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                    {/* HERO */}
                    <div className="w-full h-60 relative">
                        <img src={consultingTitle} className="w-full h-full object-cover" />
                        <div className="w-full absolute bottom-0 left-0 bg-primary/70 flex justify-center items-center py-4">
                            <p className={cn(
                                "text-center text-white",
                                isLaptop && "text-sm"
                            )}>
                                글로브스타는 인증기관 출신들로 구성된 전문가그룹으로
                                <br />
                                맞춤형 기술컨설팅으로 고객의 시간투자와 노력을 최적화해 드립니다.
                            </p>
                        </div>
                    </div>

                    {/* 이미지 */}
                    <div className="flex h-60 w-full justify-center px-10 gap-4">
                        <img src={consultingPhoto1} className="w-[33%] h-full object-fill" />
                        <img src={consultingPhoto2} className="w-[33%] h-full object-fill" />
                        <img src={consultingPhoto3} className="w-[33%] h-full object-fill" />
                    </div>

                    {/* 리스트 */}
                    <div className={cn(
                        "w-full text-label px-20 flex flex-col gap-4 font-bold",
                        isLaptop && "text-sm"
                    )}>
                        <div className="flex">
                            <p className="min-w-3">・</p>
                            <p>
                                해외 철도시장 진출을 위한 유럽철도기술 인증 컨설팅
                            </p>
                        </div>
                        <div className="flex">
                            <p className="min-w-3">・</p>
                            <p>
                                해외시장에서의 철도업무 수행을 위한 기술지원 (RAMS, ISA, SE)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}