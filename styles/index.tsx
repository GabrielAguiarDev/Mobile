import { Dimensions } from "react-native"
import styled from "styled-components/native"

export const Content = styled.View`
  position: relative;
  flex: 1;
  padding-top: 40px;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
`

export const TitlePage = styled.Text`
  font-size: 18px;
  font-family: serif;
  color: #555555;
`
