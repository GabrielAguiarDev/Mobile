import { SvgXml } from "react-native-svg"
import IconLive from "./live"

interface ISVG {
  icon: string
  color?: string
  width?: string
  height?: string
}

export default function Svg({ icon, color, width, height }: ISVG) {
  return (
    <SvgXml
      xml={icon}
      fill={color ? color : ""}
      width={width ? width : "100%"}
      height={height ? height : "100%"}
    />
  )
}
