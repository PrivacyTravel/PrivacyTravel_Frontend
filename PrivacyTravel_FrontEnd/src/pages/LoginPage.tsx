import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Shield className="h-9 w-9 text-primary" />
          </div>

          <h1 className="text-3xl font-bold">SafeTrip 로그인</h1>
          <p className="mt-2 text-muted-foreground">안전한 여행 기록을 시작하세요.</p>
        </div>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="이메일"
            className="w-full rounded-2xl border border-border px-4 py-3 outline-none focus:border-primary"
          />

          <input
            type="password"
            placeholder="비밀번호"
            className="w-full rounded-2xl border border-border px-4 py-3 outline-none focus:border-primary"
          />

          <button
            type="button"
            className="w-full rounded-2xl bg-primary py-4 font-semibold text-primary-foreground"
          >
            로그인
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          계정이 없나요?{" "}
          <Link to="/signup" className="font-semibold text-primary">
            회원가입
          </Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
