import { Text } from "react-native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

import LivesScreen from "./lives"
import VideosScreen from "./videos"
import PlayerScreen from "./player"

import { Content } from "../../../styles"
import { Header } from "../../components"
import { useTheme } from "styled-components"

const TopTab = createMaterialTopTabNavigator()

function TabTopNavigation() {
  const { colors } = useTheme()
  return (
    <TopTab.Navigator initialRouteName="videos">
      <TopTab.Screen
        name="lives"
        component={LivesScreen}
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
                Ao vivo
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
      <TopTab.Screen
        name="movies"
        component={VideosScreen}
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
                Videos
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
      <TopTab.Screen
        name="player"
        component={PlayerScreen}
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
                Player
              </Text>
            )
          },
          tabBarIndicatorStyle: { backgroundColor: colors.PRIMARY_COLOR },
        }}
      />
    </TopTab.Navigator>
  )
}

function index() {
  return (
    <Content>
      <Header page="Videos" />
      <TabTopNavigation />
    </Content>
  )
}

export default gestureHandlerRootHOC(index)
