import { Dimensions } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface ICopy {
  copy: boolean
}

export const ContentLabel = styled.View`
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: ${Dimensions.get("window").width}px;
  margin-top: 20px;
`

export const ContentQRCode = styled.View`
  width: ${Dimensions.get("window").width}px;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  font-family: serif;
  text-align: center;
`

export const ContentVerse = styled.View`
  position: relative;
  width: 90%;
  align-self: center;
  background-color: ${(props) => props.theme.colors.SECONDARY_COLOR};
  padding: 15px 10px 15px 40px;
  border-radius: 8px;
  margin-top: 20px;
`

export const Verse = styled.Text`
  color: #fff;
  font-family: serif;
  font-size: ${RFValue(15)}px;
`

export const InfoVerse = styled.Text`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: #fff;
  font-family: serif;
  font-style: italic;
  font-weight: bold;
  font-size: ${RFValue(10)}px;
`

export const ContentInstruction = styled.View`
  position: relative;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: ${Dimensions.get("window").width}px;
  margin: 25px 0;
  padding: 0 20px;
`

export const Instruction = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  font-family: serif;
  font-style: italic;
`

export const Step = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: serif;
  margin-top: 10px;
`

export const ContentIconPix = styled.View`
  position: absolute;
  right: 40px;
  top: 30%;
  width: 50px;
  height: 50px;
`

export const ContentCodeQRCode = styled.View`
  flex-direction: row;
  margin-top: 20px;
  border-radius: 8px;
`

export const Code = styled.Text<ICopy>`
  font-size: ${RFValue(12)}px;
  font-style: italic;
  padding: 15px 10px;
  color: ${(props) => (props.copy ? "#2ebdaf" : "#000")};
  background-color: ${(props) => props.theme.colors.BACKGROUND_ICON};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const ButtonCopy = styled.Pressable`
  background-color: ${(props) => props.theme.colors.SECONDARY_COLOR};
  padding: 8px 15px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  font-weight: bold;
  color: #fff;
`
