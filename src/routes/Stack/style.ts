import styled from "styled-components/native"

export const Button = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.colors.TAB_NAVIGATOR};
  background-color: ${(props) => props.theme.colors.TAB_NAVIGATOR};
  justify-content: center;
  align-items: center;
`

export const TabButtonContent = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
`
