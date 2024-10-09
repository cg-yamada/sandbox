export const APP_TITLE = "sptv-poc"

export const Paths = {
  /** ホーム（タイムライン表示） */
  CONTENTS: "/contents",
  /** 作品投稿 */
  CONTENT_CREATE: "/contents/create",
  /** クリエイター作品一覧 */
  CREATOR_CONTENTS: "/creators/:id",
  /** 投稿実績 */
  CREATORS_ACHIVEMENTS: "/creators/achivements",
  /** TokenGraph */
  TOKEN_GRAPH: "/token-graph",
  /** 応援実績（視聴者の行動履歴や達成状況） */
  USERS_ACTIVITIES: "/users/activities",
  /** 実績確認 */
  ADMIN: "/admin",
} as const

export const Images = {
  NOT_FOUND: "/images/not-found.png",
} as const

export const Errors = {
  REQUIRED: "入力必須項目です",
  REQUIRED_SELECT: "選択必須項目です",
  REQUIRED_CHECK: "確認してチェックしてください",
  INVALID_TYPE: "入力した値の形式が間違ってます",
  INVALID_EMAIL_TYPE: "メールアドレスの形式が間違ってます",
  INVALID_NUMBER_TYPE: "数値で入力してください",
  INVALID_PASSWORD_TYPE: "パスワードは8文字以上の半角英数字・記号で入力してください",
  INVALID_MATCH_PASSWORD: "パスワードが一致していません",
  MIN_LENGTH_8: "8文字以上で入力してください",
} as const
