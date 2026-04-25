import { touristSpots, type TouristSpot } from "@/data/mockData";

const SELECTED_SPOT_KEY = "safe-trip-selected-spots";

export const saveSelectedSpotIds = (ids: number[]) => {
  localStorage.setItem(SELECTED_SPOT_KEY, JSON.stringify(ids));
};

export const getSelectedSpotIds = (): number[] => {
  const raw = localStorage.getItem(SELECTED_SPOT_KEY);

  if (!raw) return [];

  return JSON.parse(raw) as number[];
};

export const getSelectedSpots = (): TouristSpot[] => {
  const ids = getSelectedSpotIds();

  return touristSpots.filter((spot) => ids.includes(spot.id));
};
