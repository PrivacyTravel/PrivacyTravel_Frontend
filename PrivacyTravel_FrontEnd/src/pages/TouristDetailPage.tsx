import {
  Building2,
  Clock,
  Heart,
  Hospital,
  MapPin,
  Phone,
  Share2,
  Shield,
  Star,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { touristSpots } from "@/data/mockData";

const TouristDetailPage = () => {
  const { spotId } = useParams();

  const spot = touristSpots.find((item) => item.id === Number(spotId)) ?? touristSpots[0];

  const latestReviews = spot.shortReviews.slice(0, 5);

  return (
    <main className="min-h-screen bg-[#F8FFB8]">
      <section className="relative h-[390px]">
        <img src={spot.image} alt={spot.name} className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute bottom-10 left-1/2 w-full max-w-[1120px] -translate-x-1/2 px-4 text-white">
          <p className="mb-3 flex items-center gap-1 text-sm">
            <MapPin className="h-4 w-4" />
            {spot.location}
          </p>

          <h1 className="mb-6 text-5xl font-bold">{spot.name}</h1>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-[#E9785A] px-5 py-3 font-bold">
              <Heart className="h-4 w-4" />
              저장
            </button>

            <button className="flex items-center gap-2 rounded-xl bg-white/20 px-5 py-3 font-bold backdrop-blur">
              <Share2 className="h-4 w-4" />
              공유
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-4 py-14">
        <p className="mb-10 max-w-[760px] text-xl leading-9">{spot.description}</p>

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <InfoCard title="정보">
            <InfoRow icon={<Clock />} label="운영시간" value={spot.openTime} />
            <InfoRow icon={<Phone />} label="문의전화" value={spot.phone} />
            <InfoRow icon={<Star />} label="평점" value={`${spot.rating} / 5.0`} />
          </InfoCard>

          <InfoCard title="안전시설">
            <InfoRow
              icon={<Hospital />}
              label="병원"
              value={`${spot.hospitalName} (${spot.hospitalDistance}km)`}
              accent="text-[#E76F45]"
            />
            <InfoRow
              icon={<Building2 />}
              label="경찰서"
              value={`${spot.policeName} (${spot.policeDistance}km)`}
              accent="text-[#70B5E0]"
            />
          </InfoCard>
        </div>

        <section className="rounded-3xl bg-white p-7 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">최신 한줄평</h2>
              <p className="mt-1 text-sm text-gray-500">
                여행 후기에 남겨진 장소별 한줄평을 최대 5개까지 보여줍니다.
              </p>
            </div>

            <Link
              to="/board"
              className="rounded-xl bg-[#70B5E0] px-4 py-2 text-sm font-bold text-white"
            >
              후기 더보기
            </Link>
          </div>

          {latestReviews.length === 0 ? (
            <div className="rounded-2xl bg-gray-100 p-6 text-center text-gray-500">
              아직 등록된 한줄평이 없습니다.
            </div>
          ) : (
            <div className="space-y-3">
              {latestReviews.map((review) => (
                <article key={review.id} className="rounded-2xl bg-gray-100 p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <strong>{review.author}</strong>

                    <div className="flex items-center gap-1 text-[#E76F45]">
                      <Star className="h-4 w-4 fill-[#E76F45]" />
                      <span className="text-sm font-bold">{review.rating}</span>
                    </div>
                  </div>

                  <p className="mb-2 text-gray-700">{review.comment}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </article>
              ))}
            </div>
          )}
        </section>

        <div className="mt-8 rounded-2xl border border-[#D7D292] bg-[#F5F2C8] p-5">
          <div className="flex items-center gap-2 font-bold">
            <Shield className="h-5 w-5 text-[#70B5E0]" />
            SafeTrip 보호 안내
          </div>
          <p className="mt-2 text-sm text-gray-600">
            상세 위치와 여행 기록은 Geo Obfuscation 기준에 따라 범위 단위로 표시됩니다.
          </p>
        </div>
      </section>
    </main>
  );
};

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard = ({ title, children }: InfoCardProps) => {
  return (
    <div className="rounded-3xl bg-[#D6E5E3] p-7">
      <h2 className="mb-6 text-lg font-bold">{title}</h2>
      <div className="space-y-5">{children}</div>
    </div>
  );
};

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: string;
}

const InfoRow = ({ icon, label, value, accent = "text-[#70B5E0]" }: InfoRowProps) => {
  return (
    <div className="flex gap-3">
      <span className={`mt-1 [&>svg]:h-5 [&>svg]:w-5 ${accent}`}>{icon}</span>

      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="mt-1 text-sm font-medium">{value}</p>
      </div>
    </div>
  );
};

export default TouristDetailPage;
