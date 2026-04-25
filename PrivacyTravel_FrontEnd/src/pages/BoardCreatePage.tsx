import { Image, Shield, Star } from "lucide-react";
import { useEffect, useState } from "react";

import type { TouristSpot } from "@/data/mockData";
import { getSelectedSpots } from "@/utils/tripStorage";

const BoardCreatePage = () => {
  const [spots, setSpots] = useState<TouristSpot[]>([]);

  useEffect(() => {
    setSpots(getSelectedSpots());
  }, []);

  return (
    <main className="mx-auto max-w-[760px] px-4 py-10">
      <h1 className="mb-4 text-4xl font-bold">여행 후기 작성</h1>
      <p className="mb-10 text-gray-600">
        여행 일정에 포함된 장소별 한줄평과 별점을 함께 남겨보세요.
      </p>

      <section className="mb-5 rounded-2xl border bg-white p-6">
        <label className="mb-2 block font-bold">제목</label>
        <input
          placeholder="여행 후기 제목을 입력하세요"
          className="w-full rounded-2xl border px-4 py-3 outline-none"
        />
      </section>

      <section className="mb-5 rounded-2xl border bg-white p-6">
        <h2 className="mb-4 font-bold">여행지별 한줄평과 별점</h2>

        <div className="space-y-4">
          {spots.length === 0 ? (
            <p className="text-sm text-gray-500">
              선택된 여행 일정이 없습니다. 여행지 검색에서 관광지를 선택하면 장소별 평가 입력란이
              자동으로 표시됩니다.
            </p>
          ) : (
            spots.map((spot) => <SpotReviewInput key={spot.id} name={spot.name} />)
          )}
        </div>
      </section>

      <section className="mb-5 rounded-2xl border bg-white p-6">
        <label className="mb-2 block font-bold">내용</label>
        <textarea
          placeholder="여행 경험과 느낀 점을 자유롭게 작성해주세요"
          className="h-56 w-full resize-none rounded-2xl border px-4 py-3 outline-none"
        />
      </section>

      <section className="mb-5 rounded-2xl border bg-white p-6">
        <h2 className="mb-4 flex items-center gap-2 font-bold">
          <Image className="h-5 w-5" />
          이미지 첨부
        </h2>

        <div className="flex h-32 items-center justify-center rounded-2xl border border-dashed text-gray-500">
          클릭하거나 드래그하여 이미지를 업로드하세요
        </div>
      </section>

      <section className="mb-5 rounded-2xl border border-[#D7D292] bg-[#F5F2C8] p-5">
        <h2 className="mb-3 flex items-center gap-2 font-bold">
          <Shield className="h-5 w-5 text-[#70B5E0]" />
          프라이버시 설정
        </h2>

        <label className="mb-3 flex items-start gap-3 text-sm">
          <input type="checkbox" defaultChecked />
          <span>
            <strong>Geo Obfuscation 적용</strong>
            <br />
            위치 정보를 범위 단위로 변환하여 보호합니다
          </span>
        </label>

        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" />
          <span>
            <strong>지연 공유 사용</strong>
            <br />
            게시물을 즉시 공개하지 않고 예약 공개합니다
          </span>
        </label>
      </section>

      <div className="mb-5 rounded-xl border border-[#F1C794] bg-[#FFF0DA] px-4 py-3 text-sm text-[#E76F45]">
        AI Caption Guard가 자동으로 위험한 문구를 감지하여 수정을 제안합니다. 개인정보의 정확한 위치
        정보는 포함하지 마세요.
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="rounded-xl bg-white py-4 font-bold">취소</button>
        <button className="rounded-xl bg-[#E76F45] py-4 font-bold text-white">작성 완료</button>
      </div>
    </main>
  );
};

interface SpotReviewInputProps {
  name: string;
}

const SpotReviewInput = ({ name }: SpotReviewInputProps) => {
  return (
    <div className="grid gap-3 rounded-2xl bg-gray-100 p-4 md:grid-cols-[120px_1fr_120px]">
      <div className="font-bold">{name}</div>

      <input
        placeholder="한줄평을 입력하세요"
        className="rounded-xl border bg-white px-4 py-3 outline-none"
      />

      <div className="flex items-center justify-center gap-1 rounded-xl bg-white px-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-[#E76F45] text-[#E76F45]" />
        ))}
      </div>
    </div>
  );
};

export default BoardCreatePage;
