import { useState, useCallback } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { BackHandler, Text, View } from "react-native"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"

import { Ionicons, AntDesign, MaterialIcons } from "@expo/vector-icons"

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet"
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

// Data for testing
const AvailableFonts = [
  "Roboto Sans",
  "Sans serif",
  "Poppins",
  "teste 1",
  "teste 2",
  "teste 3",
  "teste 4",
]

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

function ModalFontFamily({
  bottomRef,
  refFontFamily,
  setFontFamily,
  fontFamily,
}) {
  const { colors } = useTheme()
  const navigation = useNavigation<propsStack>()

  const renderItem = useCallback(
    ({ item }) => (
      <S.ContainerFontFamily
        onPress={() => {
          setFontFamily(item)
          refFontFamily.current?.close()
          bottomRef.current?.expand()
          BackHandler.addEventListener("hardwareBackPress", () => {
            bottomRef.current.close()
            return true
          })
        }}
      >
        <S.FontFamily>{item}</S.FontFamily>
        {fontFamily === item && (
          <Ionicons
            name="checkmark-circle"
            size={25}
            color={colors.UNREADMESSAGE}
          />
        )}
      </S.ContainerFontFamily>
    ),
    [setFontFamily, fontFamily, refFontFamily, bottomRef]
  )

  return (
    <BottomSheet
      ref={refFontFamily}
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
      <S.ContainerHeaderModal>
        <S.BackContent
          onPress={() => {
            refFontFamily.current?.close()
            bottomRef.current?.expand()
            BackHandler.addEventListener("hardwareBackPress", () => {
              bottomRef.current.close()
              return true
            })
          }}
        >
          <MaterialIcons name="keyboard-backspace" size={30} color="black" />
        </S.BackContent>
        <S.TitleModal>Fontes</S.TitleModal>
      </S.ContainerHeaderModal>
      <BottomSheetFlatList
        data={AvailableFonts}
        keyExtractor={(i) => i}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      />
    </BottomSheet>
  )
}
function ModalFont({ bottomRef, refFontFamily, fontFamily }) {
  const { colors } = useTheme()
  const navigation = useNavigation<propsStack>()
  const [lineHeight, setLineHeight] = useState(1)
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
          <S.ButtonLineHeight
            onPress={() => setLineHeight(lineHeight === 3 ? 1 : lineHeight + 1)}
            gap={lineHeight}
          >
            <S.IconLine />
            <S.IconLine />
            <S.IconLine />
          </S.ButtonLineHeight>
        </S.ContainerHandleFont>
        <S.ContainerFontFamily
          onPress={() => {
            refFontFamily.current.expand()
            bottomRef.current.close()
            BackHandler.addEventListener("hardwareBackPress", () => {
              refFontFamily.current.close()
              bottomRef.current.expand()
              return true
            })
          }}
        >
          <S.LabelSelect>Font</S.LabelSelect>
          <S.FontFamily>{fontFamily}</S.FontFamily>
          <AntDesign name="right" size={24} color="black" />
        </S.ContainerFontFamily>
      </S.Modal>
    </BottomSheet>
  )
}

function Reading() {
  const route = useRoute<RouteProp<ParamList, "reading">>()
  const BottomSheetFontFamilyRef = useRef<BottomSheet>(null)
  const BottomSheetFontRef = useRef<BottomSheet>(null)
  const [fontFamily, setFontFamily] = useState("Roboto Sans")

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Content>
        <HeaderBible
          book={route.params?.book}
          cap={route.params?.chapters}
          refButton={BottomSheetFontRef}
        />
        <ModalFontFamily
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          bottomRef={BottomSheetFontRef}
          refFontFamily={BottomSheetFontFamilyRef}
        />
        <ModalFont
          fontFamily={fontFamily}
          bottomRef={BottomSheetFontRef}
          refFontFamily={BottomSheetFontFamilyRef}
        />
      </Content>
    </SafeAreaView>
  )
}

export default gestureHandlerRootHOC(Reading)
