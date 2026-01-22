import Breadcrumb from "../../../components/Breadcrumb";
import TechNavBar from "../components/nav-bar/TechNavBar";

import tsiTitle from "../../../../public/images/tech/tsi-title.png";
import tsiPhoto from "../../../../public/images/tech/tsi-photo.png";

export default function TsiMobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="철도기술" third="TSI" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                철도기술
            </h1>

            <TechNavBar />

            <p className="text-lg text-primary font-semibold">
                ・ TSI
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={tsiTitle}
                    className="w-full aspect-video object-cover"
                />

                <div className="absolute inset-0 bg-black/50 flex items-center px-4">
                    <p className="text-white text-sm leading-relaxed">
                        TSI (상호운영성기술기준)는
                        국가간 횡단하는 유럽철도에서 근본적인 안전을 확보하기 위해 유럽위원회에 의해 제정된 시행령으로 유럽내 시스템을 공급하기 위해 요구되는 기술인증입니다.
                    </p>
                </div>
            </div>

            <div className="bg-primary text-white text-xs px-4 py-3 text-center">
                "인증기관 철도 프로젝트 수행 경험으로
                고객의 인증을 신속히 지원합니다."
            </div>

            <div className="flex flex-col text-label text-sm gap-3">
                <p>
                    유럽위원회는 고속철도시스템을 위해 Directive 96/48/EC 를 제정하였고, 상용철도시스템을 위해 Directive 2001/16/EC 를 제정하였습니다.
                </p>

                <p>
                    이후 TSI 는 고속철도 시스템을 위한 기반시설, 동력장치, 차량, 제어신호, 유지보수 및 운용분야에서 발효되었으며, 상용철도시스템을 위한 화차, 화차용통신, 제어신호, 교통 운용 및 유지보수 분야에서도 발효하고 시스템의 터널내 안전 및 승객의 접근성을 위한 기준도 발효하였습니다.
                </p>
            </div>

            <img
                src={tsiPhoto}
                className="w-full h-48 object-contain"
            />
        </div>
    );
}