import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import TechNavBar from "./components/nav-bar/TechNavBar";

import ramsTitle from "../../../public/images/tech/rams-title.png";
import education from "../../../public/images/tech/rams-education.png";
import photo from "../../../public/images/tech/rams-photo.png";

export default function Tech() {
    return <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="철도기술" third="RAMS" />
        <div className="w-full flex flex-col gap-4">
            <PageTitle title="철도기술" />
            <TechNavBar />
            <p className="text-2xl text-primary pl-30">
                ・ RAMS
            </p>
            <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                <div className="w-full h-60 relative">
                    <img src={ramsTitle} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0">
                        <p className="w-full h-4/5 px-24 bg-black/50 text-white flex items-center text-lg">
                            RAMS (Reliability, Availability, Maintainability, Safety)는 <br /><br />
                            신뢰성 (Reliability), 가용성 (Availability), 유지보수성 (Maintainability), 안전성 (Safety) 으로 철도표준인 EN50126(IEC62278), EN50128(IEC62279), EN50129(IEC62425) 에 따른 철도 프로젝트의 가용성 및 안전성 예측 및 입증 기술입니다.
                        </p>
                        <p className="w-full h-1/5 bg-primary text-white px-8 flex items-center justify-center">
                            "글로브스타는 유럽인증기관 업무 수행경험으로 국내외 시스템/서브시스템과 부품에 대한 고객의 프로젝트 목표값을 예측, 보증 및 입증합니다."
                        </p>
                    </div>
                </div>
                <div className="flex h-80 w-full justify-center px-10 gap-8">
                    <img src={education} className="w-[40%] h-full object-fill" />
                    <img src={photo} className="w-[40%] h-full object-fill" />
                </div>
                <div className="w-full flex flex-col px-10 gap-1">
                    <p className="text-label font-bold text-lg">
                        신뢰성 (Reliability)
                    </p>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            시스템/서브시스템/장치/부품이 주어진 조건하에서 폐기될 떄 까지 고장없이 안정적으로 성능을 발휘하는 확률로 MTBF/MTTF/신뢰도 등으로 표현합니다.
                        </p>
                    </div>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            시스템/서브시스템/장치/부품의 설계단계에서 신뢰성을 예측하여 입증된 장치를 선정하고, 기능적으로 중요장치를 이중계 및 다중계로 배열, Fail-safe 개념적용, 장애발생을 즉시 모니터링할 수 있는 구조로 시스템의 신뢰성 목표를 달성할 수 있도록 설계를 관리합니다.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col px-10 gap-1">
                    <p className="text-label font-bold text-lg">
                        가용성 (Availability)
                    </p>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            필요한 외적자원 (환경, 시간 등) 이 공급된다는 가정하에서 신뢰성과 유지보수성을 계산하여 시스템이나 서브시스템이 특정시점 또는 기간에 걸쳐 주어진 기능을 발휘할 수 있는 상태에 대한 능력을 나타냅니다.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col px-10 gap-1">
                    <p className="text-label font-bold text-lg">
                        유지보수성 (Maintainability)
                    </p>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            시스템/서브시스템/장치/부품에 고장이나 결함이 발생했을 때, 필요한 외적자원이 공급된다는 가정에서 해당 시스템/서브시스템/장치/부품을 정비하여 정상 복귀할 수 있는 시간적인 능력으로 MTTR/보전도 등으로 표현합니다.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col px-10 gap-1">
                    <p className="text-label font-bold text-lg">
                        안전성 (Safety)
                    </p>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            철도시스템/서브시스템이 안전성 목표를 달성하여 설계·제작되도록 관리합니다.
                        </p>
                    </div>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            시스템의 해저드(Hazard)를 식별, 분류한 위험원분석을 실시하여 위험(Risk)을 허용가능한 수준으로 낮추어 해저드를 관리합니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}