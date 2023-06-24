import { MaterialIcons } from "@expo/vector-icons"

export interface IPage {
  page: string
  info?: string
  size?: number
  icon?: keyof typeof MaterialIcons.glyphMap
  iconFunction?: () => void
}

export interface IVideo {
  title: string
  channel: string
  link: string | null
}

export type ParamListReading = {
  reading: {
    book: string
    chapters: number
  }
}
