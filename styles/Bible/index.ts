import { StyleSheet } from "react-native"
import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { css } from "styled-components"

export const styleSheet = StyleSheet.create({
  chapters: {
    fontSize: RFValue(15),
    fontWeight: "bold",
  },
  capSelected: {
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  VersionBook: {
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: RFValue(14),
  },
  label: {
    fontFamily: "serif",
    fontWeight: "500",
  },
  title: {
    fontSize: RFValue(15),
    fontFamily: "serif",
    fontWeight: "500",
  },
  BookReading: {
    fontSize: RFValue(14),
    fontWeight: "600",
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

export const Chapters = styled.View`
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 15px;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  border-bottom-width: 1px;
  border-color: #03164637;
  padding: 0 15px 10px;
`

export const VerseSelected = styled.Text((props) => {
  const { colors } = props.theme
  return css`
    font-size: ${RFValue(15)}px;
    font-weight: bold;
    color: ${colors.PRIMARY_COLOR};
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

export const ContainerHeader = styled.View((props) => {
  const { colors } = props.theme
  return css`
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 20px;
    background-color: ${colors.BACKGROUND_HEADER};
  `
})

export const ContentCap = styled.Pressable((props) => {
  const { colors } = props.theme
  return css`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    background-color: ${colors.PRIMARY_COLOR};
    border-radius: 18px;
    margin-top: 10px;
    gap: 10px;
  `
})

export const FontSize = styled.Pressable((props) => {
  const { colors } = props.theme
  return css`
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
    border-radius: 8px;
    background-color: ${colors.BACKGROUND_ICON};
  `
})

export const Modal = styled.View`
  position: relative;
  justify-content: center;
  padding: 5px 15px 0;
`

export const ContainerHandleFont = styled.View`
  position: relative;
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`

export const ContentButtonSize = styled.View((props) => {
  const { colors } = props.theme
  return css`
    flex: 1;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 8px;
    background-color: ${colors.BACKGROUND_CARDS2};
  `
})
export const ButtonSizeText = styled.Pressable`
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const ButtonLineHeight = styled.Pressable((props) => {
  const { colors } = props.theme
  return css`
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 5px 15px;
    border-radius: 8px;
    background-color: ${colors.BACKGROUND_CARDS2};
  `
})

export const IconLine = styled.View((props) => {
  const { colors } = props.theme
  return css`
    height: 3px;
    width: 30px;
    border-radius: 7px;
    background-color: ${colors.CONTENT_CARD2};
  `
})
export const ContainerFontFamily = styled.Pressable((props) => {
  const { colors } = props.theme
  return css`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 20px 15px;
    border-radius: 8px;
    border: 1px solid ${colors.BACKGROUND_CARDS2};
  `
})

export const FontFamily = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 600;
`

export const LabelSelect = styled.Text((props) => {
  const { colors } = props.theme
  return css`
    position: absolute;
    top: 5px;
    left: 20px;
    font-size: ${RFValue(12)}px;
    color: ${colors.CONTENT_CARD2};
  `
})
