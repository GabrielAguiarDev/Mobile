import { useNavigation } from "@react-navigation/native"
import { useTheme } from "styled-components"
import * as S from "./styles"
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons"
import { propsStack } from "../../routes/Stack/Models"

export default function Header() {
  const navigation = useNavigation<propsStack>()
  const { colors } = useTheme()
  return (
    <S.Content>
      <S.ProfileContent onPress={() => navigation.navigate("Profile")}>
        <S.Profile>
          <Ionicons name="person" size={20} color={colors.PRIMARY_COLOR} />
        </S.Profile>
        <S.Name>Primeiro Nome</S.Name>
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
