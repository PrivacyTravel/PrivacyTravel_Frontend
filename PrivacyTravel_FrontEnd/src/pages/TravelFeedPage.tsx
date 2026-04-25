import { Link } from "react-router-dom";

const travels = [
  {
    id: 1,
    title: "제주 오름 산책",
    location: "Jeju",
    description: "정확한 숙소 위치 없이 여행지만 공유하는 안전한 기록",
  },
  {
    id: 2,
    title: "부산 바다 여행",
    location: "Busan",
    description: "사진과 감상은 공개, 이동 경로는 비공개",
  },
  {
    id: 3,
    title: "서울 골목 투어",
    location: "Seoul",
    description: "동행자 정보는 친구 공개로 제한",
  },
];

const TravelFeedPage = () => {
  return (
    <section>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">여행 피드</h1>
        <p className="mt-2 text-(--text-secondary)">
          개인정보 보호 설정이 적용된 여행 기록을 둘러보세요.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {travels.map((travel) => (
          <Link
            key={travel.id}
            to={`/travel/${travel.id}`}
            className="rounded-2xl border border-(--border-light) bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 h-48 rounded-xl bg-gray-200" />
            <p className="text-sm text-(--color-primary)">{travel.location}</p>
            <h2 className="mt-2 text-xl font-bold">{travel.title}</h2>
            <p className="mt-3 text-sm leading-6 text-(--text-secondary)">{travel.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TravelFeedPage;
