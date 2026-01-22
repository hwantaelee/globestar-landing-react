import Breadcrumb from "../../../components/Breadcrumb";
import { useNavigate } from "react-router-dom";

import weldingTitle from "../../../../public/images/welding/welding-title.png";
import iso3834 from "../../../../public/images/welding/iso3834.png";
import en15085 from "../../../../public/images/welding/en15085.png";
import en1090 from "../../../../public/images/welding/en1090.png";
import wps from "../../../../public/images/welding/wps.png";

export default function WeldingMobile() {
    const navigate = useNavigate();

    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" />

            {/* TITLE */}
            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                용접인증
            </h1>

            {/* HERO */}
            <div className="relative">
                <img
                    src={weldingTitle}
                    className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center px-4">
                    <p className="text-white text-sm text-center leading-relaxed">
                        "글로브스타는 소재, 모재, 용접사, 검사원, WPS,
                        압력용기지침(PED), CE마킹 및
                        <br />
                        용접분야 국제표준 인증을 위한 기술컨설팅과
                        인증심사로 고객사의 해외시장 개척을 지원합니다."
                    </p>
                </div>
            </div>

            {/* CARD LIST */}
            <div className="flex flex-col gap-4">
                <MobileCard
                    title="ISO3834"
                    desc="용접품질보증인증"
                    img={iso3834}
                    onClick={() => navigate("iso3834")}
                />
                <MobileCard
                    title="EN15085"
                    desc="철도차량 및 부품 용접제작자 인증"
                    img={en15085}
                    onClick={() => navigate("en15085")}
                />
                <MobileCard
                    title="EN1090"
                    desc="강 구조물 유럽적합성평가 및 인증"
                    img={en1090}
                    onClick={() => navigate("en1090")}
                />
                <MobileCard
                    title="용접사 / WPS"
                    desc="유럽기술법(EN)에 따른 용접사 및 WPS 승인"
                    img={wps}
                    onClick={() => navigate("wps")}
                />
            </div>
        </div>
    );
}

function MobileCard({
    title,
    desc,
    img,
    onClick,
}: {
    title: string;
    desc: string;
    img: string;
    onClick: () => void;
}) {
    return (
        <div
            className="relative w-full h-40 rounded overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <img src={img} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center text-lg">
                <p className="font-medium">{title}</p>
                <p className="mt-1">{desc}</p>
            </div>
        </div>
    );
}