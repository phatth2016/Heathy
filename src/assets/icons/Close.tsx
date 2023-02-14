import IconProps from "../../types/Icon.type";

export default function Close({width = 32, height = 32, fill= "#FF963C"}: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.01" width={width} height={height} fill={fill}/>
      <path d="M7 7L26 26" stroke={fill} stroke-width="3"/>
      <path d="M7 26L26 7" stroke={fill} stroke-width="3"/>
    </svg>
  )
}
