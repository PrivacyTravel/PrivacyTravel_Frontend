import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";
import HomePage from "@/pages/HomePage";
import SearchPage from "@/pages/SearchPage";
import TripPlannerPage from "@/pages/TripPlannerPage";
import TripResultPage from "@/pages/TripResultPage";
import BoardListPage from "@/pages/BoardListPage";
import BoardDetailPage from "@/pages/BoardDetailPage";
import BoardCreatePage from "@/pages/BoardCreatePage";
import SafetyDashboardPage from "@/pages/SafetyDashboardPage";
import MyPage from "@/pages/MyPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "planner", element: <TripPlannerPage /> },
      { path: "trip/:tripId", element: <TripResultPage /> },
      { path: "board", element: <BoardListPage /> },
      { path: "board/create", element: <BoardCreatePage /> },
      { path: "board/:postId", element: <BoardDetailPage /> },
      { path: "safety", element: <SafetyDashboardPage /> },
      { path: "mypage", element: <MyPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
