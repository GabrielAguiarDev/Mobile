import { useEffect, useState } from "react"
import { BackHandler, Text, View } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

import { Ionicons, AntDesign } from "@expo/vector-icons"

import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet"
import { propsStack } from "../../routes/Stack/Models"

import { Content, shadow } from "../../../styles"
import * as S from "../../../styles/Bible"
import { useTheme } from "styled-components"
import { useRef } from "react"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"

type ParamList = {
  reading: {
    book: string
    chapters: number
  }
}

function HeaderBible({ book, cap, refButton }) {
  const navigation = useNavigation<propsStack>()
  const { colors } = useTheme()
  return (
    <S.ContainerHeader style={shadow}>
      <S.ContentCap style={shadow} onPress={() => navigation.navigate("books")}>
        <View style={S.styleSheet.capSelected}>
          <Text
            style={[
              S.styleSheet.BookReading,
              { color: colors.BACKGROUND_HEADER },
            ]}
          >
            {book}
          </Text>
          <Text
            style={[
              S.styleSheet.BookReading,
              { color: colors.BACKGROUND_HEADER },
            ]}
          >
            {cap}
          </Text>
        </View>
        <View
          style={{
            borderLeftWidth: 1,
            borderColor: colors.BACKGROUND_HEADER,
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            paddingLeft: 10,
          }}
        >
          <Text
            style={[
              S.styleSheet.VersionBook,
              { color: colors.BACKGROUND_HEADER },
            ]}
          >
            NVT
          </Text>
        </View>
      </S.ContentCap>
      <S.FontSize
        onPress={() => {
          refButton.current?.expand()
          BackHandler.addEventListener("hardwareBackPress", () => {
            refButton.current.close()
            return true
          })
        }}
        style={shadow}
      >
        <Ionicons name="md-text" size={22} color={colors.PRIMARY_COLOR} />
      </S.FontSize>
    </S.ContainerHeader>
  )
}

function ModalFont({ bottomRef }) {
  const { colors } = useTheme()
  const navigation = useNavigation<propsStack>()
  return (
    <BottomSheet
      ref={bottomRef}
      onClose={() =>
        BackHandler.addEventListener("hardwareBackPress", () => {
          navigation.goBack()
          return true
        })
      }
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
      snapPoints={[2, "30%"]}
    >
      <S.Modal
        style={{
          elevation: 10,
          shadowColor: "#00000094",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
        }}
      >
        <S.ContainerHandleFont>
          <S.ContentButtonSize>
            <S.ButtonSizeText
              style={{
                borderRightWidth: 2,
                borderRightColor: colors.BACKGROUND_HEADER,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  color: colors.CONTENT_CARD2,
                }}
              >
                A
              </Text>
            </S.ButtonSizeText>
            <S.ButtonSizeText
              style={{
                borderLeftWidth: 2,
                borderLeftColor: colors.BACKGROUND_HEADER,
              }}
            >
              <Text
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  color: colors.CONTENT_CARD2,
                }}
              >
                A
              </Text>
            </S.ButtonSizeText>
          </S.ContentButtonSize>
          <S.ButtonLineHeight>
            <S.IconLine />
            <S.IconLine />
            <S.IconLine />
          </S.ButtonLineHeight>
        </S.ContainerHandleFont>
        <S.ContainerFontFamily>
          <S.LabelSelect>Font</S.LabelSelect>
          <S.FontFamily>Roboto Sans</S.FontFamily>
          <AntDesign name="right" size={24} color="black" />
        </S.ContainerFontFamily>
      </S.Modal>
    </BottomSheet>
  )
}

function Reading() {
  const route = useRoute<RouteProp<ParamList, "reading">>()
  const BottomSheetFontRef = useRef<BottomSheet>(null)

  return (
    <Content>
      <HeaderBible
        book={route.params?.book}
        cap={route.params?.chapters}
        refButton={BottomSheetFontRef}
      />
      <ModalFont bottomRef={BottomSheetFontRef} />
    </Content>
  )
}

export default gestureHandlerRootHOC(Reading)
