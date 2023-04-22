import LottieView from "lottie-react-native"
import { useRef } from "react"
import { Image } from "react-native"
import { Header } from "../../components"

import * as S from "../../../styles/Donate"
import { Content } from "../../../styles"
import Donation from "../../../assets/Lottie/donation-box.json"

export default function () {
  const animation = useRef(null)
  return (
    <Content>
      <Header page="Doações" />
      <S.ContentLabel>
        <S.Label>Faça uma doação</S.Label>
        <S.Smalltext>Qual valor será bem vindo!</S.Smalltext>
      </S.ContentLabel>
      {Donation && (
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#eee",
          }}
          source={require("../../../assets/Lottie/donation-box.json")}
        />
      )}
      <S.ContentQRCode>
        <Image
          style={{ width: 200, height: 200 }}
          source={require("../../../assets/Images/QRcode.png")}
        />
      </S.ContentQRCode>
    </Content>
  )
}
