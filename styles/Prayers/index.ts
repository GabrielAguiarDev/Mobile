import styled from "styled-components/native"
import { Dimensions } from "react-native"

interface IPrayerPrivate {
  prayer: boolean
}

export const Prayers = styled.Pressable<IPrayerPrivate>`
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  height: 43px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.prayer
      ? props.theme.colors.BACKGROUND_ICON
      : props.theme.colors.BACKGROUND};
`

export const Type = styled.Text<IPrayerPrivate>`
  font-weight: bold;
  font-family: serif;
  color: ${(props) =>
    props.prayer ? props.theme.colors.PRIMARY_COLOR : "#898989"};
`

export const ButtonContent = styled.Pressable`
  position: absolute;
  bottom: 110px;
  right: 30px;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.PRIMARY_COLOR};
`

export const ContentModal = styled.View`
  position: absolute;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
  flex: 1;
  z-index: 3;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
  justify-content: center;
  align-items: center;
`

export const ContentTest = styled.Pressable`
  height: 50px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.PRIMARY_COLOR};
  border-radius: 8px;
`
export const Test = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`
