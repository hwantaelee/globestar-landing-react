import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import TechNavBar from "./components/nav-bar/TechNavBar";

import irisTitle from "../../../public/images/tech/iris-title.png";
import iris from "../../../public/images/tech/iris.png";
import irisPhoto1 from "../../../public/images/tech/iris-photo1.png";
import irisPhoto2 from "../../../public/images/tech/iris-photo2.png";
import irisPhoto3 from "../../../public/images/tech/iris-photo3.png";

export default function Iris() {
    return <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="철도기술" third="ISO/TS22163(IRIS)" />
        <div className="w-full flex flex-col gap-4">
            <PageTitle title="철도기술" />
            <TechNavBar />
            <p className="text-2xl text-primary pl-30">
                ・ ISO/TS22163(IRIS) - 철도산업 국제 품질경영시스템
            </p>
            <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                <div className="w-full h-60 relative">
                    <img src={irisTitle} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0">
                        <div className="w-full h-4/5 flex items-center gap-8 px-24 bg-black/50">
                            <p className="w-[70%] h-full text-white flex items-center text-lg">
                                ISO (국제표준화기구)는
                                <br /><br />
                                철도산업 품질경영시스템 요구사항인
                                <br />
                                ISO/TS22163 을 제정하여 철도분야에서 적용합니다.
                            </p>
                            <div className="w-[30%] h-full flex justify-center items-center">
                                <img src={iris} className="h-4/5 object-contain" />
                            </div>
                        </div>
                        <p className="w-full h-1/5 bg-primary text-white px-8 flex items-center justify-center">
                            "글로브스타 테크놀러지에서는 UNIFE 본사에서 IRIS 교육경험과 컨설팅 노하우로 인증을 체계적으로 도와드립니다."
                        </p>
                    </div>
                </div>
                <div className="flex h-100 w-full justify-center px-10 gap-8">
                    <img src={irisPhoto1} className="w-full object-contain" />
                </div>
                <div className="flex flex-col text-label gap-4 px-20">
                    <p>
                        ISO/TS22163 은 유럽철도산업협회 (UNIFE)에서 철도산업의 필수적인 품질요구사항들을 반영하여 개발한 철도산업 사업관리시스템인 IRIS (International Railway Industry Standard)를 기반으로 국제적으로 철도산업에 적용하기 위해 ISO9001:2015 요건에 맞춘 표준입니다.
                    </p>
                    <p>
                        ISO/TS22163 표준은 고도화된 품질관리, 향상된 프로세스 그리고 효율적인 제품품질을 보장하는데 목적이 있습니다. 이를 위해 제품 안전전략, 프로젝트 및 시리즈 관리, RAMS 및 LCC 와 같은 기준들이 상당히 개선된 내부감사와 이해관계자의 효과적이고 효율적인 업무수행을 보장합니다.
                        <br />
                        300여개의 질문으로 구성된 평가시트에 따른 고객관점의 수행레벨 평가. 거북이모형(터틀차트)도입, 일부 프로세스에 더해 Process Effectiveness Assessment Report (PEAR) 방법론을 적용합니다.
                    </p>
                    <p>
                        철도산업의 철도시스템/서브시스템 제작사 및 공급사는 새로운 국제품질경영시스템 제정에 따라 ISO9001 인증을 대신하여 ISO/TS22163 인증을 받아야 합니다.
                    </p>
                    <p>
                        글로브스타는 IRIS 컨설턴트로서 수십건의 IRIS 와 AS9100 (우주항공 품질경영시스템) 인증 및 컨설팅 경험으로 인증 프로세스 단계마다 인증을 위한 효율적인 지원을 약속합니다.
                    </p>
                </div>
                <div className="flex h-70 w-full justify-center px-10 gap-8">
                    <img src={irisPhoto2} className="w-[40%] object-fill" />
                    <img src={irisPhoto3} className="w-[40%] object-fill" />
                </div>
            </div>
        </div>
    </div>
}