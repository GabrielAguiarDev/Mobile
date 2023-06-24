import { Text, ScrollView, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { propsStack } from "../../routes/Stack/Models"

import * as S from "../../../styles/Bible"
import { shadow } from "../../../styles"
import { useTheme } from "styled-components"

export default function Verses({ route }) {
  const navigation = useNavigation<propsStack>()
  const { colors } = useTheme()

  // Dados para teste
  let dataTest = []
  for (let n = 1; n <= 40; n++) {
    dataTest.push(n)
  }

  return (
    <S.ContentScreen>
      <S.Chapters style={{ justifyContent: "space-between" }}>
        <View style={S.styleSheet.capSelected}>
          <S.VerseSelected style={S.styleSheet.label}>Livro: </S.VerseSelected>
          <S.VerseSelected style={S.styleSheet.title}>
            {route.params?.book}
          </S.VerseSelected>
        </View>
        <View style={S.styleSheet.capSelected}>
          <S.VerseSelected style={S.styleSheet.label}>
            capítulo:
          </S.VerseSelected>
          <S.VerseSelected style={S.styleSheet.title}>
            {route.params?.chapters < 10
              ? `0${route.params?.chapters}`
              : route.params?.chapters}
          </S.VerseSelected>
        </View>
      </S.Chapters>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 90,
        }}
      >
        <S.ContainerChapters>
          {dataTest.map((chapters, i) => (
            <S.BoxChapters
              onPress={() =>
                navigation.navigate("Reading", {
                  book: route.params?.book,
                  chapters: route.params?.chapters,
                })
              }
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
