import styled from "styled-components/native"
import { css } from "styled-components"
import { RFValue } from "react-native-responsive-fontsize"

export const ContainerVideos = styled.Pressable((props) => {
  const { colors } = props.theme
  return css`
    height: 200px;
    width: 95%;
    margin: 0 auto;
    margin-bottom: 20px;
    border-radius: 8px;
    background-color: ${colors.BACKGROUND_CARDS};
  `
})

export const BannerVideo = styled.Pressable`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

export const ContainerInfo = styled.View`
  flex-direction: row;
  padding: 5px 10px;
`

export const ContenInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
`

export const TitleVideo = styled.Text`
  font-size: ${RFValue(16)}px;
  font-weight: 600;
`

export const Info = styled.Text`
  font-size: ${RFValue(10)}px;
  font-weight: 400;
`

export const ContentMore = styled.TouchableOpacity`
  padding: 5px;
  border-radius: 20px;
`

export const ContainerModal = styled.View`
  flex: 1;
`

export const ContainerPlayer = styled.View`
  height: 30%;
  justify-content: center;
  align-items: center;
  background-color: red;
`

export const ContainerInfoPlayer = styled.View``

export const ContainerTitlePlayer = styled.TouchableOpacity`
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 20px 10px;
  border-bottom: 1px solid #555555;
`

export const TitleVideoPlay = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 600;
`

export const ContainerChannel = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 15px;
  border: 1px solid #5555551f;
  gap: 5px;
`

export const TitleChannel = styled.Text`
  font-size: ${RFValue(18)}px;
`

export const ContentInfoChannel = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`
