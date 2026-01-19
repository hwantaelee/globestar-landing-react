import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import { useDeviceStore } from "../../store/useDeviceStore";
import { cn } from "../../utils/cn";
import IntroduceNavBar from "./components/nav-bar/IntroduceNavBar";

export default function Map() {

    const device = useDeviceStore((s) => s.deviceType);
    const isLaptop = device === "laptop";
    const isTablet = device === "tablet";

    return <div className={cn("w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4",
        isTablet && "px-4"
    )}>
        <Breadcrumb first="HOME" second="회사소개" third="오시는 길" />
        <div className="w-full flex flex-col gap-4">
            {isTablet ? <h1 className="text-label text-2xl font-black border-b-2 border-primary pb-2">
                회사소개
            </h1> : <PageTitle title="회사소개" />}
            <IntroduceNavBar />
            <p className={cn(
                "text-2xl text-primary pl-30",
                isLaptop && "text-xl",
                isTablet && "text-lg pl-0"
            )}>
                ・ 오시는 길
            </p>
            <div className={cn("w-full h-[420px] px-30",
                isTablet && "px-4 flex justify-center h-[300px]"
            )}>
                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=서울특별시%20마포구%20마포대로%20173&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className={cn("flex flex-col gap-4 px-30",
                isTablet && "px-4 gap-2 text-sm"
            )}>
                <div className="flex">
                    <p className={cn("min-w-24 text-label",
                        isTablet && "min-w-16"
                    )}>
                        주소
                    </p>
                    <p className="text-label">
                        <span className="bg-primary text-white px-2">본사</span> 서울특별시 마포구 마포대로 173, 마포현대하이엘 1313호
                    </p>
                </div>
                <div className="flex">
                    <p className={cn("min-w-24 text-label",
                        isTablet && "min-w-16"
                    )}>
                        연락처
                    </p>
                    <p className="text-label">
                        02-6353-1505
                    </p>
                </div>
                <div className="flex">
                    <p className={cn("min-w-24 text-label",
                        isTablet && "min-w-16"
                    )}>
                        이메일
                    </p>
                    <p className="text-label">
                        drlee@globestartech.com
                    </p>
                </div>
                <div className="flex">
                    <p className={cn("min-w-24 text-label",
                        isTablet && "min-w-16"
                    )}>
                        대중교통
                    </p>
                    <p className="text-label">
                        지하철 : <span className="text-white px-2" style={{
                            backgroundColor: "#5FA7DC"
                        }}>공덕역(공항철도5/6호선 3번출구) 도보 8분</span> / <span className="text-white px-2" style={{
                            backgroundColor: "#9E2BC0"
                        }}>애오개역(5호선 1번출구) 도보 6분</span>
                        <br />
                        버스 : 1002번/260번/160번/600번/7013A/7013B/7611번/2500번/6015번 마포경찰서하차 도보 1분
                    </p>
                </div>
            </div>
        </div>
    </div>
}