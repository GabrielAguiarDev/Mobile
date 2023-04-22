import { Content } from "../../../styles"
import { Header } from "../../components"

import * as S from "../../../styles/Videos"

export default function Videos() {
  return (
    <Content>
      <Header page="Videos" />
      <S.ContentLive>
        <S.BannerVideo></S.BannerVideo>
        <S.ContentInfo>
          <S.Logo></S.Logo>
          <S.Info>Descrição do video</S.Info>
        </S.ContentInfo>
      </S.ContentLive>
    </Content>
  )
}
