import { useRef } from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Modalize } from "react-native-modalize"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { Header } from "../../components"
import PrayersPrivate from "./private"
import PrayersShared from "./shared"

import { Content, shadow } from "../../../styles"
import * as S from "../../../styles/Prayers"
import { useTheme } from "styled-components"

const TopTab = createMaterialTopTabNavigator()

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

function TabTopNavigation() {
  return (
    <TopTab.Navigator initialRouteName="shared">
      <TopTab.Screen
        name="shared"
        component={PrayersShared}
        options={{ tabBarLabel: "Compartilhadas" }}
      />
      <TopTab.Screen
        name="private"
        component={PrayersPrivate}
        options={{
          tabBarLabel: "Privadas",
        }}
      />
    </TopTab.Navigator>
  )
}

function TypePrayer({ label }) {
  return (
    <S.Options style={shadow}>
      <S.Label>{label}</S.Label>
    </S.Options>
  )
}

export default function Prayers() {
  const modalizeRef = useRef<Modalize>(null)
  const { colors } = useTheme()

  const openModal = () => {
    modalizeRef.current?.open()
  }

  const closeModal = () => {
    modalizeRef.current?.close()
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Content>
        <Header page="Orações" />
        <TabTopNavigation />
        <S.Button onPress={() => openModal()}>
          <MaterialCommunityIcons
            name="hands-pray"
            size={30}
            color={colors.BACKGROUND_ICON}
          />
        </S.Button>
      </Content>
      <Modalize
        ref={modalizeRef}
        modalHeight={700}
        snapPoint={500}
        modalStyle={{ backgroundColor: colors.SECONDARY_COLOR }}
      >
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
      </Modalize>
    </GestureHandlerRootView>
  )
}
