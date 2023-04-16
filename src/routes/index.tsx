import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Stack from "./Stack"
import { Provider } from "../context/dataContext"

export default function StackIndex() {
  return (
    <NavigationContainer>
      <Provider>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Stack />
      </Provider>
    </NavigationContainer>
  )
}
