export interface Content {
  id: string
  /** サムネイル画像 */
  thumbnail: string
  /** タイトル */
  title: string
  /** タグ */
  tags: string[]
  /** 視聴回数 */
  views: number
  /** いいね数 */
  likes: number
  /** 投げ銭で得た額 */
  receivedPOL: number
  /** 公開中かどうか */
  isPublic: boolean
  /** クリエイター名 */
  creator: string
  /** NFT画像 */
  nftImage: string
}
