import { NavigationContainer } from "@react-navigation/native"
import Stack from "./Stack"
import { Provider } from "../context/dataContext"

export default function StackIndex() {
  return (
    <NavigationContainer>
      <Provider>
        <Stack />
      </Provider>
    </NavigationContainer>
  )
}
