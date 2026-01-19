import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import TechNavBar from "./components/nav-bar/TechNavBar";

import isaSilTitle from "../../../public/images/tech/isa-sil-title.png";
import sil4 from "../../../public/images/tech/sil4.png";
import sil3 from "../../../public/images/tech/sil3.png";

import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import IsaSilMobile from "./mobile/IsaSilMobile";


export default function IsaSil() {
    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <IsaSilMobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="철도기술" third="ISA/SIL인증" />

            <div className="w-full flex flex-col gap-4">
                <PageTitle title="철도기술" />
                <TechNavBar />

                <p className={cn(
                    "text-2xl text-primary pl-30",
                    isLaptop && "text-xl"
                )}>
                    ・ ISA/SIL인증
                </p>

                <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                    {/* HERO */}
                    <div className="w-full h-60 relative">
                        <img src={isaSilTitle} className="w-full h-full object-cover" />

                        <div className="w-full h-full absolute flex flex-col top-0 left-0">
                            <p className={cn(
                                "w-full h-4/5 px-24 bg-black/50 text-white flex items-center text-lg",
                                isLaptop && "text-sm"
                            )}>
                                ISA (Independent Safety Assessment)는<br /><br />
                                독립안전평가로 유럽철도표준에 따라 철도시스템, 서브시스템 및 부품에 대한 안전성평가 인증(SIL인증)입니다.
                            </p>

                            <p className={cn("w-full h-1/5 bg-primary text-white px-8 flex items-center justify-center",
                                isLaptop && "text-xs"
                            )}>
                                “글로브스타 테크놀러지에서는 유럽인증기관에서의
                                다양한 시스템 수행 경험과 관련자료를 통해
                                인증을 원스톱으로 해결합니다.”
                            </p>
                        </div>
                    </div>

                    {/* 이미지 */}
                    <div className="flex h-60 w-full justify-center px-10 gap-8">
                        <img src={sil3} className="w-[40%] h-full object-fill" />
                        <img src={sil4} className="w-[40%] h-full object-fill" />
                    </div>

                    {/* 본문 */}
                    <Section
                        title="ISA의 필요성 및 장점"
                        isLaptop={isLaptop}
                        items={[
                            "서브시스템의 잠재적인 리스크를 찾아 설계에 반영토록 하여, 안전 설계를 보장하여 줍니다.",
                            "각각의 서브시스템 개발단계에서 전체 시스템의 안전성을 위한 요구사항의 제시가 가능합니다.",
                            "위험분석 결과를 적용하여 안전한 인터페이스를 확인합니다.",
                            "시스템 개발과정에서 위험분석 결과를 적용하여 안전한 인터페이스를 확인합니다.",
                            "설계단계의 시스템 요구사항이 실제 상용화를 위해 충족되었는지 적합성을 평가합니다.",
                            "전체 시스템의 개발 비용과 향후 운영 및 유지보수 비용을 절감할 수 있습니다.",
                            "공급자 및 운영자로부터 독립적인 기관의 평가로 객관적인 신뢰를 제공할 수 있습니다."
                        ]}
                    />

                    <Section
                        title="ISA / SIL 인증 컨설팅"
                        isLaptop={isLaptop}
                        items={[
                            `철도표준 EN50126(IEC62278), EN50128(IEC62279), EN50129(IEC62425) 시리즈에 따른 시스템/서브시스템 개발주기에 따라 다음 컨설팅을 수행합니다.
                            
                            * SIL 인증을 위한 계획 수립
                            * 안전문서 작성 및 평가
                            * 안전 및 품질 심사 컨설팅
                            * V&V 평가 / 입회시험 컨설팅
                            * 종합안전기술서 (Safety Case) 작성 컨설팅 `
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}

/* ───────────── 공통 섹션 ───────────── */
function Section({
    title,
    items,
    isLaptop,
}: {
    title: string;
    items: string[];
    isLaptop: boolean;
}) {
    return (
        <div className="w-full flex flex-col px-10 gap-1">
            <p className={cn(
                "text-label font-bold text-lg",
                isLaptop && "text-base"
            )}>
                {title}
            </p>

            {items.map((text, idx) => (
                <div key={idx} className={cn(
                    "flex text-label",
                    isLaptop && "text-sm"
                )}>
                    <p className="min-w-3">・</p>
                    <p className="whitespace-pre-line">{text}</p>
                </div>
            ))}
        </div>
    );
}