import { useContext, useState, useRef } from "react"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated"
import { Modalize } from "react-native-modalize"

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import { useTheme } from "styled-components"

import * as S from "../../../../styles/Prayers"
import { shadow } from "../../../../styles"
import { StyleSheet } from "react-native"
import { Context } from "../../../context/dataContext"

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
  const modalizeRef = useRef<Modalize>(null)
  const [toggle, setToggle] = useState(false)
  const { setNavigationVisible } = useContext(Context)
  const { colors } = useTheme()
  const Height = useSharedValue(0)

  const openModal = () => {
    setToggle(true)
    modalizeRef.current?.open()
  }

  const closeModal = () => {
    setToggle(false)
    modalizeRef.current?.close()
  }

  const animatedStyle = useAnimatedStyle(() => ({
    height: Height.value,
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
      {/* <Animated.View style={[style.Modal, animatedStyle]}>
        {toggle && (
          <S.Modal
            style={{
              elevation: 10,
              shadowColor: "#00000094",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 3,
            }}
          >
            <S.TitleModal onPress={() => closeModal()}>
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
      </Animated.View> */}
    </>
  )
}

const style = StyleSheet.create({
  Modal: {
    position: "absolute",
    bottom: 0,
  },
})
