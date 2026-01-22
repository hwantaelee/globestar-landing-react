

import ramsTitle from "../../../../public/images/tech/rams-title.png";
import education from "../../../../public/images/tech/rams-education.png";
import photo from "../../../../public/images/tech/rams-photo.png";
import photo2 from "../../../../public/images/tech/rams-photo2.png";

import Breadcrumb from "../../../components/Breadcrumb";
import TechNavBar from "../components/nav-bar/TechNavBar";

export default function TechMobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            {/* breadcrumb 유지 */}
            <Breadcrumb first="HOME" second="철도기술" third="RAMS" />

            {/* 모바일 타이틀 */}
            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                철도기술
            </h1>

            {/* 탭 네비 */}
            <TechNavBar />

            {/* 섹션 타이틀 */}
            <p className="text-lg text-primary">
                ・ RAMS
            </p>

            {/* HERO 이미지 */}
            <div className="w-full relative">
                <img
                    src={ramsTitle}
                    className="w-full aspect-video object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-4">
                    <p className="text-white text-sm leading-relaxed">
                        RAMS (Reliability, Availability, Maintainability, Safety)는
                        신뢰성 (Reliability), 가용성 (Availability), 유지보수성 (Maintainability), 안전성 (Safety) 으로
                        철도표준인 EN50126(IEC62278), EN50128(IEC62279), EN50129(IEC62425) 에 따른
                        철도 프로젝트의 가용성 및 안전성 예측 및 입증 기술입니다.
                    </p>
                </div>
            </div>

            {/* 강조 문구 */}
            <div className="bg-primary text-white text-xs px-4 py-3 text-center">
                "글로브스타는 유럽인증기관 업무 수행경험으로 국내외 시스템/서브시스템과 부품에 대한
                고객의 프로젝트 목표값을 예측, 보증 및 입증합니다."
            </div>

            {/* 이미지 영역 */}
            <div className="flex flex-col gap-4">
                <img
                    src={education}
                    className="w-full h-48 object-fill"
                />
                <img
                    src={photo}
                    className="w-full h-48 object-fill"
                />
                <img src={photo2}
                    className="w-full h-48 object-fill"
                />
            </div>

            {/* 본문 섹션 */}
            <Section
                title="신뢰성 (Reliability)"
                items={[
                    "시스템/서브시스템/장치/부품이 주어진 조건하에서 폐기될 때 까지 고장없이 안정적으로 성능을 발휘하는 확률로 MTBF/MTTF/신뢰도 등으로 표현합니다.",
                    "시스템/서브시스템/장치/부품의 설계단계에서 신뢰성을 예측하여 입증된 장치를 선정하고, 기능적으로 중요장치를 이중계 및 다중계로 배열, Fail-safe 개념적용, 장애발생을 즉시 모니터링할 수 있는 구조로 시스템의 신뢰성 목표를 달성할 수 있도록 설계를 관리합니다.",
                ]}
            />

            <Section
                title="가용성 (Availability)"
                items={[
                    "필요한 외적자원 (환경, 시간 등) 이 공급된다는 가정하에서 신뢰성과 유지보수성을 계산하여 시스템이나 서브시스템이 특정시점 또는 기간에 걸쳐 주어진 기능을 발휘할 수 있는 상태에 대한 능력을 나타냅니다.",
                ]}
            />

            <Section
                title="유지보수성 (Maintainability)"
                items={[
                    "시스템/서브시스템/장치/부품에 고장이나 결함이 발생했을 때, 필요한 외적자원이 공급된다는 가정에서 해당 시스템/서브시스템/장치/부품을 정비하여 정상 복귀할 수 있는 시간적인 능력으로 MTTR/보전도 등으로 표현합니다.",
                ]}
            />

            <Section
                title="안전성 (Safety)"
                items={[
                    "철도시스템/서브시스템이 안전성 목표를 달성하여 설계·제작되도록 관리합니다.",
                    "시스템의 해저드(Hazard)를 식별, 분류한 위험원분석을 실시하여 위험(Risk)을 허용가능한 수준으로 낮추어 해저드를 관리합니다.",
                ]}
            />
        </div>
    );
}

function Section({
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
                <div key={idx} className="flex text-label text-sm leading-relaxed">
                    <span className="min-w-3">•</span>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    );
}