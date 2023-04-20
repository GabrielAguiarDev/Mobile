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
