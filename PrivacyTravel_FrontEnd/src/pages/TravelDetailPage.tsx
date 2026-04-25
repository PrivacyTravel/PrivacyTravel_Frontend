import { useParams } from "react-router-dom";

const TravelDetailPage = () => {
  const { travelId } = useParams();

  return (
    <section className="mx-auto max-w-3xl">
      <div className="mb-6 h-80 rounded-3xl bg-gray-200" />

      <p className="mb-2 text-sm font-semibold text-(--color-primary)">Travel #{travelId}</p>

      <h1 className="mb-4 text-4xl font-bold">제주 오름 산책</h1>

      <p className="mb-8 leading-8 text-(--text-secondary)">
        이 여행 기록은 위치 정보를 도시 단위로만 공개합니다. 정확한 숙소, 실시간 이동 경로, 동행자
        정보는 작성자의 공개 범위 설정에 따라 보호됩니다.
      </p>

      <div className="rounded-2xl border border-(--border-light) bg-(--bg-muted) p-5">
        <h2 className="mb-3 text-xl font-bold">공개 범위</h2>

        <ul className="space-y-2 text-(--text-secondary)">
          <li>사진: 전체 공개</li>
          <li>도시 정보: 전체 공개</li>
          <li>정확한 위치: 비공개</li>
          <li>동행자 정보: 친구 공개</li>
        </ul>
      </div>
    </section>
  );
};

export default TravelDetailPage;
