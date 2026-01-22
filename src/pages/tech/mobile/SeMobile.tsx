import Breadcrumb from "../../../components/Breadcrumb";
import TechNavBar from "../components/nav-bar/TechNavBar";

import seTitle from "../../../../public/images/tech/se-title.png";
import sePhoto from "../../../../public/images/tech/se-photo.png";
import { cn } from "../../../utils/cn";

export default function SeMobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="철도기술" third="SE" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                철도기술
            </h1>

            <TechNavBar />

            <p className="text-lg text-primary font-semibold">
                ・ 시스템 엔지니어링
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={seTitle}
                    className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center px-4">
                    <p className="text-white text-[10px] leading-relaxed">
                        시스템 엔지니어링 (Systems Engineering)은
                        철도 프로젝트에서 성공적인 사업 실현과 전체 시스템의 조화를 위해 시스템간 발생할 수 있는 문제점 관리를 통해 사전에 해결하고 계약조건을 만족하여 설계, 제작, 검사, 시험 및 시운전단계를 포함하여 각 서브시스템이 통합될 때 요구된 성능을 충족시키도록 관리합니다.
                    </p>
                </div>
            </div>

            <div className="bg-primary text-white text-xs px-4 py-3 text-center">
                "글로브스타는 신분당선 프로젝트에서의
                전체 시스템 SE 경험으로 고객 요구사항을 만족합니다."
            </div>

            <div className="flex flex-col gap-4 text-label text-sm">
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

            <img src={sePhoto} className="w-full h-48 object-fill" />

            <div className="w-full flex flex-col gap-4">
                <p className={cn("text-label font-bold",)}>
                    시스템 엔지니어링 관리분야 (예시)
                </p>

                <div className="flex justify-between gap-8">
                    <div className={cn("w-full flex flex-col text-label gap-1 text-sm",)}>
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
                </div>
            </div>
        </div>
    );
}