import "styled-components"

export type Theme = {
  PRIMARY_COLOR: string
  SECONDARY_COLOR: string
  BACKGROUND: string
  TAB_NAVIGATOR: string
  BACKGROUND_ICON: string
  ICON_LIVE: string
  BACKGROUND_HEADER: string
  BACKGROUND_CARDS: string
  BACKGROUND_CARDS2: string
  CONTENT_CARD2: string
  UNREADMESSAGE: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Theme
  }
}
