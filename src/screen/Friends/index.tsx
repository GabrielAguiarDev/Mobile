import { useState } from "react"
import { Dimensions } from "react-native"

import { Feather, Ionicons } from "@expo/vector-icons"
import { HeaderSecond } from "../../components"

import { Content, shadow } from "../../../styles"
import * as S from "../../../styles/Friends"
import { useTheme } from "styled-components"
import BigText from "../../utils/bigText"
import { ScrollView } from "react-native-gesture-handler"

export default function Friends() {
  const { colors } = useTheme()
  const [showSearch, setShowSearch] = useState(false)

  // Dados para teste
  const dataTest = [
    {
      name: "Beatriz Almeida",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
    {
      name: "Iandra Rodrigues",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
    {
      name: "Fernanda Pacheco",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
    {
      name: "Well Souza",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
    {
      name: "Becca Almeida",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
    {
      name: "Natsoriel Santos",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
    {
      name: "Manu Oliveira",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
    {
      name: "João Souza",
      oldMessage: "última mensagem enviada de teste",
      qtdOldMessage: 2,
    },
  ]

  return (
    <Content>
      <HeaderSecond
        page="Meus Amigos"
        iconFunction={() => setShowSearch(!showSearch)}
        icon="search"
        size={28}
      />
      {showSearch && (
        <S.ContainerSearch>
          <S.Search style={shadow} placeholder="Pesquise por um amigo" />
          <Feather name="x" size={30} style={S.style.icon} color={"#9c9c9c"} />
        </S.ContainerSearch>
      )}
      <S.ContainerFriends>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 30,
            paddingBottom: 80,
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
                  <S.UserSend>{friend.name.split(" ").slice(0, 1)}:</S.UserSend>
                  <S.Message>{BigText(friend.oldMessage, 30)}</S.Message>
                </S.OldMessage>
              </S.ContainerMessage>
              <S.ContainerUnread>
                <S.Unread>{friend.qtdOldMessage}</S.Unread>
              </S.ContainerUnread>
            </S.CardFriend>
          ))}
        </ScrollView>
      </S.ContainerFriends>
    </Content>
  )
}
