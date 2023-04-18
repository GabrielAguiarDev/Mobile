import { useState } from "react"
import InsetShadow from "react-native-inset-shadow"

import { Header } from "../../components"
import { useTheme } from "styled-components"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import * as S from "../../../styles/Prayers"
import { StyleSheet } from "react-native"
import { Content } from "../../../styles"

interface IButton {
  setOpen: (data: boolean) => void
}

function ButtonToggle({ setOpen }: IButton) {
  const { colors } = useTheme()

  return (
    <S.ButtonContent
      onPress={() => setOpen(true)}
      style={{
        elevation: 10,
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
      }}
    >
      <MaterialCommunityIcons
        name="hands-pray"
        size={30}
        color={colors.BACKGROUND_ICON}
      />
    </S.ButtonContent>
  )
}

function ModalPrayer({ setOpen }: IButton) {
  return (
    <S.ContentModal>
      <S.ContentTest onPress={() => setOpen(false)}>
        <S.Test>Fechar Modal</S.Test>
      </S.ContentTest>
    </S.ContentModal>
  )
}

export default function Targets() {
  const [prayersPrivate, setPrayersPrivate] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  return (
    <Content>
      <Header page="Orações" />
      <InsetShadow containerStyle={style.Box}>
        <S.Prayers
          prayer={!prayersPrivate}
          onPress={() => setPrayersPrivate(true)}
          style={{
            elevation: prayersPrivate ? 5 : 0,
            shadowColor: "#000000d1",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
          }}
        >
          <S.Type prayer={prayersPrivate}>Particular</S.Type>
        </S.Prayers>
        <S.Prayers
          prayer={!prayersPrivate}
          onPress={() => setPrayersPrivate(false)}
          style={{
            elevation: prayersPrivate ? 0 : 5,
            shadowColor: "#000000d1",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
          }}
        >
          <S.Type prayer={!prayersPrivate}>Compartilhado</S.Type>
        </S.Prayers>
      </InsetShadow>
      <ButtonToggle setOpen={setOpenModal} />
      {openModal && <ModalPrayer setOpen={setOpenModal} />}
    </Content>
  )
}

const style = StyleSheet.create({
  Box: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "65%",
    height: 60,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 5,
    borderRadius: 8,
  },
})
