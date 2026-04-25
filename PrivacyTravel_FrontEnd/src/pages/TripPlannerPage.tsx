import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import type { TouristSpot } from "@/data/mockData";
import { getSelectedSpots } from "@/utils/tripStorage";

const TripPlannerPage = () => {
  const navigate = useNavigate();

  const [selectedSpots, setSelectedSpots] = useState<TouristSpot[]>([]);
  const [startDate, setStartDate] = useState("2026-05-01");
  const [endDate, setEndDate] = useState("2026-05-02");

  useEffect(() => {
    setSelectedSpots(getSelectedSpots());
  }, []);

  const handleCreateSchedule = () => {
    navigate("/trip/1", {
      state: {
        startDate,
        endDate,
        spots: selectedSpots,
      },
    });
  };

  return (
    <main className="mx-auto max-w-[960px] px-4 py-10">
      <h1 className="mb-4 text-4xl font-bold">여행 일정 만들기</h1>
      <p className="mb-10 text-gray-600">
        Smart Trip Planner가 최적의 여행 동선을 자동으로 생성합니다
      </p>

      <section className="grid gap-7 lg:grid-cols-[270px_1fr]">
        <aside className="space-y-5">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 flex items-center gap-2 font-bold">
              <Calendar className="h-5 w-5 text-[#70B5E0]" />
              여행 기간
            </h2>

            <label className="mb-4 block">
              <span className="mb-2 block text-sm">시작일</span>
              <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm">종료일</span>
              <input
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
                className="w-full rounded-xl border px-4 py-3 outline-none"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={handleCreateSchedule}
            disabled={selectedSpots.length === 0}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#EFAE83] px-6 py-4 font-bold text-white disabled:opacity-50"
          >
            <Sparkles className="h-5 w-5" />
            일정 자동 생성
          </button>
        </aside>

        <section className="rounded-2xl border bg-white p-6">
          <h2 className="mb-6 flex items-center gap-2 font-bold">
            <MapPin className="h-5 w-5 text-[#70B5E0]" />
            선택한 관광지 ({selectedSpots.length})
          </h2>

          {selectedSpots.length === 0 ? (
            <div className="rounded-2xl bg-gray-100 p-8 text-center text-gray-500">
              선택된 관광지가 없습니다. 여행지 검색 페이지에서 관광지를 먼저 선택하세요.
            </div>
          ) : (
            <div className="space-y-3">
              {selectedSpots.map((spot, index) => (
                <div key={spot.id} className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#70B5E0] font-bold text-white">
                    {index + 1}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-bold">{spot.name}</h3>
                    <p className="text-sm text-gray-500">{spot.location}</p>
                  </div>

                  {index < selectedSpots.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 rounded-2xl bg-[#EEF7FC] p-5">
            <h3 className="mb-3 flex items-center gap-2 font-bold">
              <Sparkles className="h-5 w-5 text-[#70B5E0]" />
              Smart Trip Planner
            </h3>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• 관광지 간 이동 시간 최소화</li>
              <li>• 하루 단위 최적 일정 구성</li>
              <li>• 지도 기반 경로 시각화</li>
              <li>• 예상 이동 시간 자동 계산</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};

export default TripPlannerPage;
