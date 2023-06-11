import { Text, ScrollView } from "react-native"

import * as S from "../../../styles/Bible"
import { shadow } from "../../../styles"
import { useTheme } from "styled-components"
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../routes/Stack/Models"

export default function Chapters({ route }) {
  const navigation = useNavigation<propsStack>()
  const { colors } = useTheme()

  // Dados para teste
  let dataTest = []
  for (let n = 1; n <= 50; n++) {
    dataTest.push(n)
  }

  return (
    <S.ContentScreen>
      <S.Chapters>{route.params?.book}</S.Chapters>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 90,
        }}
      >
        <S.ContainerChapters>
          {dataTest.map((chapters, i) => (
            <S.BoxChapters
              onPress={() => navigation.navigate("verses", { chapters })}
              key={i}
              style={[shadow]}
            >
              <Text
                style={[S.styleSheet.chapters, { color: colors.PRIMARY_COLOR }]}
              >
                {chapters}
              </Text>
            </S.BoxChapters>
          ))}
        </S.ContainerChapters>
      </ScrollView>
    </S.ContentScreen>
  )
}
