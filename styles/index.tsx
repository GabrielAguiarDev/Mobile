import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { css } from "styled-components"

export const Content = styled.SafeAreaView((props) => {
  const { colors } = props.theme
  return css`
    position: relative;
    flex: 1;
    padding-top: 40px;
    background-color: ${colors.BACKGROUND_HEADER};
  `
})

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
