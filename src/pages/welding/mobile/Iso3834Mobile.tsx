import Breadcrumb from "../../../components/Breadcrumb";
import WeldingNavBar from "../components/nav-bar/WeldingNavBar";

import iso3834 from "../../../../public/images/welding/iso3834.png";
import iso3834Photo1 from "../../../../public/images/welding/iso3834-photo1.png";
import iso3834Photo2 from "../../../../public/images/welding/iso3834-photo2.png";
import iso3834Photo3 from "../../../../public/images/welding/iso3834-photo3.png";

export default function Iso3834Mobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" third="ISO3834" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                용접인증
            </h1>

            <WeldingNavBar />

            <p className="text-lg text-primary font-semibold">
                ・ ISO3834
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={iso3834}
                    className="w-full aspect-video object-fill"
                />
                <div className="absolute inset-0 flex">
                    <div className="w-1/3 bg-primary/70 text-white flex flex-col items-center justify-center gap-2">
                        <p className="text-base">
                            ISO3834
                        </p>
                        <p className="text-xs">
                            용접품질보증인증
                        </p>
                    </div>
                    <div className="w-2/3 h-full bg-black/50">
                        <p className="h-full w-full text-white px-4 flex items-center justify-center text-sm">
                            ISO3834는
                            ISO (international Organization for Standardization - 국제표준화기구)에 의해 제정된 국제용접품질표준입니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* 이미지 */}
            <div className="flex flex-col gap-4">
                <img src={iso3834Photo1} className="w-full h-48 object-fill" />
                <img src={iso3834Photo2} className="w-full h-48 object-fill" />
                <img src={iso3834Photo3} className="w-full h-48 object-fill" />
            </div>

            {/* 본문 */}
            <div className="text-label text-sm flex flex-col gap-4">
                <p>
                    ISO3834 는 많은 제작사들이 용접품질관리에 대해 ISO9001 인증으로도 보증하지 못하는 용접품질관리시스템의 개선, 작업능력향상, 용접품질관리 등의 용접능력을 보증을 위한 요구사항입니다
                </p>
                <p>
                    IWE 과정의 교수진으로 구성된 국내 최고의 전문가들은 용접인증을 신속히 수행합니다.
                </p>
            </div>
        </div>
    );
}