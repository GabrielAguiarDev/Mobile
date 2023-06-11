// Libs
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "styled-components"
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons"

// Typing
import { IPage } from "../../types/Interfaces"
import { propsStack } from "../../routes/Stack/Models"

// Style
import * as S from "./styles"
import { shadow } from "../../../styles"

export default function Header({ page, info }: IPage) {
  const navigation = useNavigation<propsStack>()
  const { colors } = useTheme()
  return (
    <S.Content style={[shadow]}>
      <S.ProfileContent onPress={() => navigation.navigate("Profile")}>
        <S.Profile>
          <Ionicons name="person" size={20} color={colors.PRIMARY_COLOR} />
        </S.Profile>
        <S.Page>{page}</S.Page>
        {info && <S.Info>{info}</S.Info>}
      </S.ProfileContent>
      <S.contentIcon
        onPress={() => navigation.navigate("Friends")}
        style={shadow}
      >
        <SimpleLineIcons name="people" size={29} color="#000" />
      </S.contentIcon>
    </S.Content>
  )
}
