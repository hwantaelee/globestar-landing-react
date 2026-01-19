import Breadcrumb from "../../../components/Breadcrumb";
import WeldingNavBar from "../components/nav-bar/WeldingNavBar";

import en15085 from "../../../../public/images/welding/en15085.png";
import en15085Photo1 from "../../../../public/images/welding/en15085-photo1.png";
import en15085Photo3 from "../../../../public/images/welding/en15085-photo3.png";
import en15085Photo4 from "../../../../public/images/welding/en15085-photo4.png";

export default function En15085Mobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" third="EN15085-2" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                용접인증
            </h1>

            <WeldingNavBar />

            <p className="text-lg text-primary font-semibold">
                ・ EN15085-2
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={en15085}
                    className="w-full aspect-video object-fill"
                />
                <div className="absolute inset-0 flex">
                    <div className="w-1/3 bg-primary/70 text-white flex flex-col items-center justify-center gap-2">
                        <p className="text-base">
                            EN15085-2
                        </p>
                        <p className="text-xs text-center">
                            철도차량 및
                            <br />
                            부품 용접제작자 인증
                        </p>
                    </div>
                    <div className="w-2/3 h-full bg-black/50">
                        <p className="h-full w-full text-white px-4 flex items-center justify-center text-sm">
                            EN15085-2은
                            유럽표준화위원회 (CEN: European Committee for Standardization) 에서 제정한 철도분야 적용용접표준입니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* 이미지 */}
            <div className="flex flex-col gap-4">
                <img src={en15085Photo1} className="w-full h-48 object-fill" />
                <img src={en15085Photo3} className="w-full h-48 object-fill" />
                <img src={en15085Photo4} className="w-full h-48 object-fill" />
            </div>

            {/* 본문 */}
            <div className="text-label text-sm flex flex-col gap-4">
                <p>
                    EN15085-2 은 유럽표준화위원회 (CEN: European Committee for Standardization) 에서 제정한 철도분야 적용표준으로 철도차량 및 부품제작에서 용접작업을 수행하는 제작사가 갖춰야 할 기본적인 능력 (인적/기술적/시스템/장비 등) 에 대한 요구사항으로 유럽역내에서는 EN15085-2 에 따라 인증받은 제작자만이 철도차량 및 부품 제작에서 용접작업을 수행하도록 하고 있습니다.
                </p>
                <p>
                    자격있는 용접전문가 조직에 의한 전문적인 용접관리와 자격있는 용접원, 검사원, 시설, 장비 등 제작사의 철도용접 수행능력을 전반적으로 입증하는 인증입니다.
                </p>
            </div>
        </div>
    );
}