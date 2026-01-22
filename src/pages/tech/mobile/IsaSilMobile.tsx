import Breadcrumb from "../../../components/Breadcrumb";
import TechNavBar from "../components/nav-bar/TechNavBar";

import isaSilTitle from "../../../../public/images/tech/isa-sil-title.png";
import sil4 from "../../../../public/images/tech/sil4.png";
import sil3 from "../../../../public/images/tech/sil3.png";

export default function IsaSilMobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="철도기술" third="ISA/SIL인증" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                철도기술
            </h1>

            <TechNavBar />

            <p className="text-lg text-primary font-semibold">
                ・ ISA/SIL인증
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={isaSilTitle}
                    className="w-full aspect-video object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center px-4">
                    <p className="text-white text-sm leading-relaxed">
                        ISA (Independent Safety Assessment)는
                        독립안전평가로 유럽철도표준에 따라 철도시스템, 서브시스템 및 부품에 대한 안전성평가 인증(SIL인증)입니다.
                    </p>
                </div>
            </div>

            <div className="bg-primary text-white text-xs px-4 py-3 text-center">
                “글로브스타는 유럽인증기관에서의
                다양한 시스템 수행 경험과 관련자료를 통해
                SIL 인증을 원스톱으로 해결합니다.”
            </div>

            <div className="flex flex-col gap-4">
                <img src={sil3} className="w-full h-48 object-fill" />
                <img src={sil4} className="w-full h-48 object-fill" />
            </div>

            <MobileSection
                title="ISA의 필요성 및 장점"
                items={[
                    "서브시스템의 잠재적인 리스크를 찾아 설계에 반영토록 하여, 안전 설계를 보장하여 줍니다.",
                    "각각의 서브시스템 개발단계에서 전체 시스템의 안전성을 위한 요구사항의 제시가 가능합니다.",
                    "시스템 개발과정에서 위험분석 결과를 적용하여 안전한 인터페이스를 확인합니다.",
                    "설계단계의 시스템 요구사항이 실제 상용화를 위해 충족되었는지 적합성을 평가합니다.",
                    "전체 시스템의 개발 비용과 향후 운영 및 유지보수 비용을 절감할 수 있습니다.",
                    "공급자 및 운영자로부터 독립적인 기관의 평가로 객관적인 신뢰를 제공할 수 있습니다."
                ]}
            />

            <MobileSection
                title="ISA / SIL 인증 컨설팅"
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
    );
}

function MobileSection({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-label font-semibold text-base">
                {title}
            </p>

            {items.map((text, idx) => (
                <div key={idx} className="flex text-label text-sm">
                    <span className="min-w-3">•</span>
                    <p className="whitespace-pre-line">{text}</p>
                </div>
            ))}
        </div>
    );
}