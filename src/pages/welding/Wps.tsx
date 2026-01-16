import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";

import iso3834 from "../../../public/images/welding/iso3834.png";
import en15085 from "../../../public/images/welding/en15085.png";
import wps from "../../../public/images/welding/wps.png";
import wpsPhoto1 from "../../../public/images/welding/wps-photo1.png";
import wpsPhoto2 from "../../../public/images/welding/wps-photo2.png";

import WeldingNavBar from "./components/nav-bar/WeldingNavBar";

export default function Wps() {
    return <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="용접인증" third="용접사/WPS" />
        <div className="w-full flex flex-col gap-4">
            <PageTitle title="용접인증" />
            <WeldingNavBar />
            <p className="text-2xl text-primary pl-30">
                ・ 용접사/WPS 승인
            </p>
            <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                <div className="w-full h-60 relative">
                    <img src={wps} className="w-full h-full object-fill" />
                    <div className="w-full h-full absolute flex top-0 left-0">
                        <div className="w-[30%] h-full bg-primary/70 text-white flex flex-col items-center gap-4 justify-center">
                            <p className="text-2xl">
                                용접사/WPS 승인
                            </p>
                            <p className="text-center text-lg">
                                유럽기술법(EN)에 따른
                                <br />
                                용접사 및 WPS 승인
                            </p>
                        </div>
                        <div className="w-2/3 h-full bg-black/50 " />
                    </div>
                </div>
                <div className="flex h-60 w-full justify-center px-10 gap-4">
                    <img src={wpsPhoto1} className="w-[25%] h-full object-fill" />
                    <img src={wpsPhoto2} className="w-[25%] h-full object-fill" />
                    <img src={iso3834} className="w-[25%] h-full object-fill" />
                    <img src={en15085} className="w-[25%] h-full object-fill" />
                </div>
                <div className="text-label px-20 flex flex-col gap-4">
                    <p>
                        글로벌시장 진출을 위한 용접사 및 WPS 승인을 신속히 해결해 드립니다.
                    </p>
                </div>
            </div>
        </div>
    </div>
}