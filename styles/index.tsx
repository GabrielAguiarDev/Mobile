import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const Content = styled.View`
  position: relative;
  flex: 1;
  padding-top: 40px;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
`

export const TitlePage = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: serif;
  color: #555555;
`

export const shadow = {
  elevation: 5,
  shadowColor: "#0000009a",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.8,
  shadowRadius: 5,
}
