import { useState } from "react"
import InsetShadow from "react-native-inset-shadow"

import { Header } from "../../components"

import { Content } from "../../../styles"
import * as S from "../../../styles/Bible"
import { StyleSheet } from "react-native"
import { ScrollView } from "react-native"

const Books = [
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

export default function Bible() {
  const [menuActive, setMenuActive] = useState("old")

  return (
    <Content>
      <Header page="Bíblia" info="NVT" />
      <InsetShadow containerStyle={style.Box}>
        <S.OptionMenu
          active={menuActive === "old" ? true : false}
          onPress={() => setMenuActive("old")}
          style={{
            elevation: menuActive === "old" ? 3 : 0,
            shadowColor: "#000000d1",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
          }}
        >
          <S.Label active={menuActive === "old" ? true : false}>
            Antigo Testamento
          </S.Label>
        </S.OptionMenu>
        <S.OptionMenu
          active={menuActive === "new" ? true : false}
          onPress={() => setMenuActive("new")}
          style={{
            elevation: menuActive === "new" ? 3 : 0,
            shadowColor: "#000000d1",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
          }}
        >
          <S.Label active={menuActive === "new" ? true : false}>
            Novo Testamento
          </S.Label>
        </S.OptionMenu>
      </InsetShadow>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
        }}
      >
        {menuActive === "new" &&
          Books.map((b, i) => (
            <S.ContentVerse
              key={i}
              style={{
                elevation: 3,
                shadowColor: "#000000d1",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 5,
              }}
            >
              <S.Verse>{b.name}</S.Verse>
            </S.ContentVerse>
          ))}
      </ScrollView>
    </Content>
  )
}

const style = StyleSheet.create({
  Box: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
    alignItems: "center",
    alignSelf: "flex-start",
    height: 50,
    width: "80%",
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
})
