import { MaterialIcons } from "@expo/vector-icons"

export interface IPage {
  page: string
  info?: string
  size?: number
  icon?: keyof typeof MaterialIcons.glyphMap
  iconFunction?: () => void
}
