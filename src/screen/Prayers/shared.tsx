import { useIsFocused, useNavigation } from "@react-navigation/native"
import * as S from "../../../styles/Prayers"
import { useContext, useEffect } from "react"
import { Context } from "../../context/dataContext"

export default function PrayerShared() {
  const { setNavigationPrayers } = useContext(Context)
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  useEffect(() => {
    setNavigationPrayers(isFocused ? "private" : "shared")
  }, [navigation, isFocused])

  return (
    <S.ContentScreen>
      <S.TextEmpty>Orações Compartilhadas</S.TextEmpty>
    </S.ContentScreen>
  )
}
