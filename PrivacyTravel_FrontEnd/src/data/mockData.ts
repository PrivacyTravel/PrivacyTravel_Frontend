export interface ShortReview {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface TouristSpot {
  id: number;
  name: string;
  location: string;
  category: string;
  rating: number;
  image: string;
  policeDistance: number;
  hospitalDistance: number;

  description: string;
  phone: string;
  openTime: string;
  hospitalName: string;
  policeName: string;
  shortReviews: ShortReview[];
}

export const touristSpots: TouristSpot[] = [
  {
    id: 1,
    name: "남산서울타워",
    location: "서울 용산구",
    category: "랜드마크",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1756362845828-5d887a940402?w=1200",
    policeDistance: 2,
    hospitalDistance: 1,
    description:
      "서울을 대표하는 랜드마크로, 정상에서 서울 도심과 야경을 한눈에 볼 수 있는 인기 관광지입니다. 연인, 가족, 친구 단위 여행객 모두에게 적합하며 야간 방문 만족도가 높습니다.",
    phone: "02-3455-9277",
    openTime: "10:00 - 23:00",
    hospitalName: "순천향대학교 서울병원",
    policeName: "용산경찰서",
    shortReviews: [
      {
        id: 1,
        author: "여행러버",
        rating: 5,
        comment: "야경이 정말 좋고 사진 찍기 좋았어요.",
        date: "2026-04-10",
      },
      {
        id: 2,
        author: "서울탐방러",
        rating: 4,
        comment: "사람은 많지만 한 번쯤 가볼 만합니다.",
        date: "2026-04-08",
      },
      {
        id: 3,
        author: "야경수집가",
        rating: 5,
        comment: "저녁 시간대 방문을 추천합니다.",
        date: "2026-04-03",
      },
    ],
  },
  {
    id: 2,
    name: "경복궁",
    location: "서울 종로구",
    category: "문화재",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1756364896901-b2be07f9bebc?w=1200",
    policeDistance: 3,
    hospitalDistance: 2,
    description:
      "조선 시대의 대표 궁궐로 한국 전통 건축과 역사를 함께 경험할 수 있는 관광지입니다. 한복 체험, 궁궐 산책, 사진 촬영 장소로 인기가 높습니다.",
    phone: "02-3700-3900",
    openTime: "09:00 - 18:00",
    hospitalName: "서울대학교병원",
    policeName: "종로경찰서",
    shortReviews: [
      {
        id: 1,
        author: "궁투어",
        rating: 5,
        comment: "한복 입고 방문하니 분위기가 훨씬 좋았습니다.",
        date: "2026-04-11",
      },
      {
        id: 2,
        author: "역사러버",
        rating: 5,
        comment: "해설 프로그램이 있으면 더 재밌게 볼 수 있어요.",
        date: "2026-04-06",
      },
      {
        id: 3,
        author: "사진여행자",
        rating: 4,
        comment: "오전 시간대가 덜 붐벼서 좋았습니다.",
        date: "2026-04-01",
      },
    ],
  },
  {
    id: 3,
    name: "명동 거리",
    location: "서울 중구",
    category: "상권",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1764639234298-ee4870814d96?w=1200",
    policeDistance: 1,
    hospitalDistance: 2,
    description:
      "쇼핑, 길거리 음식, 카페, 뷰티 매장이 밀집한 서울의 대표 상권입니다. 관광객 유동 인구가 많아 활기찬 분위기를 느낄 수 있습니다.",
    phone: "02-120",
    openTime: "상시 이용 가능",
    hospitalName: "국립중앙의료원",
    policeName: "명동파출소",
    shortReviews: [
      {
        id: 1,
        author: "쇼핑러",
        rating: 4,
        comment: "먹거리와 쇼핑을 한 번에 즐기기 좋았습니다.",
        date: "2026-04-09",
      },
      {
        id: 2,
        author: "길거리음식러버",
        rating: 5,
        comment: "저녁에 가면 분위기가 더 살아납니다.",
        date: "2026-04-05",
      },
      {
        id: 3,
        author: "서울초보",
        rating: 4,
        comment: "사람이 많아서 동선은 미리 정하는 게 좋아요.",
        date: "2026-03-29",
      },
    ],
  },
  {
    id: 4,
    name: "북촌 한옥마을",
    location: "서울 종로구",
    category: "문화",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1771453533618-9cbc63b9b838?w=1200",
    policeDistance: 1,
    hospitalDistance: 1,
    description:
      "전통 한옥이 모여 있는 서울의 대표 산책 코스입니다. 조용한 골목길과 전통 건축을 감상할 수 있으며, 주민 생활 공간이 함께 있는 만큼 조용한 관람이 필요합니다.",
    phone: "02-2148-4161",
    openTime: "10:00 - 17:00",
    hospitalName: "서울대학교병원",
    policeName: "종로경찰서",
    shortReviews: [
      {
        id: 1,
        author: "골목여행자",
        rating: 5,
        comment: "조용히 걷기 좋고 사진도 예쁘게 나옵니다.",
        date: "2026-04-07",
      },
      {
        id: 2,
        author: "전통문화러버",
        rating: 4,
        comment: "관광지이지만 실제 거주지도 있어서 조심히 다녀야 해요.",
        date: "2026-04-02",
      },
      {
        id: 3,
        author: "산책러",
        rating: 4,
        comment: "경복궁이랑 같이 묶어서 가기 좋았습니다.",
        date: "2026-03-30",
      },
    ],
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
