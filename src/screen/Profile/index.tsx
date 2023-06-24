import { SafeAreaView } from "react-native-safe-area-context"

import { Content } from "../../../styles"
import * as S from "../../../styles/Profile"

export default function Profile() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content>
        <S.Title>Profile</S.Title>
      </Content>
    </SafeAreaView>
  )
}
