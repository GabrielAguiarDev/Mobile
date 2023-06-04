import { Content } from "../../../styles"
import * as S from "../../../styles/Friends"
import { HeaderSecond } from "../../components"

export default function Friends() {
  return (
    <Content>
      <HeaderSecond page="Meus Amigos" />
      <S.Title>Meus amigos</S.Title>
      <S.Search placeholder="Pesquise por um amigo" />
    </Content>
  )
}
