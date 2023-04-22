import * as S from "../../../styles/Home"
import { Header } from "../../components"
import { Content } from "../../../styles"
import IconLivetsx from "../../../assets/svg/live"
import { useTheme } from "styled-components"
import IconLive from "../../../assets/svg/live"

import SVG from "../../../assets/svg"

export default function Home() {
  const { colors } = useTheme()
  return (
    <Content>
      <Header page="Proide Bahia" />
      <S.Title>Home</S.Title>
      <S.contentIcon>
        <SVG icon={IconLive} color={colors.ICON_LIVE} />
      </S.contentIcon>
    </Content>
  )
}
