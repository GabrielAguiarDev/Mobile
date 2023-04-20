import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

interface IActive {
  active: boolean
}

export const Title = styled.Text``

export const OptionMenu = styled.Pressable<IActive>`
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  height: 35px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.BACKGROUND_ICON
      : props.theme.colors.BACKGROUND};
`

export const Label = styled.Text<IActive>`
  font-weight: bold;
  font-size: ${RFValue(12)}px;
  font-family: serif;
  color: ${(props) =>
    props.active ? props.theme.colors.PRIMARY_COLOR : "#898989"};
`
