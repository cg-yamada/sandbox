export interface Comic {
  id: string
  /** サムネイル画像 */
  image: string
  /** タイトル */
  title: string
  /** タグ */
  tag: string
  /** 視聴回数 */
  views: number
  /** いいね数 */
  likes: number
  /** 投げ銭で得た額 */
  receivedPOL: number
  /** 公開中かどうか */
  isPublic: boolean
}
