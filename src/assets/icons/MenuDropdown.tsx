import IconProps from "../../types/Icon.type";

export default function MenuDropdown({width = 32, height = 32, fill= "#FF963C"}: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.01" width={width} height={height} fill={fill}/>
      <path d="M3 8H29" stroke={fill} stroke-width="3"/>
      <path d="M3 16H29" stroke={fill} stroke-width="3"/>
      <path d="M3 24H29" stroke={fill} stroke-width="3"/>
    </svg>
  )
}
