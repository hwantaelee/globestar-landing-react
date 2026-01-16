export default function Footer() {
    return <div className="w-full h-fit bg-white flex flex-col px-8 py-8 text-label text-sm gap-8">
        <div>
            <div className="flex">
                <p className="min-w-10">회사명</p>
                <p>: 글로브스타 테크놀러지 코리아(주)</p>
            </div>
            <div className="flex">
                <p className="min-w-10">대표자</p>
                <p>: 이환태</p>
            </div>
            <div className="flex">
                <p className="min-w-10">주소</p>
                <p>: 서울특별시 마포구 마포대로 173, 마포현대하이엘 1313호</p>
            </div>
            <div className="flex">
                <p className="min-w-10">연락처</p>
                <p>: 02-6353-1505</p>
            </div>
            <div className="flex">
                <p className="min-w-10">이메일</p>
                <p>: gstarkorea@gmail.com</p>
            </div>
        </div>

        <p>
            Copyright® Globestar Technologies Korea Co., Ltd. All Rights Reserved.
        </p>
    </div>
}