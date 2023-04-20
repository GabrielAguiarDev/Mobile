import { useState } from "react"
import InsetShadow from "react-native-inset-shadow"

import { Header } from "../../components"

import { Content } from "../../../styles"
import * as S from "../../../styles/Bible"
import { StyleSheet } from "react-native"

export default function Bible() {
  const [menuActive, setMenuActive] = useState("old")

  return (
    <Content>
      <Header page="Bíblia" />
      <InsetShadow containerStyle={style.Box}>
        <S.OptionMenu
          active={menuActive === "old" ? true : false}
          onPress={() => setMenuActive("old")}
          style={{
            elevation: menuActive === "old" ? 5 : 0,
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
            elevation: menuActive === "new" ? 5 : 0,
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
      <S.Title>Bible</S.Title>
    </Content>
  )
}

const style = StyleSheet.create({
  Box: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    width: "80%",
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 8,
  },
})
