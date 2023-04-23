import { useState } from "react"
import { Image, ScrollView } from "react-native"
import * as Clipboard from "expo-clipboard"

import { Header } from "../../components"
import SVG from "../../../assets/svg"
import IconPix from "../../../assets/svg/pix"

import * as S from "../../../styles/Donate"
import { Content, shadow } from "../../../styles"

export default function Donate() {
  const [copy, setCopy] = useState(false)
  const codePix = "https://github.com/GabrielAguiarDev"

  return (
    <Content>
      <Header page="Doações" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
        }}
      >
        <S.ContentLabel>
          <S.Title>Faça uma doação</S.Title>
        </S.ContentLabel>
        <S.ContentVerse>
          <Image
            style={{
              width: 30,
              height: 30,
              position: "absolute",
              top: 5,
              left: 5,
            }}
            source={require("../../../assets/Images/icon-aspas.png")}
          />
          <S.Verse>
            Cada um contribua segundo propôs no seu coração; não com tristeza,
            ou por necessidade; porque Deus ama ao que dá com alegria.
          </S.Verse>
          <S.InfoVerse>2 Coríntios 9:7</S.InfoVerse>
        </S.ContentVerse>
        <S.ContentInstruction>
          <S.Instruction>Instruções:</S.Instruction>
          <S.Step>1 - Entre no app do seu Banco</S.Step>
          <S.Step>2 - Vá até a sessão de PIX</S.Step>
          <S.Step>3 - scanei o qrcode ou copie e cole o código</S.Step>
          <S.ContentIconPix>
            <SVG icon={IconPix} color="#2ebdaf" />
          </S.ContentIconPix>
        </S.ContentInstruction>
        <S.ContentQRCode>
          <Image
            style={{ width: 200, height: 200 }}
            source={require("../../../assets/Images/QRcode.png")}
          />
          <S.ContentCodeQRCode style={shadow}>
            <S.Code copy={copy}>{codePix}</S.Code>
            <S.ButtonCopy
              onPress={() => {
                setCopy(true)
                Clipboard.setStringAsync(codePix)
                setTimeout(() => {
                  setCopy(false)
                }, 2000)
              }}
            >
              <S.Label>Copiar código</S.Label>
            </S.ButtonCopy>
          </S.ContentCodeQRCode>
        </S.ContentQRCode>
      </ScrollView>
    </Content>
  )
}
