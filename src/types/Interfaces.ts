export interface IUser {
  id?: string
  name?: string
  email?: string
  genre?: string
  typeUser?: string
  birthday?: string
  dateRegister?: string
  photo?: string
}

export interface ITask {
  idTask?: string
  title?: string
  description?: string
  author?: string
  responsibility?: object | string
  idAuthor?: string
  creationDate?: string
  date?: string
  confirmations?: object
}

export interface propsTask {
  data: ITask
  setModalVisible?: (data: boolean) => void
  fetch?: () => void
  onLongPress?: () => void
  onPressOut?: () => void
  delayLongPress?: number
  confirmation?: boolean
}

export interface propsAdmin {
  users: IUser
  update: (id: number) => void
}

export interface IInput {
  placeholder?: string
  state: string
  setState: (data: string) => void
}
