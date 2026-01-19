import ramsBg from "../../../../public/images/home/rams-bg.png";
import isaSilBg from "../../../../public/images/home/isa-sil-bg.png";
import krts from "../../../../public/images/krts.png";
import cert from "../../../../public/images/home/cert.png";
import iris from "../../../../public/images/tech/iris.png";
import { useNavigate } from "react-router-dom";

export default function HomeMobile() {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col gap-4 px-4 py-4">
            <ImageCard
                title="RAMS"
                desc="RAMS는 철도 프로젝트에서 가용성과 안전성 목표를 만족하기 위한 기술입니다."
                bg={ramsBg}
                onClick={() => navigate("/tech")}
            />

            <ImageCard
                title="ISA/SIL 인증"
                desc="독립안전평가를 통해 철도시스템 및 부품의 안전성을 인증합니다."
                bg={isaSilBg}
                onClick={() => navigate("/tech/isa-sil")}
            />

            <WhiteCard
                title="철도안전법 승인"
                desc="철도안전법에 따라 형식승인, 제작자 승인, 완성검사를 수행합니다."
                img={krts}
                onClick={() => navigate("/tech/safety-act")}
            />

            <WhiteCard
                title="용접인증"
                desc={"- ISO3834\n- EN1090\n- EM15085"}
                img={cert}
                onClick={() => navigate("/welding")}
            />

            <PrimaryCard
                title="ISO/TS22163(IRIS)"
                desc="철도산업 국제품질경영시스템"
                img={iris}
                onClick={() => navigate("/tech/iris")}
            />
        </div>
    );
}

/* ───────────── components ───────────── */

function ImageCard({ title, desc, bg, onClick }: any) {
    return (
        <div
            className="w-full h-48 relative rounded overflow-hidden cursor-pointer"
            onClick={onClick}
        >
            <img src={bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-between">
                <p className="text-white text-xl font-bold">{title}</p>
                <p className="text-white text-sm line-clamp-3">{desc}</p>
            </div>
        </div>
    );
}

function WhiteCard({ title, desc, img, onClick }: any) {
    return (
        <div
            className="w-full min-h-36 border border-divider bg-white p-4 flex justify-between items-center cursor-pointer"
            onClick={onClick}
        >
            <div className="flex flex-col gap-2 w-[60%]">
                <p className="text-lg font-semibold text-label">{title}</p>
                <p className="text-sm text-label-light whitespace-pre-line">{desc}</p>
                <div className="text-white bg-primary text-sm  w-fit px-2 py-1 mt-2">
                    자세히보기 +
                </div>
            </div>
            <img src={img} className="w-[40%] object-contain" />
        </div>
    );
}

function PrimaryCard({ title, desc, img, onClick }: any) {
    return (
        <div className="flex w-full bg-primary p-4"
            onClick={onClick}>
            <div className="w-[60%] flex flex-col gap-2 cursor-pointer">
                <p className="text-white text-lg font-semibold" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>{title}</p>
                <p className="text-white text-sm" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>{desc}</p>
                <div className="text-white text-sm border border-white w-fit px-2 py-1 mt-2">
                    자세히보기 +
                </div>
            </div>
            <img src={img} className="w-[40%] object-contain" />
        </div>
    );
}