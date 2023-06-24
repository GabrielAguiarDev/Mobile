import { useContext, useRef } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { Header } from "../../components"
import PrayersPrivate from "./private"
import PrayersShared from "./shared"

import { Content, shadow } from "../../../styles"
import * as S from "../../../styles/Prayers"
import { useTheme } from "styled-components"
import { Context } from "../../context/dataContext"
import { Text } from "react-native"

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

function TypePrayer({ label }) {
  return (
    <S.Options style={shadow}>
      <S.Label>{label}</S.Label>
    </S.Options>
  )
}

function ModalPrayersShared({ bottomRef }) {
  const { colors } = useTheme()

  return (
    <BottomSheet
      ref={bottomRef}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough={true}
          opacity={0.4}
        />
      )}
      animationConfigs={{
        velocity: 25,
        damping: 12,
      }}
      style={{
        zIndex: 3,
      }}
      index={-1}
      snapPoints={[1, "30%"]}
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
        <S.TitleModal onPress={() => bottomRef?.current?.close()}>
          <S.Title>Modal de orações compartilhadas</S.Title>
          <MaterialCommunityIcons
            name="hands-pray"
            size={30}
            color={colors.PRIMARY_COLOR}
          />
        </S.TitleModal>
      </S.Modal>
    </BottomSheet>
  )
}

function ModalPrayersPrivate({ bottomRef }) {
  const { colors } = useTheme()

  return (
    <BottomSheet
      ref={bottomRef}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough={true}
          opacity={0.4}
        />
      )}
      animationConfigs={{
        velocity: 25,
        damping: 12,
      }}
      style={{
        zIndex: 3,
      }}
      index={-1}
      snapPoints={[1, "30%"]}
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
        <S.TitleModal onPress={() => bottomRef?.current?.close()}>
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
    </BottomSheet>
  )
}

function TabTopNavigation() {
  const { colors } = useTheme()
  return (
    <TopTab.Navigator initialRouteName="shared">
      <TopTab.Screen
        name="shared"
        component={PrayersShared}
        options={{
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text
                style={{
                  color: focused ? colors.PRIMARY_COLOR : color,
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Compartilhadas
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
      <TopTab.Screen
        name="private"
        component={PrayersPrivate}
        options={{
          tabBarLabel: ({ color, focused }) => {
            return (
              <Text
                style={{
                  color: focused ? colors.PRIMARY_COLOR : color,
                  fontWeight: "bold",
                  fontFamily: "serif",
                }}
              >
                Privadas
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
    </TopTab.Navigator>
  )
}

function Prayers() {
  const { state } = useContext(Context)
  const { colors } = useTheme()
  const BottomSheetPrivateRef = useRef<BottomSheet>()
  const BottomSheetSharedRef = useRef<BottomSheet>()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content>
        <Header page="Orações" />
        <TabTopNavigation />
        <S.Button
          style={shadow}
          onPress={() => {
            state.NavigationPrayers === "private"
              ? BottomSheetSharedRef?.current?.expand()
              : BottomSheetPrivateRef?.current?.expand()
          }}
        >
          <MaterialCommunityIcons
            name="hands-pray"
            size={30}
            color={colors.BACKGROUND_ICON}
          />
        </S.Button>
        <ModalPrayersPrivate bottomRef={BottomSheetPrivateRef} />
        <ModalPrayersShared bottomRef={BottomSheetSharedRef} />
      </Content>
    </SafeAreaView>
  )
}

export default gestureHandlerRootHOC(Prayers)
