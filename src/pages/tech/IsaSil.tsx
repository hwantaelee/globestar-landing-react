import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import TechNavBar from "./components/nav-bar/TechNavBar";

import isaSilTitle from "../../../public/images/tech/isa-sil-title.png";
import sil4 from "../../../public/images/tech/sil4.png";
import sil3 from "../../../public/images/tech/sil3.png";

export default function IsaSil() {
    return <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="철도기술" third="ISA/SIL인증" />
        <div className="w-full flex flex-col gap-4">
            <PageTitle title="철도기술" />
            <TechNavBar />
            <p className="text-2xl text-primary pl-30">
                ・ ISA/SIL인증
            </p>
            <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                <div className="w-full h-60 relative">
                    <img src={isaSilTitle} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0">
                        <p className="w-full h-4/5 px-24 bg-black/50 text-white flex items-center text-lg">
                            ISA(Independent Safety Assessment)는 <br /><br />
                            독립안전평가로 유럽철도표준에 따라 철도시스템, 서브시스템 및 부품에 대한 안전성평가인증(SIL인증)입니다.
                        </p>
                        <p className="w-full h-1/5 bg-primary text-white px-8 flex items-center justify-center">
                            "글로브스타 테크놀러지에서 유럽인증기관에서의 다양한 시스템 수행 경험과 관련자료를 통해 인증을 원스톱으로 해결합니다."
                        </p>
                    </div>
                </div>
                <div className="flex h-60 w-full justify-center px-10 gap-8">
                    <img src={sil4} className="w-[40%] h-full object-fill" />
                    <img src={sil3} className="w-[40%] h-full object-fill" />
                </div>
                <p className="text-label px-10">
                    철도시스템 개발자는 제한된 인적상황, 부정확한 시스템 요구사항, 시스템간의 인터페이스 문제, 요구사항의 변경 등 여러 환경조건이나 상황으로 인해 잠재적인 오류 및 결함을 무시할 수 있습니다. 결정적인 결함은 상업운행에 커다란 영향을 미치는 것은 물론 인명피해 등 치명적인 손실을 가져올 수 있습니다.
                    <br /><br />
                    이런 시스템적인 문제를 해결하기 위해 독립안전성평가(SIL인증)가 필요합니다.
                </p>
                <div className="w-full flex flex-col px-10 gap-1">
                    <p className="text-label font-bold text-lg">
                        ISA의 필요성 및 장점
                    </p>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            서브시스템의 잠재적인 리스크를 찾아 설계에 반영토록 하여, 안전 설계를 보장하여 줍니다.
                        </p>
                    </div>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            각각의 서브시스템 개발단계에서 전체 시스템의 안전성을 위한 요구사항의 제시가 가능합니다.
                        </p>
                    </div>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            시스템 개발과정에서 위험분석 결과를 적용하여 안전한 인터페이스를 확인합니다.
                        </p>
                    </div>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            설계단계의 시스템 요구사항이 실제 상용화를 위해 충족되었는지 적합성을 평가합니다.
                        </p>
                    </div>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            전체 시스템의 개발 비용과 향후 운영 및 유지보수 비용을 절감할 수 있습니다.
                        </p>
                    </div>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            공급자 및 운영자로부터 독립적인 기관의 평가로 객관적인 신뢰를 제공할 수 있습니다.
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-col px-10 gap-1">
                    <p className="text-label font-bold text-lg">
                        ISA / SIL 인증 컨설팅
                    </p>
                    <div className="flex text-label">
                        <p className="min-w-3">
                            ・
                        </p>
                        <p>
                            철도표준 EN50126(IEC62278), EN50128(IEC62279), EN50129(IEC62425) 시리즈에 따른 시스템/서브시스템 개발주기에 따라 다음 컨설팅을 수행합니다.
                            <br />
                            * SIL 인증을 위한 계획 수립
                            <br />
                            * 안전문서 작성 및 평가
                            <br />
                            * 안전 및 품질 심사 컨설팅
                            <br />
                            * V&V 평가 / 입회시험 컨설팅
                            <br />
                            * 종합안전기술서 (Safety Case) 작성 컨설팅
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}