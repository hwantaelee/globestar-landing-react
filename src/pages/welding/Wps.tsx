import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import WeldingNavBar from "./components/nav-bar/WeldingNavBar";

import iso3834 from "../../../public/images/welding/iso3834.png";
import en15085 from "../../../public/images/welding/en15085.png";
import wps from "../../../public/images/welding/wps.png";
import wpsPhoto1 from "../../../public/images/welding/wps-photo1.png";
import wpsPhoto2 from "../../../public/images/welding/wps-photo2.png";
import wpsPhoto3 from "../../../public/images/welding/wps-photo3.png";
import wpsPhoto4 from "../../../public/images/welding/wps-photo4.png";

import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import WpsMobile from "./mobile/WpsMobile";

export default function Wps() {
    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <WpsMobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" third="용접사/WPS" />

            <div className="w-full flex flex-col gap-4">
                <PageTitle title="용접인증" />
                <WeldingNavBar />

                <p className={cn(
                    "text-2xl text-primary pl-30",
                    isLaptop && "text-xl"
                )}>
                    ・ 용접사/WPS 승인
                </p>

                <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                    {/* HERO */}
                    <div className="w-full h-60 relative">
                        <img src={wps} className="w-full h-full object-fill" />
                        <div className="w-full h-full absolute flex top-0 left-0">
                            <div className="w-1/3 h-full bg-primary/70 text-white flex flex-col items-center gap-4 justify-center">
                                <p className={cn(
                                    "text-2xl",
                                    isLaptop && "text-xl"
                                )}>
                                    용접사/WPS 승인
                                </p>
                                <p className={cn(
                                    "text-center text-lg",
                                    isLaptop && "text-base"
                                )}>
                                    유럽기술법(EN)에 따른
                                    <br />
                                    용접사 및 WPS 승인
                                </p>
                            </div>
                            <div className="w-2/3 h-full bg-black/50 ">
                                <p className="h-full w-full text-white px-24 flex text-center items-center justify-center text-lg">
                                    IWE 국제용접기술사, 용접사승인, WPS/WPQR,  ISO승인, EN승인, AWS, ASME 승인 컨설팅 및 인증
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 이미지 */}
                    <div className="flex h-60 w-full justify-center px-10 gap-4">
                        <img src={wpsPhoto1} className="w-[25%] h-full object-fill" />
                        <img src={wpsPhoto2} className="w-[25%] h-full object-fill" />
                        <img src={wpsPhoto3} className="w-[25%] h-full object-fill" />
                        <img src={wpsPhoto4} className="w-[25%] h-full object-fill" />
                    </div>

                    {/* 본문 */}
                    <div className={cn(
                        "text-label px-20 flex flex-col gap-4",
                        isLaptop && "text-sm"
                    )}>
                        <p>
                            글로벌시장 진출을 위한 고객사의 용접인증을 신속히 해결해 드립니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}