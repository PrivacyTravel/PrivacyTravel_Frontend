export interface TouristSpot {
  id: number;
  name: string;
  location: string;
  category: string;
  rating: number;
  image: string;
  policeDistance: number;
  hospitalDistance: number;
}

export const touristSpots: TouristSpot[] = [
  {
    id: 1,
    name: "남산서울타워",
    location: "서울 용산구",
    category: "랜드마크",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1756362845828-5d887a940402?w=600",
    policeDistance: 2,
    hospitalDistance: 1,
  },
  {
    id: 2,
    name: "경복궁",
    location: "서울 종로구",
    category: "문화재",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1756364896901-b2be07f9bebc?w=600",
    policeDistance: 3,
    hospitalDistance: 2,
  },
  {
    id: 3,
    name: "명동 거리",
    location: "서울 중구",
    category: "상권",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1764639234298-ee4870814d96?w=600",
    policeDistance: 1,
    hospitalDistance: 2,
  },
  {
    id: 4,
    name: "북촌 한옥마을",
    location: "서울 종로구",
    category: "문화",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1771453533618-9cbc63b9b838?w=600",
    policeDistance: 1,
    hospitalDistance: 1,
  },
];

export interface BoardPost {
  id: number;
  title: string;
  author: string;
  date: string;
  region: string;
  image: string;
  content: string;
  likes: number;
  views: number;
  comments: number;
  isMine: boolean;
  status: "reserved" | "published";
}

export const boardPosts: BoardPost[] = [
  {
    id: 1,
    title: "제주도 한 달 살기 후기",
    author: "여행러버",
    date: "2026-04-10",
    region: "제주",
    image: "https://images.unsplash.com/photo-1771453533618-9cbc63b9b838?w=800",
    content:
      "한 달간 제주에서 살면서 정말 많은 것을 느꼈습니다. 한라산 등반은 잊을 수 없는 추억이었고, 현지인들의 따뜻한 환대는 더욱 특별한 경험이 되었습니다.",
    likes: 124,
    views: 1523,
    comments: 28,
    isMine: true,
    status: "published",
  },
  {
    id: 2,
    title: "부산 2박 3일 완벽 코스",
    author: "부산댁",
    date: "2026-04-08",
    region: "부산",
    image: "https://images.unsplash.com/photo-1764639234298-ee4870814d96?w=800",
    content: "부산의 숨은 맛집과 관광지를 모두 다녀온 후기입니다.",
    likes: 89,
    views: 987,
    comments: 15,
    isMine: false,
    status: "published",
  },
  {
    id: 3,
    title: "남산타워에서 본 야경",
    author: "여행러버",
    date: "2026-05-04",
    region: "서울",
    image: "https://images.unsplash.com/photo-1756362845828-5d887a940402?w=800",
    content: "서울 야경을 안전하게 기록했습니다.",
    likes: 32,
    views: 410,
    comments: 4,
    isMine: true,
    status: "reserved",
  },
];
