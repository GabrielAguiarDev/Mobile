import { Dimensions } from "react-native"
import styled from "styled-components/native"

export const Content = styled.SafeAreaView`
  position: relative;
  flex: 1;
  padding-top: 40px;
  background-color: ${(props) => props.theme.colors.BACKGROUND};
`
export const Title = styled.Text``