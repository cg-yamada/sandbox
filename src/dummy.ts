import type { Comic } from "./app/features/comic/types"

export const items = [
  { id: "1", title: "投稿物Title", createrName: "投稿者名称", image: "images/500x300.png" },
  { id: "2", title: "投稿物Title", createrName: "投稿者名称", image: "images/500x300.png" },
  { id: "3", title: "投稿物Title", createrName: "投稿者名称", image: "images/300x600.png" },
  { id: "4", title: "投稿物Title", createrName: "投稿者名称", image: "images/300x600.png" },
]

export const dummyComics: Comic[] = [
  {
    id: "1",
    title: "投稿物Title01",
    creator: "投稿者名称01",
    thumbnail: "images/500x300.png",
    nftImage: "images/nft.png",
    views: 5,
    likes: 24,
    receivedPOL: 12,
    isPublic: true,
    tags: ["冒険", "アドベンチャー", "アニメ"],
  },
  {
    id: "2",
    title: "投稿物Title02",
    creator: "投稿者名称02",
    thumbnail: "images/500x300.png",
    nftImage: "images/nft.png",
    views: 20,
    likes: 4,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
  {
    id: "3",
    title: "投稿物Title03",
    creator: "投稿者名称03",
    thumbnail: "images/500x300.png",
    nftImage: "images/nft.png",
    views: 30,
    likes: 300,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
  {
    id: "4",
    title: "投稿物Title04",
    creator: "投稿者名称04",
    thumbnail: "images/500x300.png",
    nftImage: "images/nft.png",
    views: 30,
    likes: 300,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
  {
    id: "5",
    title: "投稿物Title05",
    creator: "投稿者名称05",
    thumbnail: "images/500x300.png",
    nftImage: "images/nft.png",
    views: 50,
    likes: 5,
    receivedPOL: 31,
    isPublic: false,
    tags: ["冒険", "アニメ"],
  },
]
