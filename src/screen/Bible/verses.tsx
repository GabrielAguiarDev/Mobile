import { Text } from "react-native"

import * as S from "../../../styles/Bible"

export default function Verses({ route }) {
  return (
    <S.ContentScreen>
      <Text>{route.params?.chapters}</Text>
    </S.ContentScreen>
  )
}
