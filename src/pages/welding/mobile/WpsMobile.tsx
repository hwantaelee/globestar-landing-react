import Breadcrumb from "../../../components/Breadcrumb";
import WeldingNavBar from "../components/nav-bar/WeldingNavBar";

import wps from "../../../../public/images/welding/wps.png";
import wpsPhoto1 from "../../../../public/images/welding/wps-photo1.png";
import wpsPhoto2 from "../../../../public/images/welding/wps-photo2.png";
import wpsPhoto3 from "../../../../public/images/welding/wps-photo3.png";
import wpsPhoto4 from "../../../../public/images/welding/wps-photo4.png";

export default function WpsMobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" third="용접사/WPS" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                용접인증
            </h1>

            <WeldingNavBar />

            <p className="text-lg text-primary font-semibold">
                ・ 용접사/WPS 승인
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={wps}
                    className="w-full aspect-video object-fill"
                />
                <div className="absolute inset-0 flex">
                    <div className="w-1/3 bg-primary/70 text-white flex flex-col items-center justify-center gap-2">
                        <p className="text-base">
                            용접사/WPS 승인
                        </p>
                        <p className="text-xs text-center">
                            유럽기술법(EN)에 따른
                            <br />
                            용접사 및 WPS 승인
                        </p>
                    </div>
                    <div className="w-2/3 h-full bg-black/50">
                        <p className="h-full w-full text-white px-4 flex items-center justify-center text-sm">
                            IWE 국제용접기술사, 용접사승인, WPS/WPQR,  ISO승인, EN승인, AWS, ASME 승인 컨설팅 및 인증
                        </p>
                    </div>
                </div>
            </div>

            {/* 이미지 */}
            <div className="flex flex-col gap-4">
                <img src={wpsPhoto1} className="w-full h-48 object-fill" />
                <img src={wpsPhoto2} className="w-full h-48 object-fill" />
                <img src={wpsPhoto3} className="w-full h-48 object-fill" />
                <img src={wpsPhoto4} className="w-full h-48 object-fill" />
            </div>

            {/* 본문 */}
            <div className="text-label text-sm flex flex-col gap-4">
                <p>
                    글로벌시장 진출을 위한 용접사 및 WPS 승인을 신속히 해결해 드립니다.
                </p>
            </div>
        </div>
    );
}