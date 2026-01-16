import Breadcrumb from "../../components/Breadcrumb";
import PageTitle from "../../components/PageTitle";
import IntroduceNavBar from "./components/nav-bar/IntroduceNavBar";

export default function Map() {
    return <div className="w-full px-8 py-4 flex flex-col gap-4">
        <Breadcrumb first="HOME" second="회사소개" third="오시는 길" />
        <div className="w-full flex flex-col gap-4">
            <PageTitle title="회사소개" />
            <IntroduceNavBar />
            <p className="text-2xl text-primary pl-30">
                ・ 오시는 길
            </p>
            <div className="w-full h-[420px] px-30 ">
                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=서울특별시%20마포구%20마포대로%20173&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            <div className="flex flex-col gap-4 px-30">
                <div className="flex">
                    <p className="w-24 text-label">
                        주소
                    </p>
                    <p className="text-label">
                        <span className="bg-primary text-white px-2">본사</span> 서울특별시 마포구 마포대로 173, 마포현대하이엘 1313호
                    </p>
                </div>
                <div className="flex">
                    <p className="w-24 text-label">
                        연락처
                    </p>
                    <p className="text-label">
                        02-6353-1505
                    </p>
                </div>
                <div className="flex">
                    <p className="w-24 text-label">
                        이메일
                    </p>
                    <p className="text-label">
                        gstarkorea@gmail.com
                    </p>
                </div>
                <div className="flex">
                    <p className="w-24 text-label">
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