import { useNavigate } from "react-router-dom";
import logo from "../../../public/images/logo.png";

export default function TopBar() {

    const navigate = useNavigate();

    return <div className="w-full h-20 flex px-12 items-center justify-between pt-2 pb-2">
        <div className="h-full flex items-end cursor-pointer" onClick={() => navigate('/')}>
            <img
                src={logo}
                className="h-full"
            />
            <h1 className="text-label text-lg pb-1 font-semibold">
                철도시스템기술 인증전문회사
            </h1>
        </div>
        <div className="flex flex-col items-center">
            <p className="text-label text-sm font-semibold tracking-tighter">
                전문가 상담 / 무료세미나 신청
            </p>
            <div className="flex gap-1 items-center">
                <p className="text-primary text-xl font-bold">02-6353-1505</p>
            </div>
        </div>
    </div>
}