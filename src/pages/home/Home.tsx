import ramsBg from "../../../public/images/home/rams-bg.png";
import isaSilBg from "../../../public/images/home/isa-sil-bg.png";
import krts from "../../../public/images/krts.png";
import iris from "../../../public/images/tech/iris.png";
import cert from "../../../public/images/home/cert-white.png";
import { useNavigate } from "react-router-dom";
import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import HomeMobile from "./mobile/HomeMobile";

export default function Home() {

    const navigate = useNavigate();

    const device = useDeviceStore((s) => s.deviceType);


    if (device === "tablet") {
        return <HomeMobile />;
    }
    const isLaptop = device === "laptop";

    return (
        <div className="w-full h-[calc(100vh-136px)] flex gap-4 px-8 py-4">
            {/* RAMS */}
            <div className="w-[34%] h-full relative">
                <img src={ramsBg} className="w-full h-full object-fill" />
                <div
                    className="p-8 absolute bg-black/50 w-full top-0 left-0 flex flex-col gap-4 cursor-pointer"
                    onClick={() => navigate("/tech")}
                >
                    <div className="flex justify-between items-center">
                        <p className={cn(
                            "text-white text-4xl font-black",
                            isLaptop && "text-2xl"
                        )}>
                            RAMS
                        </p>
                        <div className={cn(
                            "text-white text-sm bg-primary h-fit p-2",
                            isLaptop && "text-xs"
                        )}>
                            자세히보기 +
                        </div>
                    </div>
                    <p className={cn(
                        "text-white",
                        isLaptop && "text-sm"
                    )}>
                        RAMS는 신뢰성(Reliability), 가용성(Availability),
                        유지보수성(Maintainability) 그리고 안전성(Safety)으로
                        철도 프로젝트에서 가용성과 안전성 목표를 만족하기 위한 기술입니다.
                    </p>
                </div>
            </div>

            {/* ISA / SIL */}
            <div className="w-[34%] h-full relative">
                <img src={isaSilBg} className="w-full h-full object-cover" />
                <div
                    className="p-8 absolute bg-black/50 w-full top-0 left-0 flex flex-col gap-4 cursor-pointer"
                    onClick={() => navigate("/tech/isa-sil")}
                >
                    <div className="flex justify-between items-center">
                        <p className={cn(
                            "text-white text-4xl font-black",
                            isLaptop && "text-2xl"
                        )}>
                            ISA/SIL인증
                        </p>
                        <div className={cn(
                            "text-white text-sm bg-primary h-fit p-2",
                            isLaptop && "text-xs"
                        )}>
                            자세히보기 +
                        </div>
                    </div>
                    <p className={cn(
                        "text-white",
                        isLaptop && "text-sm"
                    )}>
                        ISA (Independent Safety Assessment)는 독립안전평가로
                        유럽철도표준에 따라 철도시스템, 서브시스템 및 부품에 대한
                        안전성평가 인증(SIL인증)입니다.
                    </p>
                </div>
            </div>

            {/* 우측 영역 */}
            <div className="w-[32%] flex flex-col gap-4 relative">
                {/* 철도안전법 승인 */}
                <div className="w-full h-[33%] border border-divider flex justify-between px-6 py-4 bg-white">
                    <div className="flex flex-col justify-between w-[60%]">
                        <p className={cn(
                            "text-2xl font-semibold text-label",
                            isLaptop && "text-xl"
                        )}>
                            철도안전법승인
                        </p>
                        <p className={cn(
                            "text-label text-sm",
                            isLaptop && "text-xs"
                        )}>
                            철도안전법에 따라 철도용품 및 철도차량 제작자는
                            관련 시행지침에 의한 형식승인, 제작자 승인 그리고
                            완성검사를 받아야 합니다.
                        </p>
                        <div
                            className={cn(
                                "text-white text-sm bg-primary w-fit h-fit p-2 cursor-pointer",
                                isLaptop && "text-xs"
                            )}
                            onClick={() => navigate("/tech/safety-act")}
                        >
                            자세히보기 +
                        </div>
                    </div>
                    <img src={krts} className="w-[40%] object-contain" />
                </div>

                {/* 용접인증 */}
                <div className="w-full h-[33%] flex justify-between px-6 py-4 bg-primary-light">
                    <div className="flex flex-col justify-between w-[60%]">
                        <p className={cn(
                            "text-2xl font-semibold text-white",
                            isLaptop && "text-xl"
                        )}>
                            용접인증
                        </p>
                        <p className={cn(
                            "text-white text-sm",
                            isLaptop && "text-xs"
                        )}>
                            - ISO3834<br />- EN15085<br />- EN1090
                        </p>
                        <div
                            className={cn(
                                "text-white text-sm bg-primary-light border border-white w-fit h-fit p-2 cursor-pointer",
                                isLaptop && "text-xs"
                            )}
                            onClick={() => navigate("/welding")}
                        >
                            자세히보기 +
                        </div>
                    </div>
                    <img src={cert} className="w-[40%] object-contain" />
                </div>

                {/* IRIS */}
                <div className="w-full h-[33%] flex gap-4  px-6 py-4 bg-primary">
                    <div className="w-[60%] flex flex-col justify-between">
                        <div className="flex flex-col gap-2">
                            <p
                                className={cn(
                                    "text-2xl font-semibold text-white",
                                    isLaptop && "text-lg"
                                )}
                                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
                            >
                                ISO/TS22163(IRIS)
                            </p>
                            <p
                                className={cn(
                                    "text-white text-sm",
                                    isLaptop && "text-xs"
                                )}
                                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
                            >
                                철도산업 국제품질경영시스템
                            </p>
                        </div>
                        <div
                            className={cn(
                                "text-white text-sm border border-white w-fit h-fit p-2 cursor-pointer",
                                isLaptop && "text-xs"
                            )}
                            onClick={() => navigate("/tech/iris")}
                        >
                            자세히보기 +
                        </div>
                    </div>
                    <img src={iris} className="w-[40%] object-contain" />
                </div>
            </div>
        </div>
    );
}
