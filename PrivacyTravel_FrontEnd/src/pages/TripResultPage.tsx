import { Calendar, Clock, Download, Edit, MapPin, Share2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import { touristSpots, type TouristSpot } from "@/data/mockData";

interface LocationState {
  startDate?: string;
  endDate?: string;
  spots?: TouristSpot[];
}

interface ScheduleItem {
  id: number;
  name: string;
  time: string;
  duration: string;
  moveToNext?: string;
}

const TripResultPage = () => {
  const { state } = useLocation();
  const tripState = state as LocationState | null;

  const spots = tripState?.spots?.length ? tripState.spots : touristSpots;
  const startDate = tripState?.startDate ?? "2026-05-01";
  const endDate = tripState?.endDate ?? "2026-05-02";

  const days = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = Math.max(1, Math.floor((end.getTime() - start.getTime()) / 86400000) + 1);

    return Array.from({ length: diff }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);

      return {
        day: index + 1,
        date: date.toISOString().slice(0, 10),
      };
    });
  }, [startDate, endDate]);

  const [selectedDay, setSelectedDay] = useState(1);
  const [editingId, setEditingId] = useState<number | null>(null);

  const scheduleItems: ScheduleItem[] = spots
    .filter((_, index) => index % days.length === selectedDay - 1)
    .map((spot, index) => ({
      id: spot.id,
      name: spot.name,
      time: `${10 + index * 3}:00`,
      duration: index === 0 ? "2시간" : "1시간",
      moveToNext: index < spots.length - 1 ? `${15 + index * 15}분` : undefined,
    }));

  return (
    <main className="mx-auto max-w-[1040px] px-4 py-10">
      <h1 className="mb-3 text-4xl font-bold">서울 2박 3일 여행</h1>

      <div className="mb-9 flex items-center gap-5 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {startDate} - {endDate}
        </span>
        <span>{days.length}일 일정</span>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1fr_260px]">
        <div className="space-y-6">
          <div className="rounded-2xl border bg-white p-6">
            <div className="flex h-[280px] items-center justify-center rounded-2xl bg-[#F3F8F9]">
              <div className="text-center">
                <MapPin className="mx-auto mb-3 h-14 w-14 text-[#70B5E0]" />
                <h2 className="font-bold">경로 시각화 지도</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Day {selectedDay} 일정이 경로로 표시됩니다
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="mb-6 text-xl font-bold">Day {selectedDay} 상세 일정</h2>

            <div className="space-y-4">
              {scheduleItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <span className="mt-2 h-3 w-3 rounded-full bg-[#70B5E0]" />

                  <button
                    type="button"
                    onClick={() => setEditingId(item.id)}
                    className="flex-1 rounded-2xl bg-gray-100 p-4 text-left"
                  >
                    {editingId === item.id ? (
                      <input
                        defaultValue={item.name}
                        onBlur={() => setEditingId(null)}
                        autoFocus
                        className="mb-2 w-full rounded-lg border px-3 py-2 outline-none"
                      />
                    ) : (
                      <h3 className="font-bold">{item.name}</h3>
                    )}

                    <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      {item.time} · {item.duration}
                    </p>

                    {item.moveToNext && (
                      <p className="mt-3 border-t pt-3 text-sm text-[#E76F45]">
                        다음 장소까지 이동 시간: {item.moveToNext}
                      </p>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border bg-white p-5">
            <h2 className="mb-4 font-bold">일정 선택</h2>

            <div className="space-y-2">
              {days.map((day) => (
                <button
                  key={day.day}
                  type="button"
                  onClick={() => setSelectedDay(day.day)}
                  className={`w-full rounded-xl p-3 text-left ${
                    selectedDay === day.day ? "bg-[#70B5E0] text-white" : "bg-gray-100"
                  }`}
                >
                  <strong>Day {day.day}</strong>
                  <p className="text-xs">{day.date}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <h2 className="mb-4 font-bold">일정 관리</h2>
            <div className="space-y-2">
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#70B5E0] py-3 font-bold text-white">
                <Edit className="h-4 w-4" />
                일정 수정
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 py-3">
                <Download className="h-4 w-4" />
                일정 저장
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#83B89E] py-3 font-bold text-white">
                <Share2 className="h-4 w-4" />
                공유하기
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-[#F1EFC4] p-5">
            <h2 className="mb-4 font-bold">여행 정보</h2>
            <InfoRow label="총 관광지" value={`${spots.length}개`} />
            <InfoRow label="총 이동 시간" value="1시간 45분" />
            <InfoRow label="예상 관광 시간" value="14시간" />
          </div>
        </aside>
      </section>
    </main>
  );
};

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  return (
    <div className="mb-2 flex justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <strong>{value}</strong>
    </div>
  );
};

export default TripResultPage;
