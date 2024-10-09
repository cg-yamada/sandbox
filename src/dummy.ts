import type { Content } from "./features/content/types"

const dummyUser01Contents: Content[] = [
  ...[...Array(8)].map((_, i) => ({
    id: String(i + 1),
    title: `投稿物タイトル0${String(i + 1)}`,
    creator: "投稿者名01",
    thumbnail: "/images/500x300.png",
    nftImage: "/images/nft.png",
    views: 50,
    likes: 5,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  })),
]

export const dummyContents: Content[] = [
  ...dummyUser01Contents,
  {
    id: "9",
    title: "投稿物タイトル09",
    creator: "投稿者名02",
    thumbnail: "/images/500x300.png",
    nftImage: "/images/nft.png",
    views: 20,
    likes: 4,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
  {
    id: "10",
    title: "投稿物タイトル10",
    creator: "投稿者名03",
    thumbnail: "/images/500x300.png",
    nftImage: "/images/nft.png",
    views: 30,
    likes: 300,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
  {
    id: "11",
    title: "投稿物タイトル11",
    creator: "投稿者名04",
    thumbnail: "/images/500x300.png",
    nftImage: "/images/nft.png",
    views: 30,
    likes: 300,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
  {
    id: "12",
    title: "投稿物タイトル12",
    creator: "投稿者名05",
    thumbnail: "/images/500x300.png",
    nftImage: "/images/nft.png",
    views: 50,
    likes: 5,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
]

export const dummyHistories = [
  { itemId: "1", itemImage: "/images/activity.png", createdAt: "10/09 12:03", content: "100いいねをしました！" },
  { itemId: "6", itemImage: "/images/activity.png", createdAt: "10/09 16:03", content: "500いいねをしました！" },
  { itemId: "2", itemImage: "/images/activity.png", createdAt: "10/10 12:02", content: "あなたが応援した〜が〜を達成しました！" },
  { itemId: "2", itemImage: "/images/activity.png", createdAt: "10/11 12:01", content: "達成NFTを獲得しました！" },
  { itemId: "5", itemImage: "/images/activity.png", createdAt: "12/01 12:03", content: "NFTを獲得しました！" },
  { itemId: "3", itemImage: "/images/activity.png", createdAt: "12/05 12:03", content: "NFTを獲得しました！" },
  { itemId: "4", itemImage: "/images/activity.png", createdAt: "12/29 12:03", content: "NFTを獲得しました！" },
]
