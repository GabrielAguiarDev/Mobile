import { useState } from "react"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated"

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import { useTheme } from "styled-components"

import * as S from "../../../../styles/Prayers"
import { shadow } from "../../../../styles"
import { StyleSheet } from "react-native"

const options = [
  { label: "Crescimento Espiritual" },
  { label: "Relacionamentos" },
  { label: "Cura" },
  { label: "Família" },
  { label: "Paz" },
  { label: "Gratidão" },
  { label: "Perdão" },
  { label: "Luto" },
  { label: "Sabedoria" },
]

function TypePrayer({ label }) {
  return (
    <S.Options style={shadow}>
      <S.Label>{label}</S.Label>
    </S.Options>
  )
}

export default function ButtonFab() {
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
              {options.map((p, i) => (
                <TypePrayer key={i} label={p.label} />
              ))}
            </S.OptionsContent>
          </S.Modal>
        )}
      </Animated.View>
    </>
  )
}

const style = StyleSheet.create({
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
