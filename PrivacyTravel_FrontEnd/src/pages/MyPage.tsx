import { Calendar, LogOut, Mail, MapPin, Settings, User } from "lucide-react";

const recentTrips = [
  { title: "제주 4박 5일", date: "2026-03-15", places: 8 },
  { title: "서울 2박 3일", date: "2026-02-20", places: 6 },
  { title: "부산 3박 4일", date: "2026-01-28", places: 7 },
];

const MyPage = () => {
  return (
    <main className="mx-auto max-w-[860px] px-4 py-10">
      <h1 className="mb-4 text-4xl font-bold">마이페이지</h1>
      <p className="mb-10 text-gray-600">내 정보와 여행 기록을 관리하세요</p>

      <section className="grid gap-6 md:grid-cols-[250px_1fr]">
        <aside className="rounded-2xl border bg-white p-8 text-center">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF7FC]">
            <User className="h-10 w-10 text-[#70B5E0]" />
          </div>

          <h2 className="mb-2 text-xl font-bold">여행러버</h2>
          <p className="mb-6 text-sm text-gray-500">travel@example.com</p>

          <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#70B5E0] py-3 font-bold text-white">
            <Settings className="h-4 w-4" />
            설정
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 py-3">
            <LogOut className="h-4 w-4" />
            로그아웃
          </button>
        </aside>

        <div className="space-y-6">
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">회원 정보</h2>

            <InfoBox icon={<User />} label="이름" value="여행러버" />
            <InfoBox icon={<Mail />} label="이메일" value="travel@example.com" />
            <InfoBox icon={<Calendar />} label="가입일" value="2026-01-15" />
          </section>

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">여행 통계</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <StatBox value="12" label="완료한 여행" color="text-[#70B5E0]" />
              <StatBox value="48" label="방문한 관광지" color="text-[#83B89E]" />
              <StatBox value="24" label="작성한 후기" color="text-[#E76F45]" />
              <StatBox value="156" label="업로드한 사진" color="text-black" />
            </div>
          </section>

          <section className="rounded-2xl border bg-white p-6">
            <h2 className="mb-5 text-xl font-bold">최근 여행</h2>

            <div className="space-y-3">
              {recentTrips.map((trip) => (
                <div
                  key={trip.title}
                  className="flex items-center justify-between rounded-2xl bg-gray-100 p-4"
                >
                  <div>
                    <h3 className="font-bold">{trip.title}</h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {trip.date}
                    </p>
                  </div>

                  <p className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    {trip.places}개 장소
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

interface InfoBoxProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoBox = ({ icon, label, value }: InfoBoxProps) => {
  return (
    <div className="mb-3 flex items-center gap-4 rounded-2xl bg-gray-100 p-4">
      <span className="text-gray-500 [&>svg]:h-5 [&>svg]:w-5">{icon}</span>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <strong>{value}</strong>
      </div>
    </div>
  );
};

interface StatBoxProps {
  value: string;
  label: string;
  color: string;
}

const StatBox = ({ value, label, color }: StatBoxProps) => {
  return (
    <div className="rounded-2xl bg-gray-100 p-5">
      <strong className={`text-3xl ${color}`}>{value}</strong>
      <p className="mt-1 text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default MyPage;
