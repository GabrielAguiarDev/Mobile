import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
  isLogged: undefined
  Home: undefined
  Login: undefined
  Profile: undefined
  Register: undefined
  Friends: undefined
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
