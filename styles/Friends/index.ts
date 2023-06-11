import { Dimensions, StyleSheet } from "react-native"
import { css } from "styled-components"
import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const styleSheet = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 10,
    top: 0,
    padding: 7,
    paddingHorizontal: 13,
  },
  ContainerSearch: {
    position: "relative",
    marginTop: 30,
    justifyContent: "center",
    alignContent: "center",
  },
})

export const Search = styled.TextInput((props) => {
  const { colors } = props.theme
  return css`
    background-color: ${colors.BACKGROUND_CARDS};
    width: 93%;
    height: 100%;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 17px;
    margin: 0 auto;
  `
})

export const ContainerFriends = styled.View`
  justify-content: center;
  align-items: center;
`

export const CardFriend = styled.TouchableOpacity((props) => {
  const { colors } = props.theme
  return css`
    flex-direction: row;
    align-items: center;
    width: ${Dimensions.get("screen").width - 30}px;
    margin: 0 auto;
    background-color: ${colors.BACKGROUND_CARDS};
    height: 70px;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 10px;
  `
})

export const Picture = styled.View((props) => {
  const { colors } = props.theme
  return css`
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    padding: 10px;
    background-color: ${colors.PRIMARY_COLOR};
  `
})

export const ContainerMessage = styled.View`
  overflow: hidden;
  white-space: nowrap;
  margin-left: 10px;
  max-width: 73%;
  gap: 2px;
`

export const Name = styled.Text((props) => {
  const { colors } = props.theme
  return css`
    color: ${colors.PRIMARY_COLOR};
    font-size: 17px;
    font-weight: 600;
  `
})

export const OldMessage = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 3px;
`

export const Message = styled.Text`
  font-size: 12px;
`

export const ContainerInfoMessage = styled.View`
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const ContainerUnread = styled.View((props) => {
  const { colors } = props.theme
  return css`
    position: absolute;
    right: 15px;
    top: 30px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.UNREADMESSAGE};
    width: 20px;
    height: 20px;
    border-radius: 20px;
  `
})

export const Hour = styled.Text((props) => {
  const { colors } = props.theme
  return css`
    position: absolute;
    right: 13px;
    top: 10px;
    font-size: ${RFValue(10)}px;
    color: ${colors.UNREADMESSAGE};
  `
})

export const Unread = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`

export const ResultSearch = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`

export const Empty = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: #cfcfcf;
`
