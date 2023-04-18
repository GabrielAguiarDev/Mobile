// Libs
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "styled-components"
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons"

// Typing
import { IPage } from "../../types/Interfaces"
import { propsStack } from "../../routes/Stack/Models"

// Style
import * as S from "./styles"

export default function Header({ page }: IPage) {
  const navigation = useNavigation<propsStack>()
  const { colors } = useTheme()
  return (
    <S.Content>
      <S.ProfileContent onPress={() => navigation.navigate("Profile")}>
        <S.Profile>
          <Ionicons name="person" size={20} color={colors.PRIMARY_COLOR} />
        </S.Profile>
        <S.Page>{page}</S.Page>
      </S.ProfileContent>
      <S.contentIcon
        onPress={() => navigation.navigate("Friends")}
        style={{
          elevation: 5,
          shadowColor: "#000000b9",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 4.65,
        }}
      >
        <SimpleLineIcons name="people" size={29} color="#000" />
      </S.contentIcon>
    </S.Content>
  )
}
