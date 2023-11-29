export type TRole = 'Admin' | 'User' | 'Normal'
export type TUser = {
  id: string
  name: string
  role: TRole
  security: string
}
