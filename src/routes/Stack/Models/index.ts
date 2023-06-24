import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
  isLogged: undefined
  Home: undefined
  Login: undefined
  Profile: undefined
  Register: undefined
  Friends: undefined
  books: undefined
  chapters: {
    book: string
  }
  verses: {
    book: string
    chapters: string
  }
  Reading: {
    book: string
    chapters: string
  }
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>
