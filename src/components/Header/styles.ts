import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import { css } from "styled-components"

export const Content = styled.View((props) => {
  const { colors } = props.theme
  return css`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: ${colors.BACKGROUND_HEADER};
  `
})

export const ProfileContent = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const Profile = styled.View((props) => {
  const { colors } = props.theme
  return css`
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 60px;
    background-color: ${colors.BACKGROUND_ICON};
    border: 1px solid ${colors.PRIMARY_COLOR};
  `
})

export const Page = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`

export const Info = styled.Text`
  font-size: ${RFValue(12)}px;
  background-color: #99999949;
  padding: 3px;
  border-radius: 3px;
  margin-left: -8px;
`

export const contentIcon = styled.Pressable((props) => {
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
export const ContentSecond = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`

export const Back = styled.Pressable`
  position: absolute;
  left: 20px;
  width: 50px;
  height: 40px;
  justify-content: center;
  padding-left: 10px;
`
