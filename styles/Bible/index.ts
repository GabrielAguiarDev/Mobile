import { StyleSheet } from "react-native"
import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { css } from "styled-components"

export const styleSheet = StyleSheet.create({
  chapters: {
    fontSize: RFValue(16),
    fontWeight: "bold",
  },
})

export const ContentScreen = styled.View((props) => {
  const { colors } = props.theme
  return css`
    flex: 1;
    background-color: ${colors.BACKGROUND};
  `
})

export const ContentVerse = styled.TouchableOpacity((props) => {
  const { colors } = props.theme
  return css`
    width: 95%;
    background-color: ${colors.BACKGROUND_CARDS};
    align-self: center;
    padding: 15px 15px;
    border-radius: 8px;
    margin-bottom: 15px;
  `
})

export const Verse = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`

export const Chapters = styled.Text((props) => {
  const { colors } = props.theme
  return css`
    width: 95%;
    margin: 0 auto;
    margin-top: 20px;
    font-size: ${RFValue(18)}px;
    font-weight: bold;
    color: ${colors.PRIMARY_COLOR};
    border-bottom-width: 1px;
    border-color: #03164637;
    padding-left: 10px;
    padding-bottom: 10px;
  `
})

export const ContainerChapters = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  width: 95%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
`

export const BoxChapters = styled.TouchableOpacity((props) => {
  const { colors } = props.theme
  return css`
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    background-color: ${colors.BACKGROUND_CARDS};
  `
})
