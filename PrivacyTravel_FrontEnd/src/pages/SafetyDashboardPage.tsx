import { CheckCircle, Clock, Image, Shield, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { boardPosts } from "@/data/mockData";

type FilterType = "all" | "reserved" | "published";

const SafetyDashboardPage = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const myPosts = boardPosts.filter((post) => post.isMine);
  const filteredPosts =
    filter === "all" ? myPosts : myPosts.filter((post) => post.status === filter);

  return (
    <main className="mx-auto max-w-[1120px] px-4 py-10">
      <h1 className="mb-4 flex items-center gap-3 text-4xl font-bold">
        <Shield className="h-8 w-8 text-[#70B5E0]" />
        Safety Dashboard
      </h1>
      <p className="mb-10 text-gray-600">Ghost Post 시스템으로 안전하게 관리되는 내 게시글 현황</p>

      <section className="mb-9 grid gap-5 md:grid-cols-4">
        <StatCard icon={<Clock />} label="예약된 게시글" value="2" color="text-[#E76F45]" />
        <StatCard icon={<CheckCircle />} label="공개된 게시글" value="1" color="text-[#83B89E]" />
        <StatCard icon={<ShieldCheck />} label="보호율" value="100%" color="text-[#70B5E0]" />
        <StatCard icon={<Image />} label="총 이미지" value="16" color="text-[#E76F45]" />
      </section>

      <div className="mb-7 flex gap-3">
        <FilterButton label="전체" active={filter === "all"} onClick={() => setFilter("all")} />
        <FilterButton
          label="예약됨"
          active={filter === "reserved"}
          onClick={() => setFilter("reserved")}
        />
        <FilterButton
          label="공개됨"
          active={filter === "published"}
          onClick={() => setFilter("published")}
        />
      </div>

      <section className="space-y-5">
        {filteredPosts.map((post) => (
          <article key={post.id} className="rounded-2xl border bg-white p-6">
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <span
                className={`rounded-full px-2 py-1 text-xs ${
                  post.status === "reserved"
                    ? "bg-[#FFE5DD] text-[#E76F45]"
                    : "bg-[#DFF3EA] text-[#4C9C79]"
                }`}
              >
                {post.status === "reserved" ? "예약됨" : "공개됨"}
              </span>
            </div>

            <p className="mb-4 text-sm text-gray-600">{post.region} · 2박 3일</p>

            <div className="mb-4 flex gap-5 text-sm text-gray-500">
              <span>2026-05-04 00:00</span>
              <span>장소 범위 처리</span>
              <span>{post.region} 범위</span>
            </div>

            <div className="grid gap-3 rounded-2xl bg-gray-100 p-4 text-sm md:grid-cols-3">
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#83B89E]" />
                Geo Obfuscation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#83B89E]" />
                AI Caption Guard
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#83B89E]" />
                Privacy Filter
              </span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const StatCard = ({ icon, label, value, color }: StatCardProps) => {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <div className={`mb-3 [&>svg]:h-6 [&>svg]:w-6 ${color}`}>{icon}</div>
      <div className="flex items-end justify-between">
        <span className="text-sm text-gray-600">{label}</span>
        <strong className="text-2xl">{value}</strong>
      </div>
    </div>
  );
};

interface FilterButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterButton = ({ label, active, onClick }: FilterButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-5 py-2 font-bold ${
        active ? "bg-[#70B5E0] text-white" : "bg-white"
      }`}
    >
      {label}
    </button>
  );
};

export default SafetyDashboardPage;
