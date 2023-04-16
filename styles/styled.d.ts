import "styled-components"

export type Theme = {
  PRIMARY_COLOR: string
  SECONDARY_COLOR: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Theme
  }
}
