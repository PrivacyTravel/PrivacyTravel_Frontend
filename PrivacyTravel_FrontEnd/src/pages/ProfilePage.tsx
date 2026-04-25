import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-8 rounded-3xl border border-(--border-light) bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="h-24 w-24 rounded-full bg-gray-200" />

          <div className="flex-1">
            <h1 className="text-3xl font-bold">Sunny Traveler</h1>
            <p className="mt-2 text-(--text-secondary)">개인정보 보호를 우선하는 여행 기록자</p>
          </div>

          <Link
            to="/settings/privacy"
            className="rounded-full border border-(--border-light) px-5 py-2 font-medium"
          >
            개인정보 설정
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl bg-(--bg-muted) p-5">
          <p className="text-sm text-(--text-secondary)">게시글</p>
          <p className="mt-2 text-3xl font-bold">12</p>
        </div>

        <div className="rounded-2xl bg-(--bg-muted) p-5">
          <p className="text-sm text-(--text-secondary)">공개 여행</p>
          <p className="mt-2 text-3xl font-bold">8</p>
        </div>

        <div className="rounded-2xl bg-(--bg-muted) p-5">
          <p className="text-sm text-(--text-secondary)">비공개 기록</p>
          <p className="mt-2 text-3xl font-bold">4</p>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
