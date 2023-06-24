import { SafeAreaView } from "react-native-safe-area-context"

import * as S from "../../../styles/Home"
import { Header } from "../../components"
import { Content } from "../../../styles"

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content>
        <Header page="Proide Bahia" />
        <S.Title>Home</S.Title>
        <S.contentIcon></S.contentIcon>
      </Content>
    </SafeAreaView>
  )
}
