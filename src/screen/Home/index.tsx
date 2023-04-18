import { SafeAreaView } from "react-native"
import * as S from "../../../styles/Home"
import { Header } from "../../components"

export default function Home() {
  return (
    <S.Content>
      <Header />
      <S.Title>Home</S.Title>
    </S.Content>
  )
}
