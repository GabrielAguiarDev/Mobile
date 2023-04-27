import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { Header } from "../../components"
import PrayersPrivate from "./private"
import PrayersShared from "./shared"

import { StyleSheet } from "react-native"
import { Content } from "../../../styles"

const TopTab = createMaterialTopTabNavigator()

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

export default function Prayers() {
  return (
    <Content>
      <Header page="Orações" />
      <TabTopNavigation />
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
})
