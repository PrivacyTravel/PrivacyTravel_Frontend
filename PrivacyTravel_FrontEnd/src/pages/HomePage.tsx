import { Clock, Eye, MapPin, Shield } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <section className="relative flex h-screen items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1769276294988-716bcbf3fd9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
            alt="Scenic ocean and mountains"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-2">
              <Shield className="h-10 w-10 text-primary" />
              <span className="text-2xl font-semibold text-white">SafeTrip</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              여행의 자유,
              <br />
              개인정보는 보호
            </h1>

            <p className="mb-8 text-xl text-white/90">
              실시간 공유 없이 안전하게 여행을 기록하고, 여행 후 자동으로 공유하는 프라이버시 중심
              여행 SNS
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/search"
                className="rounded-2xl bg-accent px-8 py-4 font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                여행지 탐색하기
              </Link>

              <Link
                to="/planner"
                className="rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                일정 만들기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-bold">안전한 여행 기록의 새로운 방식</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Clock className="h-7 w-7 text-primary" />}
              iconBg="bg-primary/10"
              title="Ghost Post"
              description="여행 중 작성한 게시물은 실시간으로 공개되지 않고, 여행 종료 후 자동으로 공유됩니다."
            />

            <FeatureCard
              icon={<MapPin className="h-7 w-7 text-secondary" />}
              iconBg="bg-secondary/10"
              title="Geo Obfuscation"
              description="위치 정보는 상세 주소가 아닌 범위 단위로 자동 변환되어 안전하게 보호됩니다."
            />

            <FeatureCard
              icon={<Eye className="h-7 w-7 text-accent" />}
              iconBg="bg-accent/10"
              title="Privacy Filter"
              description="AI가 위험한 문장을 감지하고, 이미지에 감정 기반 필터를 적용하여 장소 식별을 방지합니다."
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Smart Trip Planner</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              관광지 간 이동 거리와 시간을 고려하여 하루 단위의 최적 여행 일정을 자동으로
              생성합니다. 생성된 일정은 지도 위에서 경로로 시각화되며, 언제든지 수정할 수 있습니다.
            </p>

            <Link
              to="/planner"
              className="inline-block rounded-2xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              일정 만들기
            </Link>
          </div>

          <div className="flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 p-12">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-24 w-24 text-primary" />
              <p className="text-xl font-semibold">지도 기반 일정 관리</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground px-6 py-12 text-background">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-semibold">SafeTrip</span>
          </div>
          <p className="text-sm opacity-80">프라이버시 중심 여행 SNS</p>
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, iconBg, title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl">
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg}`}>
        {icon}
      </div>

      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>

      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default HomePage;
