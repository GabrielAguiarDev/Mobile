import { Dimensions } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

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

export const Label = styled.Text`
  font-size: ${RFValue(18)}px;
  font-weight: bold;
  font-family: serif;
  text-align: center;
`

export const Smalltext = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: serif;
  align-self: center;
  margin-top: 10px;
`
