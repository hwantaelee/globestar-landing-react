import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import IntroduceNavBar from "./components/nav-bar/IntroduceNavBar";

import introduce from "../../../public/images/introduce/introduce.png";


export default function Introduce() {
    return <div className="w-full h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="회사소개" third="회사소개" />
        <div className="w-full flex flex-col gap-4">
            <PageTitle title="회사소개" />
            <IntroduceNavBar />
            <p className="text-2xl text-primary pl-30">
                ・ 회사소개
            </p>
            <div className="w-full flex gap-4 items-center">
                <img
                    src={introduce}
                    className="w-[40%]"
                />
                <div className="w-[60%] flex flex-col gap-10 pr-30 text-label text-lg">
                    <p>
                        글로브스타는 싱가포르를 기반으로
                        유럽, 중동, 동남아, 아프리카 등 전세계 철도분야에서
                        30년이상 시스템 보증과 시스템 엔지니어링(SE) 등을
                        수행하고 있습니다.
                    </p>
                    <p>
                        한국에는 2010년 1월, 신분당선 프로젝트에서
                        시스템보증, 시스템통합, T&C 및 RAMS 서비스를 시작으로
                        철도기술 컨설팅 및 인증업무를 수행하고 있습니다.
                    </p>
                    <p>
                        알스톰트랜스포트, CAF 등 유럽 철도기업의 협력업체로서,
                        리나 (RINA Services), 티유브이노드 (TUV Nord), DNV, KR (한국선급) 등 인증기관과 함께
                        유럽인증기관 출신 전문가들은
                        고객사의 인증을 원스톱 서비스로 해결해 드립니다.
                    </p>
                    <p>
                        무료 세미나 신청으로 기술력을 확인하십시오.
                    </p>
                    <p>

                        글로브스타 전문가 일동
                    </p>
                </div>
            </div>
        </div>
    </div>
}