import styled from "styled-components/native"
import { Dimensions } from "react-native"

export const Button = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.colors.BACKGROUND};
  background-color: ${(props) => props.theme.colors.BACKGROUND};
  justify-content: center;
  align-items: center;
`

export const TabButtonContent = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
`
