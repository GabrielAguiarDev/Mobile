import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
`

export const ProfileContent = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 15px;
`

export const Profile = styled.View`
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.BACKGROUND_ICON};
  border: 1px solid ${(props) => props.theme.colors.PRIMARY_COLOR};
`

export const Page = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`

export const contentIcon = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 50px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.BACKGROUND_ICON};
`
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
