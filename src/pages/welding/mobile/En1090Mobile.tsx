import Breadcrumb from "../../../components/Breadcrumb";
import WeldingNavBar from "../components/nav-bar/WeldingNavBar";

import en1090 from "../../../../public/images/welding/en1090.png";
import en1090Photo1 from "../../../../public/images/welding/en1090-photo1.png";
import en1090Photo2 from "../../../../public/images/welding/en1090-photo2.png";
import en1090Photo3 from "../../../../public/images/welding/en1090-photo3.png";
import en1090Photo4 from "../../../../public/images/welding/en1090-photo4.png";

export default function En1090Mobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="용접인증" third="EN1090" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                용접인증
            </h1>

            <WeldingNavBar />

            <p className="text-lg text-primary font-semibold">
                ・ EN1090
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={en1090}
                    className="w-full aspect-video object-fill"
                />
                <div className="absolute inset-0 flex">
                    <div className="w-1/3 bg-primary/70 text-white flex flex-col items-center justify-center gap-2">
                        <p className="text-base">
                            EN1090
                        </p>
                        <p className="text-xs text-center">
                            강 구조물의
                            <br />
                            유럽적합성평가 및 인증
                        </p>
                    </div>
                    <div className="w-2/3 h-full bg-black/50">
                        <p className="h-full w-full text-white px-4 flex items-center justify-center text-sm">
                            EN1090 은
                            유럽표준화위원회 (CEN: European Committee for Standardization) 에서 제정한 건설제품표준 (CPR: Construction Product Regulation) 입니다.
                        </p>
                    </div>
                </div>
            </div>

            {/* 이미지 */}
            <div className="flex flex-col gap-4">
                <img src={en1090Photo1} className="w-full h-48 object-fill" />
                <img src={en1090Photo2} className="w-full h-48 object-fill" />
                <img src={en1090Photo3} className="w-full h-48 object-fill" />
                <img src={en1090Photo4} className="w-full h-48 object-fill" />
            </div>

            {/* 본문 */}
            <div className="text-label text-sm flex flex-col gap-4">
                <p>
                    EN1090 은 유럽표준화위원회 (CEN: European Committee for Standardization) 에서 제정한 건설제품표준 (CPR: Construction Product Regulation) 으로 철구조물과 알루미늄구조물 등 강구조물 제작사에 대해 요구하는 강제규정으로, 승인 후 제품에 CE마크를 부착해야하는 건설, 플랜트 산업에서 필수적으로 만족해야 하는 법적요건입니다.
                </p>
                <p>
                    이 표준에 따른 인증을 위해 제작자는 EN1090 시리즈 표준의 EXC Classes (제작등급) 에 따라 적합한 수준의 ISO3834 요건을 충족하여야 하기에 국내외 다양한 프로젝트 수행 경험으로 완벽히 컨설팅을 진행합니다.
                </p>
            </div>
        </div>
    );
}