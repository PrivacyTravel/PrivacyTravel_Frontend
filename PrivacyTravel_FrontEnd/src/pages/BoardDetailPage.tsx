import { Calendar, Edit, Eye, MapPin, MessageSquare, ThumbsUp, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { boardPosts } from "@/data/mockData";

const BoardDetailPage = () => {
  const { postId } = useParams();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  const post = useMemo(() => {
    return boardPosts.find((item) => item.id === Number(postId)) ?? boardPosts[0];
  }, [postId]);

  return (
    <main className="mx-auto max-w-[760px] bg-white">
      <article className="border-b px-8 py-8">
        <div className="mb-5 flex justify-between">
          <div>
            <h1 className="mb-5 text-4xl font-bold">{post.title}</h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <strong className="text-black">{post.author}</strong>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1 text-[#70B5E0]">
                <MapPin className="h-4 w-4" />
                {post.region}
              </span>
            </div>
          </div>

          {post.isMine && (
            <div className="flex gap-3">
              <button type="button">
                <Edit className="h-5 w-5" />
              </button>
              <button type="button">
                <Trash2 className="h-5 w-5 text-red-500" />
              </button>
            </div>
          )}
        </div>

        <div className="mb-8 flex gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            조회 {post.views}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            좋아요 {post.likes + (liked ? 1 : 0)}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            댓글 {post.comments}
          </span>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="mb-8 h-52 w-full rounded-2xl object-cover"
        />

        <p className="mb-10 whitespace-pre-line leading-8">{post.content}</p>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setLiked((prev) => !prev)}
            className={`rounded-xl px-8 py-3 font-bold ${
              liked ? "bg-[#E76F45] text-white" : "bg-[#70B5E0] text-white"
            }`}
          >
            👍 좋아요
          </button>
        </div>
      </article>

      <section className="px-8 py-8">
        <h2 className="mb-5 text-xl font-bold">댓글 2</h2>

        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="댓글을 입력하세요"
          className="mb-3 h-24 w-full resize-none rounded-2xl border px-4 py-3 outline-none"
        />

        <div className="mb-8 text-right">
          <button className="rounded-xl bg-[#70B5E0] px-5 py-2 font-bold text-white">
            댓글 작성
          </button>
        </div>

        <div className="space-y-3">
          <Comment
            author="제주사랑"
            content="저도 다음 달에 한 달 살기 계획 중인데 너무 도움이 되네요!"
          />
          <Comment author="여행초보" content="사진 분위기가 정말 좋네요. 코스 참고하겠습니다." />
        </div>
      </section>
    </main>
  );
};

interface CommentProps {
  author: string;
  content: string;
}

const Comment = ({ author, content }: CommentProps) => {
  return (
    <div className="rounded-2xl bg-gray-100 p-4">
      <strong>{author}</strong>
      <p className="mt-2 text-sm text-gray-600">{content}</p>
    </div>
  );
};

export default BoardDetailPage;
