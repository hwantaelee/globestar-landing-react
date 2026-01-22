import Breadcrumb from "../../components/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";

import weldingTitle from "../../../public/images/welding/welding-title.png";
import iso3834 from "../../../public/images/welding/iso3834.png";
import en15085 from "../../../public/images/welding/en15085.png";
import en1090 from "../../../public/images/welding/en1090.png";
import wps from "../../../public/images/welding/wps.png";
import WeldingMobile from "./mobile/WeldingMobile";



export default function Welding() {
    const navigate = useNavigate();
    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <WeldingMobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" />

            <div className="w-full flex flex-col gap-4 px-30 pb-30">
                {/* HERO */}
                <div className="w-full h-50 relative">
                    <img src={weldingTitle} className="w-full h-full object-cover" />
                    <div className="w-full h-full absolute flex flex-col top-0 left-0 px-24 bg-black/50 items-center justify-center">
                        <p className={cn(
                            "text-white text-lg text-center",
                            isLaptop && "text-sm"
                        )}>
                            "글로브스타는 소재, 모재, 용접사, 검사원, WPS,
                            압력용기지침(PED), CE마킹 및
                            <br /><br />
                            용접분야 국제표준 인증을 위한 기술컨설팅과
                            인증심사로 고객사의 해외시장 개척을 지원합니다."
                        </p>
                    </div>
                </div>

                {/* GRID */}
                <div className="w-full h-100 flex gap-8">
                    <WeldingCard
                        title="ISO3834"
                        desc="용접품질보증인증"
                        img={iso3834}
                        onClick={() => navigate("iso3834")}
                        isLaptop={isLaptop}
                    />

                    <WeldingCard
                        title="EN15085"
                        desc={`철도차량 및\n부품 용접제작자 인증`}
                        img={en15085}
                        onClick={() => navigate("en15085")}
                        isLaptop={isLaptop}
                    />

                    <WeldingCard
                        title="EN1090"
                        desc={`강 구조물의\n유럽적합성평가 및 인증`}
                        img={en1090}
                        onClick={() => navigate("en1090")}
                        isLaptop={isLaptop}
                    />

                    <WeldingCard
                        title="용접사/WPS"
                        desc={`유럽기술법(EN)에 따른\n용접사 및 WPS 승인`}
                        img={wps}
                        onClick={() => navigate("wps")}
                        isLaptop={isLaptop}
                    />
                </div>
            </div>
        </div>
    );
}

/* ───────────── 카드 컴포넌트 ───────────── */
function WeldingCard({
    title,
    desc,
    img,
    onClick,
    isLaptop,
}: {
    title: string;
    desc: string;
    img: string;
    onClick: () => void;
    isLaptop: boolean;
}) {
    return (
        <div className="flex-1 relative cursor-pointer" onClick={onClick}>
            <img src={img} className="w-full h-full object-cover" />

            <div className={cn(
                "w-full h-full absolute top-0 left-0 text-white text-center text-xl flex flex-col",
                isLaptop && "text-lg"
            )}>
                <p className="flex items-center justify-center h-1/5 bg-primary/70 font-medium whitespace-pre-line">
                    {title}
                </p>
                <p className="flex items-center justify-center h-4/5 bg-black/50 whitespace-pre-line">
                    {desc}
                </p>
            </div>
        </div>
    );
}