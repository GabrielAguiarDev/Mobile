// Dependence
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { useContext, useRef, useEffect } from "react"
import { ThemeProvider, useTheme } from "styled-components"
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import * as Animatable from "react-native-animatable"
import { StyleSheet } from "react-native"

// Screen
import isLogged from "../../screen/AuthLoadingScreen"
import Login from "../../screen/Login"
import Register from "../../screen/Register"
import Home from "../../screen/Home"
import Targets from "../../screen/Targets"
import Bible from "../../screen/Bible"

// Style
import { darkTheme, lightTheme } from "../../../styles/theme"
import { Button, TabButtonContent } from "./style"

// Other
import { propsNavigationStack } from "./Models"
import { Context } from "../../context/dataContext"

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()
const Tab = createBottomTabNavigator()

const animate1 = {
  0: { scale: 0.5, translateY: 8 },
  0.92: { translateY: -28 },
  1: { scale: 1.2, translateY: -15 },
}
const animate2 = {
  0: { scale: 1.2, translateY: 0 },
  1: { scale: 1, translateY: 5 },
}

const circle1 = {
  0: { scale: 0 },
  0.5: { scale: 0.5 },
  1: { scale: 1 },
}
const circle2 = {
  0: { scale: 1 },
  1: { scale: 0 },
}

function TabButton(props) {
  const { colors } = useTheme()
  const viewRef = useRef(null)
  const circleRef = useRef(null)
  const textRef = useRef(null)
  const { name, label, onPress, accessibilityState, IconType } = props
  const focused = accessibilityState.selected

  useEffect(() => {
    if (focused) {
      viewRef?.current?.animate(animate1)
      circleRef?.current?.animate(circle1)
      textRef?.current?.transitionTo({ scale: 1 })
    } else {
      viewRef?.current?.animate(animate2)
      circleRef?.current?.animate(circle2)
      textRef?.current?.transitionTo({ scale: 0 })
    }
  }, [focused])

  return (
    <TabButtonContent onPress={onPress}>
      <Animatable.View ref={viewRef} duration={300} style={styles.container}>
        <Button>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: colors.SECONDARY_COLOR,
              borderRadius: 25,
            }}
            duration={300}
          />
          {IconType === "Ionicons" && (
            <Ionicons
              name={focused ? name : `${name}-outline`}
              size={20}
              color={focused ? colors.PRIMARY_COLOR : colors.SECONDARY_COLOR}
            />
          )}
          {IconType === "MaterialIcons" && (
            <MaterialIcons
              name={name}
              size={20}
              color={focused ? colors.PRIMARY_COLOR : colors.SECONDARY_COLOR}
            />
          )}
        </Button>
        <Animatable.Text
          ref={textRef}
          duration={100}
          style={{
            fontSize: 10,
            textAlign: "center",
            color: colors.SECONDARY_COLOR,
          }}
        >
          {label}
        </Animatable.Text>
      </Animatable.View>
    </TabButtonContent>
  )
}

function TabNavigation() {
  const { colors } = useTheme()
  const { state } = useContext(Context)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarShowLabel: false,
        tabBarStyle: {
          display: state.modal ? "none" : "flex",
          position: "absolute",
          backgroundColor: colors.PRIMARY_COLOR,
          borderTopWidth: 0,
          height: 60,
          zIndex: 2,
        },
      }}
    >
      <Tab.Screen
        name="bible"
        component={Bible}
        options={{
          headerShown: false,
          tabBarLabel: "Bíblia",
          tabBarButton: (props) => (
            <TabButton
              {...props}
              name="bible"
              label="Bíblia"
              IconType="Ionicons"
            />
          ),
        }}
      />
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "home",
          tabBarButton: (props) => (
            <TabButton
              {...props}
              name="home"
              label="Início"
              IconType="Ionicons"
            />
          ),
        }}
      />
      <Tab.Screen
        name="targets"
        component={Targets}
        options={{
          headerShown: false,
          tabBarLabel: "Orações",
          tabBarButton: (props) => (
            <TabButton
              {...props}
              name="targets"
              label="Orações"
              IconType="Ionicons"
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function Stack() {
  const { state } = useContext(Context)
  return (
    <ThemeProvider theme={state.theme === false ? darkTheme : lightTheme}>
      <Navigator screenOptions={{ headerShown: false }}>
        {/* {!state.isLogged ? (
          <Screen name="isLogged" component={isLogged} />
        ) : (
          <>
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
          </>
        )} */}
        {state.isLogged && (
          <>
            <Screen name="Home" component={TabNavigation} />
            <Screen name="Profile" component={TabNavigation} />
            <Screen name="Login" component={TabNavigation} />
            <Screen name="Register" component={TabNavigation} />
          </>
        )}
      </Navigator>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
