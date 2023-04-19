import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

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
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.PRIMARY_COLOR};
`

export const ContentModal = styled.View`
  flex: 1;
  position: relative;
`

export const Modal = styled.View`
  position: relative;
  flex: 1;
`

export const TitleModal = styled.View`
  position: absolute;
  top: 15px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(17)}px;
`
