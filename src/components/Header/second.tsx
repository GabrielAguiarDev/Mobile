// Libs
import { useNavigation } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"

// Typing
import { propsStack } from "../../routes/Stack/Models"
import { IPage } from "../../types/Interfaces"

// Style
import * as S from "./styles"
import { TitlePage } from "../../../styles"
import { useTheme } from "styled-components"

export default function HeaderSecond({
  page,
  iconFunction,
  icon,
  size,
}: IPage) {
  const { colors } = useTheme()
  const navigation = useNavigation<propsStack>()
  return (
    <S.ContentSecond>
      <S.Back onPress={() => navigation.goBack()}>
        <MaterialIcons
          name="arrow-back-ios"
          size={20}
          color={colors.PRIMARY_COLOR}
        />
      </S.Back>
      <TitlePage>{page}</TitlePage>
      {iconFunction && (
        <S.IconRight onPress={iconFunction}>
          <MaterialIcons
            name={icon ?? "info"}
            size={size ?? 20}
            color={colors.PRIMARY_COLOR}
          />
        </S.IconRight>
      )}
    </S.ContentSecond>
  )
}
