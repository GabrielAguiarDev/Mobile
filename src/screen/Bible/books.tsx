import { ScrollView } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { propsStack } from "../../routes/Stack/Models"

import * as S from "../../../styles/Bible"
import { shadow } from "../../../styles"

const BooksBible = [
  { name: "Mateus" },
  { name: "Marcos" },
  { name: "Lucas" },
  { name: "João" },
  { name: "Atos" },
  { name: "Romanos" },
  { name: "1 Coríntios" },
  { name: "2 Coríntios" },
  { name: "Gálatas" },
  { name: "Efésios" },
  { name: "Felipenses" },
  { name: "Colossenses" },
  { name: "1 Tessalonicenses" },
  { name: "2 Tessalonicenses" },
  { name: "1 Timóteo" },
  { name: "2 Timóteo" },
  { name: "Tito" },
  { name: "Filemon" },
  { name: "Hebreus" },
  { name: "Tiago" },
  { name: "1 Pedro" },
  { name: "2 Pedro" },
  { name: "1 João" },
  { name: "2 João" },
  { name: "Judas" },
  { name: "Apocalipse" },
]

export default function Books() {
  const navigation = useNavigation<propsStack>()
  return (
    <S.ContentScreen>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 90,
        }}
      >
        {BooksBible.map((b, i) => (
          <S.ContentVerse
            onPress={() => navigation.navigate("chapters", { book: b.name })}
            key={i}
            style={[shadow]}
          >
            <S.Verse>{b.name}</S.Verse>
          </S.ContentVerse>
        ))}
      </ScrollView>
    </S.ContentScreen>
  )
}
