import { useContext, useRef } from "react"
import { Animated, View, TouchableOpacity } from "react-native"
import { useRoute } from "@react-navigation/native"
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
      animationConfigs={{
        velocity: 25,
        damping: 12,
      }}
      style={{
        zIndex: 3,
      }}
      index={-1}
      snapPoints={[1, "80%"]}
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

function MyTabBar({ state, descriptors, navigation, position }) {
  console.log(state)
  return (
    <View key={Math.random()} style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true })
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          })
        }

        const inputRange = state.routes.map((_, i) => i)
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        })

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Animated.Text style={{ opacity }}>{label}</Animated.Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

function TabTopNavigation() {
  const { setNavigationPrayers, state } = useContext(Context)

  return (
    <TopTab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      initialRouteName="shared"
    >
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

function Prayers() {
  const { colors } = useTheme()
  const BottomSheetPrivateRef = useRef<BottomSheet>()
  const BottomSheetSharedRef = useRef<BottomSheet>()
  const route = useRoute()

  return (
    <Content>
      <Header page="Orações" />
      <TabTopNavigation />
      <S.Button
        style={shadow}
        onPress={() => BottomSheetSharedRef?.current?.expand()}
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
  )
}

export default gestureHandlerRootHOC(Prayers)
