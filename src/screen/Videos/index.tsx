import { useCallback, useRef, useState } from "react"
import { BackHandler, ScrollView, View } from "react-native"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet"

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import {
  FontAwesome5,
  Ionicons,
  Feather,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons"
import { Header } from "../../components"
import BigText from "../../utils/bigText"
import { propsStack } from "../../routes/Stack/Models"

import { Content, shadow } from "../../../styles"
import * as S from "../../../styles/Videos"

import { IVideo } from "../../types/Interfaces"

// data for test
const data = [
  {
    title: "Reunião Geral 12/04/23",
    channel: "Proide Bahia",
    link: null,
  },
  {
    title: "Reunião Geral 19/04/23",
    channel: "Proide Bahia",
    link: null,
  },
  {
    title: "Reunião Geral 26/04/23",
    channel: "Proide Bahia",
    link: null,
  },
  {
    title: "Reunião Geral 03/05/23",
    channel: "Proide Bahia",
    link: null,
  },
  {
    title: "Reunião Geral 10/05/23",
    channel: "Proide Bahia",
    link: null,
  },
  {
    title: "Reunião Geral 17/04/23",
    channel: "Proide Bahia",
    link: null,
  },
  {
    title: "Reunião Geral 21/04/23",
    channel: "Proide Bahia",
    link: null,
  },
]

function ModalPlayer({ refVideo, data }) {
  const navigation = useNavigation<propsStack>()
  const showDescription = useSharedValue(70)
  const [show, setShow] = useState(false)

  const handleShowDescription = useCallback(() => {
    if (showDescription.value === 150) {
      showDescription.value = withTiming(70, { duration: 100 })
    } else {
      showDescription.value = withTiming(150, { duration: 100 })
    }
    setShow(!show)
  }, [setShow, show])

  const animatedShowDescription = useAnimatedStyle(() => {
    return {
      height: showDescription.value,
    }
  })
  return (
    <BottomSheet
      ref={refVideo}
      onClose={() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
          navigation.goBack()
          return true
        })
      }}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough={true}
          opacity={0.4}
        />
      )}
      animationConfigs={{
        duration: 400,
      }}
      style={{
        zIndex: 3,
      }}
      index={-1}
      snapPoints={[2, "100%"]}
    >
      <S.ContainerModal>
        <S.ContainerPlayer>
          <FontAwesome5 name="play" size={35} color="white" />
        </S.ContainerPlayer>
        <S.ContainerInfoPlayer>
          <Animated.View style={[animatedShowDescription]}>
            <S.ContainerTitlePlayer onPress={() => handleShowDescription()}>
              <S.TitleVideoPlay>{data?.title}</S.TitleVideoPlay>
              <AntDesign
                name={show ? "down" : "up"}
                style={{ marginTop: 5 }}
                size={20}
                color="black"
              />
            </S.ContainerTitlePlayer>
          </Animated.View>
          <S.ContainerChannel>
            <Ionicons name="ios-person-circle-sharp" size={50} color="black" />
            <S.ContentInfoChannel>
              <S.TitleChannel>{data?.channel}</S.TitleChannel>
              <EvilIcons name="external-link" size={24} color="black" />
            </S.ContentInfoChannel>
          </S.ContainerChannel>
        </S.ContainerInfoPlayer>
      </S.ContainerModal>
    </BottomSheet>
  )
}

function ModalOptions({ refMore, link }) {
  const navigation = useNavigation<propsStack>()
  return (
    <BottomSheet
      ref={refMore}
      onClose={() => {
        BackHandler.addEventListener("hardwareBackPress", () => {
          navigation.goBack()
          return true
        })
      }}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          enableTouchThrough={true}
          opacity={0.4}
        />
      )}
      animationConfigs={{
        velocity: 25,
        damping: 12,
      }}
      style={{
        zIndex: 3,
      }}
      index={-1}
      snapPoints={[2, "50%"]}
    >
      <S.ContainerModal>
        <S.TitleVideo>{link}</S.TitleVideo>
      </S.ContainerModal>
    </BottomSheet>
  )
}

function Videos() {
  const [dataVideo, setdataVideo] = useState<IVideo>(null)
  const refMore = useRef<BottomSheet>()
  const refVideo = useRef<BottomSheet>()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content>
        <Header page="Videos" />
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 80,
          }}
        >
          {data.map((video, i) => (
            <S.ContainerVideos key={i} style={shadow}>
              <S.BannerVideo
                onPress={() => {
                  setdataVideo(video)
                  refVideo.current.expand()
                  BackHandler.addEventListener("hardwareBackPress", () => {
                    refVideo.current.close()
                    return true
                  })
                }}
              >
                <FontAwesome5 name="play" size={24} color="white" />
              </S.BannerVideo>
              <S.ContainerInfo>
                <Ionicons
                  name="ios-person-circle-sharp"
                  size={40}
                  color="black"
                />
                <S.ContenInfo>
                  <View>
                    <S.TitleVideo>{BigText(video.title, 30)}</S.TitleVideo>
                    <S.Info>{video.channel}</S.Info>
                  </View>
                  <S.ContentMore
                    onPress={() => {
                      setdataVideo(video)
                      refMore.current.expand()
                      BackHandler.addEventListener("hardwareBackPress", () => {
                        refMore.current.close()
                        return true
                      })
                    }}
                  >
                    <Feather name="more-vertical" size={24} color="black" />
                  </S.ContentMore>
                </S.ContenInfo>
              </S.ContainerInfo>
            </S.ContainerVideos>
          ))}
        </ScrollView>
        <ModalOptions refMore={refMore} link={dataVideo?.title} />
        <ModalPlayer refVideo={refVideo} data={dataVideo} />
      </Content>
    </SafeAreaView>
  )
}

export default gestureHandlerRootHOC(Videos)
