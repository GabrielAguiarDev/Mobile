import { useNavigation } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"
import { propsStack } from "../../routes/Stack/Models"

import * as S from "./styles"
import { TitlePage } from "../../../styles"

export default function HeaderSecond({ page }) {
  const navigation = useNavigation<propsStack>()
  return (
    <S.ContentSecond>
      <S.Back onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back-ios" size={20} color="black" />
      </S.Back>
      <TitlePage>{page}</TitlePage>
    </S.ContentSecond>
  )
}
