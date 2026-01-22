import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import TechNavBar from "./components/nav-bar/TechNavBar";

import seTitle from "../../../public/images/tech/se-title.png";
import sePhoto from "../../../public/images/tech/se-photo.png";


import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import SeMobile from "./mobile/SeMobile";

export default function Se() {
    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <SeMobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="철도기술" third="SE" />

            <div className="w-full flex flex-col gap-4">
                <PageTitle title="철도기술" />
                <TechNavBar />

                <p className={cn(
                    "text-2xl text-primary pl-30",
                    isLaptop && "text-xl"
                )}>
                    ・ 시스템 엔지니어링
                </p>

                <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                    {/* HERO */}
                    <div className="w-full h-60 relative">
                        <img src={seTitle} className="w-full h-full object-cover" />

                        <div className="w-full h-full absolute flex flex-col top-0 left-0">
                            <p className={cn(
                                "w-full h-4/5 px-24 bg-black/50 text-white flex items-center text-lg",
                                isLaptop && "text-sm"
                            )}>
                                시스템 엔지니어링 (Systems Engineering)은
                                <br /><br />
                                철도 프로젝트에서 성공적인 사업 실현과 전체 시스템의 조화를 위해 시스템간 발생할 수 있는 문제점 관리를 통해 사전에 해결하고 계약조건을 만족하여 설계, 제작, 검사, 시험 및 시운전단계를 포함하여 각 서브시스템이 통합될 때 요구된 성능을 충족시키도록 관리합니다.
                            </p>

                            <p className={cn(
                                "w-full h-1/5 bg-primary text-white px-8 flex items-center justify-center",
                                isLaptop && "text-xs"
                            )}>
                                "글로브스타는 신분당선 프로젝트에서의
                                전체 시스템 SE 경험으로 고객 요구사항을 만족합니다."
                            </p>
                        </div>
                    </div>

                    {/* 본문 설명 */}
                    <div className={cn(
                        "w-full flex flex-col px-20 gap-4 text-label",
                        isLaptop && "text-sm"
                    )}>
                        <p>
                            <span className="font-black">철도시스템</span>
                            은 차량, 신호, 통신, 전력, 궤도 등 서브시스템과 역사, 터널, 교량 등 토목 건축분야 등으로 구성되어 있습니다. 서브시스템은 서로 복잡한 연관관계를 형성하고 있어 차량이 기능과 성능을 발휘하려면, 신호, 전력공급, 궤도 등 타 서브시스템의 설계 기획단계에서부터 차량과의 인터페이스를 반영하여야 발주사가 목표로 한 성능을 발휘할 수 있습니다.
                        </p>

                        <p>
                            <span className="font-black">시스템 엔지니어링 관리</span>
                            는 시스템 레벨에서 설정한 엔지니어링 목표를 서브시스템으로 할당하여, 개별 서브시스템의 설계, 설계변경, 업그레이드와 피드백을 통하여 서브시스템의 성능이 시스템레벨에서 통합된 성능을 발휘하도록 기술, 시간, 인적자원을 관리합니다.
                        </p>

                        <p>
                            <span className="font-black">30년 이상 철도시스템을</span>
                            경험한 전문 기술인력을 활용하여 철도시스템 발주사가 설정한 목표를 프로젝트 진행단계에서 수행해야 하는 업무를 정의하여 문서화하고, 시스템 엔지니어링 개별분야 엔지니어들이 유기적으로 협력하여 시스템 엔지니어링 전체분야의 진행사항과 중요사항을 공유하며 개별 서브시스템을 전체로 통합했을 때 관련 서브시스템끼리 물리적, 성능적으로 적합하도록 발주사를 지원하고 공급사를 관리합니다.
                        </p>
                    </div>

                    <div className="w-full flex flex-col px-20 gap-4">
                        <p className={cn(
                            "text-label font-bold text-lg",
                            isLaptop && "text-base"
                        )}>
                            시스템 엔지니어링 관리분야 (예시)
                        </p>

                        <div className="flex justify-between gap-4">
                            <div className={cn(
                                "w-[42%] flex flex-col text-label gap-1",
                                isLaptop && "text-sm"
                            )}>
                                {[
                                    "시스템보증 (System Assurance)",
                                    "시스템통합 (System Integration)",
                                    "RAM 관리 및 분석 (RAM Management and Analysis)",
                                    "시스템 안전성 관리 (System Safety Management)",
                                    "성능관리 (System Performance Management)",
                                    "요구사항관리 (Requirements Management)",
                                    "설계관리 (Design Management)",
                                    "형상관리 (Configuration Management)",
                                    "소프트웨어관리 (Software Management)",
                                    "소음/진동관리 (Noise/Vibration Management)",
                                    "EMC/EMI관리 (EMC/EMI Management)",
                                    "인터페이스관리 (Interface Management)",
                                    "시험 및 시운전관리 (Test & Commissioning Management)",
                                ].map((item, idx) => (
                                    <div key={idx} className="flex">
                                        <p className="min-w-3">・</p>
                                        <p>{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex-1 flex items-end justify-end">
                                <img src={sePhoto} className="w-full object-fill h-80 object-bottom-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}