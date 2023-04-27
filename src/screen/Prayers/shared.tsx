import * as S from "../../../styles/Prayers"

/* 
  import InsetShadow from "react-native-inset-shadow"
  <InsetShadow containerStyle={style.Box}>
  <S.Prayers
    prayer={!prayersPrivate}
    onPress={() => setPrayersPrivate(true)}
    style={prayersPrivate ? shadow : {}}
  >
    <S.Type prayer={prayersPrivate}>Particular</S.Type>
  </S.Prayers>
  <S.Prayers
    prayer={!prayersPrivate}
    onPress={() => setPrayersPrivate(false)}
    style={!prayersPrivate ? shadow : {}}
  >
    <S.Type prayer={!prayersPrivate}>Compartilhado</S.Type>
  </S.Prayers>
</InsetShadow> */

export default function PrayerShared() {
  return (
    <S.ContentScreen>
      <S.TextEmpty>Orações Compartilhadas</S.TextEmpty>
    </S.ContentScreen>
  )
}
