import { Dimensions, StyleSheet } from "react-native"
import { css } from "styled-components"
import styled, { DefaultTheme, ThemeProps } from "styled-components/native"

export const ContainerSearch = styled.View`
  position: relative;
  width: ${Dimensions.get("screen").width - 30}px;
  margin: 0 auto;
  margin-top: 20px;
`

export const Search = styled.TextInput((props) => {
  const { colors } = props.theme
  return css`
    background-color: ${colors.BACKGROUND};
    height: 45px;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 17px;
  `
})

export const style = StyleSheet.create({
  icon: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 7,
    paddingHorizontal: 13,
  },
})

export const ContainerFriends = styled.View`
  margin-top: 20px;
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
    background-color: ${colors.BACKGROUND};
    height: 70px;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 20px;
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

export const UserSend = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #555;
`

export const Message = styled.Text`
  font-size: 12px;
`

export const ContainerUnread = styled.View((props) => {
  const { colors } = props.theme
  return css`
    position: absolute;
    right: 10px;
    top: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.UNREADMESSAGE};
    width: 20px;
    height: 20px;
    border-radius: 20px;
  `
})

export const Unread = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`
