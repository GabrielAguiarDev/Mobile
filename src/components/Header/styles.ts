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
  background-color: #fff;
  border: 2px solid ${(props) => props.theme.colors.PRIMARY_COLOR};
`

export const Name = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(15)}px;
`

export const contentIcon = styled.Pressable`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 50px;
  border-radius: 8px;
  background-color: #fff;
`
