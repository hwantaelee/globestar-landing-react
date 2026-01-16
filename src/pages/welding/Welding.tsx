import Breadcrumb from "../../components/Breadcrumb";

import weldingTitle from "../../../public/images/welding/welding-title.png";
import iso3834 from "../../../public/images/welding/iso3834.png";
import en15085 from "../../../public/images/welding/en15085.png";
import en1090 from "../../../public/images/welding/en1090.png";
import wps from "../../../public/images/welding/wps.png";
import { useNavigate } from "react-router-dom";

export default function Welding() {

    const navigate = useNavigate();

    return <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="용접인증" />
        <div className="w-full flex flex-col gap-4 px-30 pb-30">
            <div className="w-full h-50 relative">
                <img src={weldingTitle} className="w-full h-full object-cover" />
                <div className="w-full h-full absolute flex flex-col top-0 left-0 px-24 bg-black/50 items-center justify-center">
                    <p className="text-white text-lg text-center">
                        "글로브스타는 소재, 모재, 용접사, 검사원, WPS, 압력용기지침(PED), CE마킹 및
                        <br /><br />
                        용접분야 국제규격 인증을 위한 기술컨설팅과 인증심사로 고객사의 해외시장 개척을 지원합니다."
                    </p>
                </div>
            </div>
            <div className="w-full h-100 flex gap-8">
                <div className="flex-1 relative cursor-pointer" onClick={() => navigate("iso3834")}>
                    <img src={iso3834} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0 text-white text-center text-lg">
                        <p className="flex items-center justify-center h-1/5 bg-primary/70">
                            ISO3834
                        </p>
                        <p className="flex items-center justify-center h-4/5 bg-black/50">
                            용접품질보증인증
                        </p>
                    </div>
                </div>
                <div className="flex-1 relative cursor-pointer" onClick={() => navigate("en15085")}>
                    <img src={en15085} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0 text-white text-center text-lg">
                        <p className="flex items-center justify-center h-1/5 bg-primary/70">
                            EN15085
                        </p>
                        <p className="flex items-center justify-center h-4/5 bg-black/50">
                            철도차량 및
                            <br />
                            부품 용접제작자 인증
                        </p>
                    </div>
                </div>
                <div className="flex-1 relative cursor-pointer" onClick={() => navigate("en1090")}>
                    <img src={en1090} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0 text-white text-center text-lg">
                        <p className="flex items-center justify-center h-1/5 bg-primary/70">
                            EN1090
                        </p>
                        <p className="flex items-center justify-center h-4/5 bg-black/50">
                            강 구조물의
                            <br />
                            유럽적합성평가 및 인증
                        </p>
                    </div>
                </div>
                <div className="flex-1 relative cursor-pointer" onClick={() => navigate("wps")}>
                    <img src={wps} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0 text-white text-center text-lg">
                        <p className="flex items-center justify-center h-1/5 bg-primary/70">
                            용접사/WPS
                        </p>
                        <p className="flex items-center justify-center h-4/5 bg-black/50">
                            유럽기술법(EN)에 따른
                            <br />
                            용접사 및 WPS 승인
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}