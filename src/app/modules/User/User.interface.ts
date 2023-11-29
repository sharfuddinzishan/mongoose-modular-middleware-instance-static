export type TRole = 'Admin' | 'User' | 'Normal'
export type TUser = {
  id: number
  name: string
  role: TRole
  security?: string
}
