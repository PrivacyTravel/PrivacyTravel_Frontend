import { Calendar, MapPin, MessageSquare, Shield, User } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { to: "/search", label: "여행지 검색", icon: MapPin },
  { to: "/planner", label: "일정 만들기", icon: Calendar },
  { to: "/board", label: "여행 후기", icon: MessageSquare },
  { to: "/safety", label: "안전 대시보드", icon: Shield },
];

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-[#FFF6CC] text-[#111827]">
      <header className="sticky top-0 z-50 border-b border-[#E5E0C8] bg-white">
        <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <Shield className="h-5 w-5 text-[#70B5E0]" />
            SafeTrip
          </Link>

          <nav className="hidden items-center gap-5 text-sm md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1.5 rounded-md px-2 py-1 ${
                    active ? "border border-black" : ""
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/mypage"
            className="flex items-center gap-1.5 rounded-full bg-[#70B5E0] px-4 py-2 text-sm font-bold text-white"
          >
            <User className="h-4 w-4" />
            마이페이지
          </Link>
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default AppLayout;
