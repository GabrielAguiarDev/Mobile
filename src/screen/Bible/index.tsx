import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Header } from "../../components"

import { Content } from "../../../styles"
import { useTheme } from "styled-components"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

import BooksScreen from "./books"
import ChaptersScreen from "./chapters"
import VersesScreen from "./verses"

const TopTab = createMaterialTopTabNavigator()

function TabTopNavigation() {
  const { colors } = useTheme()
  return (
    <TopTab.Navigator initialRouteName="books">
      <TopTab.Screen
        name="books"
        component={BooksScreen}
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
                Livros
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
      <TopTab.Screen
        name="chapters"
        component={ChaptersScreen}
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
                Capitulos
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
      <TopTab.Screen
        name="verses"
        component={VersesScreen}
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
                Versículos
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
    </TopTab.Navigator>
  )
}

function Bible() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content>
        <Header page="Bíblia" info="NVT" />
        <TabTopNavigation />
      </Content>
    </SafeAreaView>
  )
}

export default gestureHandlerRootHOC(Bible)
