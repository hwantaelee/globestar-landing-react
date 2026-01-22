import Breadcrumb from "../../../components/Breadcrumb";

import consultingTitle from "../../../../public/images/consulting/consulting-title.png";
import consultingPhoto1 from "../../../../public/images/consulting/consulting-photo1.png";
import consultingPhoto2 from "../../../../public/images/consulting/consulting-photo2.png";
import consultingPhoto3 from "../../../../public/images/consulting/consulting-photo3.png";

export default function ConsultingMobile() {
    return (
        <div className="w-full px-4 py-4 flex flex-col gap-4">
            <Breadcrumb first="HOME" second="기술컨설팅" third="기술컨설팅" />

            <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                기술컨설팅
            </h1>

            <p className="text-lg text-primary font-semibold">
                ・ 기술컨설팅
            </p>

            {/* HERO */}
            <div className="relative">
                <img
                    src={consultingTitle}
                    className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-primary/70 py-3 px-4">
                    <p className="text-white text-sm text-center">
                        글로브스타는 인증기관 출신들로 구성된 전문가그룹으로
                        <br />
                        맞춤형 기술컨설팅으로 고객의 시간투자와 노력을 최적화해 드립니다.
                    </p>
                </div>
            </div>

            {/* 이미지 */}
            <div className="flex flex-col gap-4">
                <img src={consultingPhoto1} className="w-full h-48 object-fill" />
                <img src={consultingPhoto2} className="w-full h-48 object-fill" />
                <img src={consultingPhoto3} className="w-full h-48 object-fill" />
            </div>

            {/* 리스트 */}
            <div className="text-label text-sm flex flex-col gap-4 font-bold">
                <div className="flex">
                    <span className="min-w-3">•</span>
                    <p>
                        해외 철도시장 진출을 위한 유럽철도기술 인증 컨설팅
                    </p>
                </div>
                <div className="flex">
                    <span className="min-w-3">•</span>
                    <p>
                        해외시장에서의 철도업무 수행을 위한 기술지원 (RAMS, ISA, SE)
                    </p>
                </div>
            </div>
        </div>
    );
}