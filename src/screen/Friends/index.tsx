// modules and hooks
import { useEffect, useRef, useState } from "react"
import { Dimensions, StatusBar, BackHandler } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated"

// components
import { Feather, Ionicons } from "@expo/vector-icons"
import { HeaderSecond } from "../../components"
import BigText from "../../utils/bigText"

// styles
import { Content, shadow } from "../../../styles"
import * as S from "../../../styles/Friends"
import { useTheme } from "styled-components"
import { useNavigation } from "@react-navigation/native"

export default function Friends() {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const inputSearch = useRef(null)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")
  const withScreen = Dimensions.get("screen").width

  // animation
  const containerSearchHeight = useSharedValue(0)
  const containerResultSearchOpacity = useSharedValue(0)
  const containerResultHeight = useSharedValue("0%")
  const containerFriends = useSharedValue(1)
  const boxSearchWidth = useSharedValue(0)
  const marginElement = useSharedValue(0)
  const animationOpacity = useSharedValue(0)

  const onFocusSearch = () => {
    setTimeout(() => {
      inputSearch.current.focus()
    }, 500)
  }

  const openSearch = () => {
    onFocusSearch()
    boxSearchWidth.value = withDelay(
      300,
      withTiming(withScreen, { duration: 300 })
    )
    containerSearchHeight.value = withDelay(
      0,
      withTiming(45, { duration: 300 })
    )
    animationOpacity.value = withTiming(1, { duration: 50 })

    containerFriends.value = withDelay(
      300,
      withTiming(0.00001, { duration: 300 })
    )
    marginElement.value = withTiming(20, { duration: 300 })
    containerResultSearchOpacity.value = withDelay(
      500,
      withTiming(1, { duration: 500 })
    )
    containerResultHeight.value = withDelay(
      500,
      withTiming("100%", { duration: 500 })
    )
  }

  const closeSearch = () => {
    containerSearchHeight.value = withDelay(
      200,
      withTiming(0, { duration: 300 })
    )
    boxSearchWidth.value = withTiming(0, { duration: 300 })
    animationOpacity.value = withDelay(400, withTiming(0, { duration: 0 }))

    containerFriends.value = withTiming(1, { duration: 300 })
    marginElement.value = withTiming(0, { duration: 300 })
    containerResultSearchOpacity.value = withDelay(
      300,
      withTiming(0, { duration: 300 })
    )
    containerResultHeight.value = withDelay(
      300,
      withTiming("0%", { duration: 300 })
    )
    setShowSearch(false)
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener(
      "hardwareBackPress",
      showSearch
        ? closeSearch
        : () => {
            navigation.goBack()
            return true
          }
    )
  }, [showSearch])

  const animatedContainerFriends = useAnimatedStyle(() => {
    return {
      flex: containerFriends.value,
      marginTop: marginElement.value,
    }
  })

  const animatedSearch = useAnimatedStyle(() => {
    return {
      width: boxSearchWidth.value,
      height: containerSearchHeight.value,
      opacity: animationOpacity.value,
    }
  })

  const animatedResultSearch = useAnimatedStyle(() => {
    return {
      opacity: containerResultSearchOpacity.value,
      height: containerResultHeight.value,
    }
  })

  // Dados para teste
  const dataTest = [
    {
      name: "Beatriz Almeida",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Iandra Rodrigues",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Fernanda Pacheco",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Well Souza",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Becca Almeida",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Natsoriel Santos",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Manu Oliveira",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "João Souza",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Yvinis alves",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Marcelo Almeida",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Andréia Almeida",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
    {
      name: "Maurício Santos",
      oldMessage: "última mensagem enviada de teste teste teste",
      qtdOldMessage: 2,
      hourOldMessage: "20:56",
    },
  ]

  return (
    <Content>
      <StatusBar backgroundColor={colors.BACKGROUND} />
      <HeaderSecond
        page="Meus Amigos"
        iconFunction={() => {
          if (showSearch) {
            closeSearch()
          } else {
            openSearch()
          }

          setShowSearch(!showSearch)
        }}
        icon="search"
        size={28}
      />
      <Animated.View style={[S.style.ContainerSearch, animatedSearch]}>
        <S.Search
          ref={inputSearch}
          style={shadow}
          placeholder="Pesquise por um amigo"
          onChangeText={(e) => setSearch(e)}
          value={search}
        />
        <Feather
          name="x"
          size={30}
          onPress={() => setSearch("")}
          style={S.style.icon}
          color={"#9c9c9c"}
        />
      </Animated.View>
      <Animated.View style={[animatedContainerFriends]}>
        <S.ContainerFriends>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 10,
              paddingBottom: 50,
              width: Dimensions.get("screen").width,
            }}
          >
            {dataTest.map((friend, i) => (
              <S.CardFriend key={i} style={shadow}>
                <S.Picture>
                  <Ionicons name="person" size={24} color="#fff" />
                </S.Picture>
                <S.ContainerMessage>
                  <S.Name>{BigText(friend.name, 25)}</S.Name>
                  <S.OldMessage>
                    <S.Message>{BigText(friend.oldMessage, 40)}</S.Message>
                  </S.OldMessage>
                </S.ContainerMessage>
                <S.Hour>{friend.hourOldMessage}</S.Hour>
                <S.ContainerUnread>
                  <S.Unread>{friend.qtdOldMessage}</S.Unread>
                </S.ContainerUnread>
              </S.CardFriend>
            ))}
          </ScrollView>
        </S.ContainerFriends>
      </Animated.View>
      <Animated.View style={[animatedResultSearch]}>
        <S.ResultSearch>
          <S.Empty>Nenhuma alma encontrada</S.Empty>
        </S.ResultSearch>
      </Animated.View>
    </Content>
  )
}
