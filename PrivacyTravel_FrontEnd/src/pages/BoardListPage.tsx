import { Calendar, Eye, MessageSquare, Plus, ThumbsUp } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { boardPosts } from "@/data/mockData";

const BoardListPage = () => {
  const [keyword, setKeyword] = useState("");

  const filteredPosts = useMemo(() => {
    return boardPosts.filter((post) => {
      return post.title.includes(keyword) || post.region.includes(keyword);
    });
  }, [keyword]);

  return (
    <main className="mx-auto max-w-[1040px] px-4 py-10">
      <div className="mb-9 flex items-start justify-between">
        <div>
          <h1 className="mb-4 text-4xl font-bold">여행 후기</h1>
          <p className="text-gray-600">다른 여행자들의 경험과 이야기를 공유해보세요</p>
        </div>

        <Link
          to="/board/create"
          className="flex items-center gap-1 rounded-xl bg-[#E76F45] px-5 py-3 font-bold text-white"
        >
          <Plus className="h-4 w-4" />
          글쓰기
        </Link>
      </div>

      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="관광지 이름으로 검색하세요 (예: 제주, 부산)"
        className="mb-8 w-full max-w-[360px] rounded-2xl border bg-transparent px-5 py-3 outline-none"
      />

      <p className="mb-6 text-sm text-gray-600">총 {filteredPosts.length}개의 게시글</p>

      <section className="grid gap-6 md:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={`/board/${post.id}`}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <img src={post.image} alt={post.title} className="h-40 w-full object-cover" />

            <div className="p-5">
              <h2 className="mb-3 text-lg font-bold">{post.title}</h2>
              <p className="mb-4 line-clamp-2 text-sm text-gray-600">{post.content}</p>

              <div className="mb-4 flex justify-between text-xs text-gray-500">
                <span>{post.author}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.date}
                </span>
              </div>

              <div className="flex gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <ThumbsUp className="h-3 w-3" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {post.views}
                </span>
                <span className="flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" />
                  {post.comments}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default BoardListPage;
