import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <p className="mb-8 text-gray-600">페이지를 찾을 수 없습니다.</p>

      <Link to="/search" className="rounded-xl bg-[#70B5E0] px-6 py-3 font-bold text-white">
        여행지 검색으로 이동
      </Link>
    </main>
  );
};

export default NotFoundPage;
