import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";

import iso3834 from "../../../public/images/welding/iso3834.png";
import iso3834Photo1 from "../../../public/images/welding/iso3834-photo1.png";
import iso3834Photo2 from "../../../public/images/welding/iso3834-photo2.png";
import iso3834Photo3 from "../../../public/images/welding/iso3834-photo3.png";
import WeldingNavBar from "./components/nav-bar/WeldingNavBar";

export default function Iso3834() {
    return <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="용접인증" third="ISO3834" />
        <div className="w-full flex flex-col gap-4">
            <PageTitle title="용접인증" />
            <WeldingNavBar />
            <p className="text-2xl text-primary pl-30">
                ・ ISO3834
            </p>
            <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                <div className="w-full h-60 relative">
                    <img src={iso3834} className="w-full h-full object-fill" />
                    <div className="w-full h-full absolute flex top-0 left-0">
                        <div className="w-[30%] h-full bg-primary/70 text-white flex flex-col items-center gap-4 justify-center">
                            <p className="text-2xl">
                                ISO3834
                            </p>
                            <p className="text-lg">
                                용접품질보증인증
                            </p>
                        </div>
                        <div className="w-2/3 h-full bg-black/50 " />
                    </div>
                </div>
                <div className="flex h-60 w-full justify-center px-10 gap-4">
                    <img src={iso3834Photo1} className="w-[33%] h-full object-fill" />
                    <img src={iso3834Photo2} className="w-[33%] h-full object-fill" />
                    <img src={iso3834Photo3} className="w-[33%] h-full object-fill" />
                </div>
                <div className="text-label px-20 flex flex-col gap-4">
                    <p>
                        ISO3834 는 ISO (International Organization for Standardization-국제표준화기구)에 의해 제정된 국제용접품질표준입니다.
                    </p>
                    <p>
                        ISO3834 는 많은 제작사들이 용접품질관리에 대해 ISO9001 인증으로도 보증하지 못하는 용접품질관리시스템의 개선, 작업능력향상, 용접품질관리 등의 용접능력을 보증을 위한 요구사항입니다
                    </p>
                </div>
            </div>
        </div>
    </div>
}