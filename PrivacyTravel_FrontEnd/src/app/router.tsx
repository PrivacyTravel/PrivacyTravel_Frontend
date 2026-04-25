import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import TravelFeedPage from "@/pages/TravelFeedPage";
import TravelDetailPage from "@/pages/TravelDetailPage";
import ProfilePage from "@/pages/ProfilePage";
import PrivacySettingsPage from "@/pages/PrivacySettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "feed", element: <TravelFeedPage /> },
      { path: "travel/:travelId", element: <TravelDetailPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "settings/privacy", element: <PrivacySettingsPage /> },
    ],
  },
]);
