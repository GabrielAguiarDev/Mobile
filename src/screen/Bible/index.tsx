import { Text } from "react-native"

import { Header } from "../../components"

import { Content, shadow } from "../../../styles"
import { useTheme } from "styled-components"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { useNavigation } from "@react-navigation/native"

import BooksScreen from "./books"
import ChaptersScreen from "./chapters"
import VersesScreen from "./verses"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

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
  const navigation = useNavigation()
  return (
    <Content>
      <Header page="Bíblia" info="NVT" />
      <TabTopNavigation />
    </Content>
  )
}

export default gestureHandlerRootHOC(Bible)
