export type User = {
  id?: number
  name?: string
  nickName?: string
  email?: string
  password?: string
  token?: string
  token_expire?: string
}

export type Task = {
  id?: number
  title: string
  description: string
  status: string
  limit_date: string
  creator_user_id: number
}