import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import TechNavBar from "./components/nav-bar/TechNavBar";

import krts from "../../../public/images/krts.png";
import safetyActTitle from "../../../public/images/tech/safety-act-title.png";
import typeApproval1 from "../../../public/images/tech/type-approval1.png";
import safetyActPhoto from "../../../public/images/tech/safety-act-photo.png";
import typeApproval2 from "../../../public/images/tech/type-approval2.png";
import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import SafetyActMobile from "./mobile/SafetyActMobile";

export default function SafetyAct() {

    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <SafetyActMobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="철도기술" third="철도안전법승인" />

            <div className="w-full flex flex-col gap-4">
                <PageTitle title="철도기술" />
                <TechNavBar />

                <p className={cn(
                    "text-2xl text-primary pl-30",
                    isLaptop && "text-xl"
                )}>
                    ・ 철도안전법승인
                </p>

                <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                    {/* HERO */}
                    <div className="w-full h-60 relative">
                        <img src={safetyActTitle} className="w-full h-full object-cover" />

                        <div className="w-full h-full absolute flex flex-col top-0 left-0">
                            <div className="w-full h-4/5 flex items-center justify-between gap-8 px-24 bg-black/50">
                                <p className={cn(
                                    "w-[70%] text-white flex items-center text-lg",
                                    isLaptop && "text-sm"
                                )}>
                                    철도차량 및 철도용품은 철도안전법에 따라 형식승인 및 제작자승인을 받아야 합니다.<br />
                                    형식승인은 유럽의 TSI (Technical Specification for Interoperability) <br />
                                    제작자승인은 ISO/TS22163(IRIS) 을 반영하여 제정된 기술기준에 따라
                                    검사를 받고 <br />
                                    국토교통부 장관이 승인증명서를 발행합니다.
                                </p>

                                <div className="w-[20%] h-[70%] flex justify-end">
                                    <img src={krts} className="object-contain" />
                                </div>
                            </div>

                            <p className={cn(
                                "w-full h-1/5 bg-primary text-white px-8 flex items-center justify-center",
                                isLaptop && "text-xs"
                            )}>
                                "글로브스타 전문가의 기술컨설팅은 승인비용과 시간을 획기적으로 줄여드립니다."
                            </p>
                        </div>
                    </div>

                    {/* 이미지 */}
                    <div className="flex h-60 w-full justify-center px-10 gap-8">
                        <img src={typeApproval1} className="w-[33%] h-full object-fill" />
                        <img src={safetyActPhoto} className="w-[33%] h-full object-fill" />
                        <img src={typeApproval2} className="w-[33%] h-full object-fill" />
                    </div>

                    <p className={cn(
                        "w-full text-xl text-primary font-bold px-10",
                        isLaptop && "text-lg"
                    )}>
                        형식승인
                    </p>
                    <Section title="형식승인검사" isLaptop={isLaptop}
                        text="철도차량/용품의 설계가 기술기준에 적합한 지를 검증하기 위해 수행되는 설계적합성검사, 합치성검사, 용품형식시험을 말합니다." />
                    <Section title="설계적합성검사" isLaptop={isLaptop}
                        text="철도차량/용품의 설계가 기술기준에 적합한지를 검증하고 이를 객관적으로 문서화하는 것을 말합니다." />
                    <Section title="합치성검사" isLaptop={isLaptop}
                        text="철도차량/용품이 승인된 설계와 합치하게 제작되었는지를 검증하고 이를 객관적으로 문서화하는 것을 말합니다." />
                    <Section title="용품형식시험" isLaptop={isLaptop}
                        text="철도차량/용품의 부품단계, 구성품단계, 완성품단계, 시운전단계에서 기술기준에 적합한지를 확인하는 시험을 말합니다." />

                    <p className={cn(
                        "w-full text-xl text-primary font-bold px-10",
                        isLaptop && "text-lg"
                    )}>
                        제작자승인
                    </p>
                    <Section title="제작자승인검사" isLaptop={isLaptop}
                        text="형식승인을 받은 철도차량/용품과 동등한 형식의 철도차량/용품을 제작할 수 있는지를 검증하기 위해 수행되는 품질관리체계 적합성검사와 제작검사를 말합니다." />
                    <Section title="품질관리체계 적합성검사" isLaptop={isLaptop}
                        text="형식승인을 받은 철도차량/용품과 동등한 형식의 철도차량/용품을 제작할 수 있는 관리체계(경영, 조직, 기술인력, 생산설비, 시험·검사장비 등)와 품질유지 체계(품질관리규정, 품질관리체계, 설계관리, 공급업체관리, 제작방법·공정, 시험 및 검사기준 등)를 갖추고 있는지에 대한 검사를 말합니다." />
                    <Section title="제작검사" isLaptop={isLaptop}
                        text="철도차량/용품에 대한 품질관리체계의 적용∙운용∙유지 여부 등을 확인하기 위하여 실시하는 현장실사를 말합니다." />

                </div>
            </div>
        </div>
    );
}

/* ───────────── 공통 섹션 ───────────── */
function Section({
    title,
    isLaptop,
    text
}: {
    title: string;
    isLaptop: boolean;
    text: string;
}) {
    return (
        <>
            <div className="w-full flex flex-col px-13 gap-1">
                <p className={cn(
                    "text-label font-bold text-lg",
                    isLaptop && "text-base"
                )}>
                    {title}
                </p>

                <div className={cn(
                    "flex text-label",
                    isLaptop && "text-sm"
                )}>
                    <p className="min-w-3">・</p>
                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </>
    );
}