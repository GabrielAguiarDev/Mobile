import { useState } from "react"
import { Pressable } from "react-native"
import InsetShadow from "react-native-inset-shadow"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated"

import { Header } from "../../components"
import { useTheme } from "styled-components"
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

import * as S from "../../../styles/Prayers"
import { StyleSheet } from "react-native"
import { Content, shadow } from "../../../styles"

function ButtonToggle() {
  const [toggle, setToggle] = useState(false)
  const { colors } = useTheme()
  const Width = useSharedValue(60)
  const Height = useSharedValue(60)
  const Right = useSharedValue(30)
  const borderBottomRightRadius = useSharedValue(60)
  const borderRadius = useSharedValue(60)
  const Background = useSharedValue(colors.PRIMARY_COLOR)

  const openModal = () => {
    setToggle(true)
    Width.value = withTiming(363, { duration: 300 })
    Height.value = withSpring(530, { velocity: 0 })
    Right.value = withTiming(15, { duration: 100 })
    borderBottomRightRadius.value = withTiming(150, { duration: 200 })
    borderRadius.value = withTiming(30, { duration: 200 })
    Background.value = withTiming(colors.TAB_NAVIGATOR, { duration: 500 })
  }

  const closeModal = () => {
    setToggle(false)
    Width.value = withTiming(0, { duration: 200 })
    Height.value = withTiming(0, { duration: 200 })
    Right.value = withTiming(30, { duration: 0 })
    borderBottomRightRadius.value = withTiming(20, { duration: 200 })
    borderRadius.value = withTiming(30, { duration: 200 })
    Background.value = withTiming(colors.PRIMARY_COLOR, { duration: 500 })
  }

  const animatedStyle = useAnimatedStyle(() => ({
    width: Width.value,
    height: Height.value,
    right: Right.value,
    borderRadius: borderRadius.value,
    borderBottomRightRadius: borderBottomRightRadius.value,
    backgroundColor: Background.value,
  }))

  return (
    <>
      <S.Button style={shadow} onPress={toggle ? closeModal : openModal}>
        <Animated.View>
          {toggle ? (
            <Ionicons name="close" size={30} color={colors.BACKGROUND_ICON} />
          ) : (
            <MaterialCommunityIcons
              name="hands-pray"
              size={30}
              color={colors.BACKGROUND_ICON}
            />
          )}
        </Animated.View>
      </S.Button>
      <Animated.View style={[style.Modal, animatedStyle]}>
        {toggle && (
          <S.Modal>
            <S.TitleModal>
              <S.Title>Tipos de orações</S.Title>
              <MaterialCommunityIcons
                name="hands-pray"
                size={30}
                color={colors.PRIMARY_COLOR}
              />
            </S.TitleModal>
            <S.OptionsContent>
              <S.Options style={shadow}>
                <S.Label>Crescimento Espiritual</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Relacionamentos</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Cura</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Família</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Paz</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Gratidão</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Perdão</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Luto</S.Label>
              </S.Options>
              <S.Options style={shadow}>
                <S.Label>Sabedoria</S.Label>
              </S.Options>
            </S.OptionsContent>
          </S.Modal>
        )}
      </Animated.View>
    </>
  )
}

export default function Targets() {
  const [prayersPrivate, setPrayersPrivate] = useState(false)

  return (
    <Content>
      <Header page="Orações" />
      <InsetShadow containerStyle={style.Box}>
        <S.Prayers
          prayer={!prayersPrivate}
          onPress={() => setPrayersPrivate(true)}
          style={prayersPrivate ? shadow : {}}
        >
          <S.Type prayer={prayersPrivate}>Particular</S.Type>
        </S.Prayers>
        <S.Prayers
          prayer={!prayersPrivate}
          onPress={() => setPrayersPrivate(false)}
          style={!prayersPrivate ? shadow : {}}
        >
          <S.Type prayer={!prayersPrivate}>Compartilhado</S.Type>
        </S.Prayers>
      </InsetShadow>
      <S.PrayersContent>
        {prayersPrivate ? (
          <S.TextEmpty>Sua Sala de Oração Pessoal</S.TextEmpty>
        ) : (
          <S.TextEmpty>Orações Compartilhadas</S.TextEmpty>
        )}
      </S.PrayersContent>
      <S.ContentModal>
        <ButtonToggle />
      </S.ContentModal>
    </Content>
  )
}

const style = StyleSheet.create({
  Box: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "flex-start",
    width: "65%",
    height: 50,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 5,
    borderRadius: 8,
  },
  Modal: {
    position: "absolute",
    bottom: 120,
    width: 0,
    height: 0,
    zIndex: -1,
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#000000a4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
})
