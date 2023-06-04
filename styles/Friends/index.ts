import { Dimensions } from "react-native"
import { css } from "styled-components"
import styled from "styled-components/native"

export const Title = styled.Text``

export const Search = styled.TextInput((props) => {
  const { colors } = props.theme
  return css`
    background-color: ${colors.BACKGROUND};
    width: ${Dimensions.get("screen").width - 30}px;
    height: 40px;
    margin: 0 auto;
    border-radius: 5px;
    padding: 5px 10px;
  `
})
