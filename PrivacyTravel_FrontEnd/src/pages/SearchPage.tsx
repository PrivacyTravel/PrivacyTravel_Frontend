import { MapPin, Plus, Search, Shield, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { touristSpots } from "@/data/mockData";
import { saveSelectedSpotIds } from "@/utils/tripStorage";

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const filteredSpots = useMemo(() => {
    return touristSpots.filter((spot) => {
      return (
        spot.name.includes(keyword) ||
        spot.location.includes(keyword) ||
        spot.category.includes(keyword)
      );
    });
  }, [keyword]);

  const handleToggleSpot = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((spotId) => spotId !== id) : [...prev, id],
    );
  };

  const handleSaveSelectedSpots = () => {
    saveSelectedSpotIds(selectedIds);
  };

  return (
    <main className="mx-auto max-w-[1120px] px-4 py-10">
      <h1 className="mb-4 text-4xl font-bold">여행지 검색</h1>
      <p className="mb-10 text-gray-600">
        공공데이터 기반 관광지를 검색하고 주변 안전시설을 확인하세요
      </p>

      <div className="relative mb-12 max-w-[560px]">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="관광지 이름, 지역을 검색하세요"
          className="w-full rounded-2xl border border-gray-200 bg-white py-4 pl-12 pr-4 outline-none"
        />
      </div>

      <section className="grid gap-7 lg:grid-cols-[1fr_520px]">
        <div className="flex min-h-[500px] items-center justify-center rounded-3xl border border-gray-200 bg-white">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 h-16 w-16 text-[#70B5E0]" />
            <h2 className="mb-2 text-xl font-bold">지도 영역</h2>
            <p className="mb-6 text-gray-500">선택한 관광지와 주변 안전시설이 표시됩니다</p>

            <div className="flex justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#70B5E0]" />
                관광지
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#E76F45]" />
                경찰서
              </span>
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#83B89E]" />
                병원
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredSpots.map((spot) => {
            const selected = selectedIds.includes(spot.id);

            return (
              <article
                key={spot.id}
                onClick={() => handleToggleSpot(spot.id)}
                className={`flex cursor-pointer gap-4 rounded-2xl border bg-white p-5 transition ${
                  selected ? "border-[#70B5E0] shadow-md" : "border-gray-200"
                }`}
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="h-20 w-20 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{spot.name}</h2>
                      <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        {spot.location}
                      </p>
                    </div>

                    <button
                      type="button"
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        selected ? "bg-[#70B5E0] text-white" : "bg-gray-100"
                      }`}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center gap-4 text-sm">
                    <span className="rounded-full bg-gray-100 px-3 py-1">{spot.category}</span>
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#E76F45] text-[#E76F45]" />
                      {spot.rating}
                    </span>
                  </div>

                  <div className="mt-3 flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      경찰서 {spot.policeDistance}km
                    </span>
                    <span>＋ 병원 {spot.hospitalDistance}km</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {selectedIds.length > 0 && (
        <div className="fixed bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5 rounded-2xl border bg-white px-6 py-4 shadow-xl">
          <strong>{selectedIds.length}개 관광지 선택됨</strong>
          <Link
            to="/planner"
            onClick={handleSaveSelectedSpots}
            className="rounded-xl bg-[#EFAE83] px-5 py-3 font-bold text-white"
          >
            일정 만들기
          </Link>
        </div>
      )}
    </main>
  );
};

export default SearchPage;
