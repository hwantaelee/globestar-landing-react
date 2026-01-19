import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import WeldingNavBar from "./components/nav-bar/WeldingNavBar";

import en15085 from "../../../public/images/welding/en15085.png";
import en15085Photo1 from "../../../public/images/welding/en15085-photo1.png";
import en15085Photo3 from "../../../public/images/welding/en15085-photo3.png";
import en15085Photo4 from "../../../public/images/welding/en15085-photo4.png";

import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import En15085Mobile from "./mobile/En15085Mobile";

export default function En15085() {
    const device = useDeviceStore((s) => s.deviceType);

    /* ───────────── mobile ───────────── */
    if (device === "tablet") {
        return <En15085Mobile />;
    }

    const isLaptop = device === "laptop";

    return (
        <div className="w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" third="EN15085-2" />

            <div className="w-full flex flex-col gap-4">
                <PageTitle title="용접인증" />
                <WeldingNavBar />

                <p className={cn(
                    "text-2xl text-primary pl-30",
                    isLaptop && "text-xl"
                )}>
                    ・ EN15085-2
                </p>

                <div className="w-full flex flex-col gap-8 items-center px-30 pb-30">
                    {/* HERO */}
                    <div className="w-full h-60 relative">
                        <img src={en15085} className="w-full h-full object-fill" />
                        <div className="w-full h-full absolute flex top-0 left-0">
                            <div className="w-1/3 h-full bg-primary/70 text-white flex flex-col items-center gap-4 justify-center">
                                <p className={cn(
                                    "text-2xl",
                                    isLaptop && "text-xl"
                                )}>
                                    EN15085-2
                                </p>
                                <p className={cn(
                                    "text-center text-lg",
                                    isLaptop && "text-base"
                                )}>
                                    철도차량 및
                                    <br />
                                    부품 용접제작자 인증
                                </p>
                            </div>
                            <div className="w-2/3 h-full bg-black/50 ">
                                <p className="h-full w-full text-white px-24 flex items-center justify-center text-lg">
                                    EN15085-2은
                                    <br /><br />
                                    유럽표준화위원회 (CEN: European Committee for Standardization) 에서 제정한 철도분야 적용용접표준입니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 이미지 */}
                    <div className="flex h-60 w-full justify-center px-10 gap-4">
                        <img src={en15085Photo1} className="w-1/3 h-full object-fill" />
                        <img src={en15085Photo3} className="w-1/3 h-full object-fill" />
                        <img src={en15085Photo4} className="w-1/3 h-full object-fill" />
                    </div>

                    {/* 본문 */}
                    <div className={cn(
                        "text-label px-20 flex flex-col gap-4",
                        isLaptop && "text-sm"
                    )}>
                        <p>
                            EN15085-2 은 유럽표준화위원회 (CEN: European Committee for Standardization) 에서 제정한 철도분야 적용표준으로 철도차량 및 부품제작에서 용접작업을 수행하는 제작사가 갖춰야 할 기본적인 능력 (인적/기술적/시스템/장비 등) 에 대한 요구사항으로 유럽역내에서는 EN15085-2 에 따라 인증받은 제작자만이 철도차량 및 부품 제작에서 용접작업을 수행하도록 하고 있습니다.
                        </p>
                        <p>
                            자격있는 용접전문가 조직에 의한 전문적인 용접관리와 자격있는 용접원, 검사원, 시설, 장비 등 제작사의 철도용접 수행능력을 전반적으로 입증하는 인증입니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}