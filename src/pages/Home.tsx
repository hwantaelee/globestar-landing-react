import ramsBg from "../../public/images/home/rams-bg.png";
import isaSilBg from "../../public/images/home/isa-sil-bg.png";
import krts from "../../public/images/krts.png";
import cert from "../../public/images/home/cert.png";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();

    return (
        <div className="w-full h-[calc(100vh-136px)] flex gap-4 px-8 py-4">
            {/* RAMS */}
            <div className="w-[34%] h-full relative">
                <img src={ramsBg} className="w-full h-full object-fill" />
                <div className="p-8 absolute bg-black/70 w-full top-0 left-0 flex flex-col gap-4 cursor-pointer" onClick={() => navigate("/tech")}>
                    <div className="flex justify-between items-center">
                        <p className="text-white text-4xl font-black">
                            RAMS
                        </p>
                        <div className="text-white text-sm bg-primary h-fit p-2">
                            자세히보기 +
                        </div>
                    </div>
                    <p className="text-white">
                        RAMS는 신뢰성(Reliability), 가용성(Availability), 유지보수성(Maintainability) 그리고 안전성(Safety)으로 철도 프로젝트에서 가용성과 안전성 목표를 만족하기 위한 기술입니다.
                    </p>
                </div>
            </div>
            {/* ISA/SIL */}
            <div className="w-[34%] relative">
                <img src={isaSilBg} className="w-full h-full object-cover" />
                <div className="p-8 absolute bg-black/70 w-full top-0 left-0 flex flex-col gap-4 cursor-pointer" onClick={() => navigate("/tech/isa-sil")}>
                    <div className="flex justify-between items-center">
                        <p className="text-white text-4xl font-black">
                            ISA/SIL인증
                        </p>
                        <div className="text-white text-sm bg-primary h-fit p-2">
                            자세히보기 +
                        </div>
                    </div>
                    <p className="text-white">
                        ISA (Independent Safety Assessment)는 독립안전평가로 유럽철도표준에 따라 철도시스템, 서브시스템 및 부품에 대한 안전성평가 인증(SIL인증)입니다.
                    </p>
                </div>
            </div>
            {/* 우측영역 */}
            <div className="w-[32%] flex flex-col gap-4 relative">
                <div className="w-full h-[33%] border border-divider flex justify-between px-8 py-4 bg-white">
                    <div className="flex flex-col justify-between w-[60%]">
                        <p className="text-3xl font-semibold text-label">
                            철도안전법승인
                        </p>
                        <p className="text-label-light text-sm">
                            철도안전법에 따라 철도용품 및 철도차량 제작자는 관련 시행지침에 의한 형식승인, 제작자 승인 그리고 완성검사를 받아야 합니다.
                        </p>
                        <div className="text-white text-sm bg-primary w-fit h-fit p-2 cursor-pointer" onClick={() => navigate("/tech/safety-act")}>
                            자세히보기 +
                        </div>
                    </div>
                    <img
                        src={krts}
                        className="w-[40%] object-contain"
                    />
                </div>
                <div className="w-full h-[33%] border border-divider flex justify-between pl-8 pr-4 py-4 bg-white">
                    <div className="flex flex-col justify-between w-[50%]">
                        <p className="text-3xl font-semibold text-label">
                            용접인증
                        </p>
                        <p className="text-label-light text-sm">
                            - ISO3834<br />- EN1090<br />- EM15085
                        </p>
                        <div className="text-white text-sm bg-primary w-fit h-fit p-2 cursor-pointer" onClick={() => navigate("/welding")}>
                            자세히보기 +
                        </div>
                    </div>
                    <img
                        src={cert}
                        className="w-[50%] object-contain"
                    />
                </div>
                <div className="w-full h-[33%] flex gap-4">
                    <div className="w-full bg-primary flex flex-col px-8 py-4 justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-3xl font-semibold text-white"
                                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>
                                ISO/TS22163(IRIS)
                            </p>
                            <p className="text-white drop-shadow text-sm"
                                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}>
                                철도산업 국제품질경영시스템
                            </p>
                        </div>
                        <div className="text-white text-sm border border-white w-fit h-fit p-2 cursor-pointer" onClick={() => navigate("/tech/iris")}>
                            자세히보기 +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
