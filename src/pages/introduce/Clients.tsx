import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import ClientGridRow from "./components/client-grid-row/ClientGridRow";
import IntroduceNavBar from "./components/nav-bar/IntroduceNavBar";
import rina from "../../../public/images/client/rina.png";
import tuvNord from "../../../public/images/client/tuv-nord.png";
import dnv from "../../../public/images/client/dnv.webp";
import krRegi from "../../../public/images/client/kr-regi.svg";
import alstom from "../../../public/images/client/alstom.svg";
import knorr from "../../../public/images/client/knorr-bremse.png";
import caf from "../../../public/images/client/caf.png";
import rotem from "../../../public/images/client/hyundai-rotem.svg";
import kra from "../../../public/images/client/kra.png";
import koreaNationalRailway from "../../../public/images/client/korea-national-railway.jpg";
import seoulMetro from "../../../public/images/client/seoul-metro.png";
import krri from "../../../public/images/client/krri.png";
import samjung from "../../../public/images/client/samjung-tech.png";
import hyundaiElevator from "../../../public/images/client/hyundai-elevator.jpg";
import hyundaiHeavyIndustries from "../../../public/images/client/hyundai-heavy-industries.png";
import hyundaiElectric from "../../../public/images/client/hyundai-electric.png";
import sean from "../../../public/images/client/se-an.jpeg";
import daeho from "../../../public/images/client/daeho-al.jpg";
import sungsin from "../../../public/images/client/sungsin-rst.png";
import snt from "../../../public/images/client/snt.jpg";
import kps from "../../../public/images/client/he-kps.png";
import dongsung from "../../../public/images/client/dongsung.jpeg";
import sejong from "../../../public/images/client/sejong.png";
import kcwi from "../../../public/images/client/kcwi.jpg";
import hyunsung from "../../../public/images/client/hyunsung.png";
import koino from "../../../public/images/client/koino.jpeg";
import kosteel from "../../../public/images/client/kosteel.jpg";
import hanyung from "../../../public/images/client/hanyung.png";
import sehwa from "../../../public/images/client/sehwa.png";
import travis from "../../../public/images/client/travis.jpg";
import kpcm from "../../../public/images/client/kpcm.png";
import ritco from "../../../public/images/client/ritco.png";
import heungjin from "../../../public/images/client/heungjin.png";
import daesang from "../../../public/images/client/daesang.png";
import si from "../../../public/images/client/si.png";
import { cn } from "../../utils/cn";
import { useDeviceStore } from "../../store/useDeviceStore";

export default function Clients() {
    const device = useDeviceStore((s) => s.deviceType);
    const isLaptop = device === "laptop";
    const isTablet = device === "tablet";

    return <div className={cn("w-full min-h-[calc(100vh-136px)] px-8 py-4 flex flex-col gap-4",
        isTablet && "px-4"
    )}>
        <Breadcrumb first="HOME" second="회사소개" third="고객사 리스트" />

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
                ・ 고객사 리스트
            </p>

            <p className={cn(
                "text-center text-xl",
                isLaptop && "text-base",
                isTablet && "text-sm"
            )}>
                <span className="bg-primary text-white">글로브스타</span>와 함께하는 국내/외 고객사 리스트입니다.<br />
                고객과 함께 <span className="text-primary">동반성장</span>해 나가겠습니다.
            </p>


            <div className={cn("flex flex-col gap-16 px-30 py-20",
                isTablet && "items-center px-0 py-4 gap-6"
            )}>
                <ClientGridRow clients={[
                    { ci: rina, clientName: "리나서비스", className: "object-contain" },
                    { ci: tuvNord, clientName: "TUV NORD", className: "object-contain" },
                    { ci: dnv, clientName: "DNV" },
                    { ci: krRegi, clientName: "한국선급" },
                ]} />
                <ClientGridRow clients={[
                    { ci: alstom, clientName: "알스톰" },
                    { ci: knorr, clientName: "크노르" },
                    { ci: caf, clientName: "카프" },
                    { ci: rotem, clientName: "현대로템", className: "object-contain" },
                ]} />
                <ClientGridRow clients={[
                    { ci: kra, clientName: "한국철도산업협회" },
                    { ci: koreaNationalRailway, clientName: "국가철도공단" },
                    { ci: seoulMetro, clientName: "서울교통공사" },
                    { ci: krri, clientName: "한국철도기술연구원" },
                ]} />
                <ClientGridRow clients={[
                    { ci: samjung, clientName: "삼중테크" },
                    { ci: hyundaiElevator, clientName: "현대엘리베이터" },
                    { ci: hyundaiHeavyIndustries, clientName: "현대중공업" },
                    { ci: hyundaiElectric, clientName: "현대일렉트릭앤에너지" },
                ]} />
                <ClientGridRow clients={[
                    { ci: sean, clientName: "세안정기", className: 'object-contain scale-125' },
                    { ci: daeho, clientName: "대호에이엘" },
                    { ci: sungsin, clientName: "성신 RST" },
                    { ci: snt, clientName: "S&T" },
                ]} />
                <ClientGridRow clients={[
                    { ci: kps, clientName: "한전 KPS" },
                    { ci: dongsung, clientName: "동성진흥" },
                    { ci: sejong, clientName: "세종기술" },
                    { ci: kcwi, clientName: "KCWI" },
                ]} />
                <ClientGridRow clients={[
                    { ci: hyunsung, clientName: "현성기업" },
                    { ci: heungjin, clientName: "흥진산업" },
                    { ci: koino, clientName: "건흥전기" },
                    { ci: daesang, clientName: "대상중공업" },
                ]} />
                <ClientGridRow clients={[
                    { ci: kosteel, clientName: "코스틸" },
                    { ci: hanyung, clientName: "한영산업" },
                    { ci: si, clientName: "삼성산업" },
                    { ci: sehwa, clientName: "세화" },
                ]} />
                <ClientGridRow clients={[
                    { ci: travis, clientName: "세한트라비스" },
                    { ci: kpcm, clientName: "KPC" },
                    { ci: ritco, clientName: "리트코" }
                ]} />
            </div>
        </div>
    </div>
}