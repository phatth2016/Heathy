import IconProps from '../../types/Icon.type'

export default function Cup({width = 32, height = 32, fill= "white"}: IconProps) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.01" width="56" height="56" fill={fill}/>
      <g clip-path="url(#clip0_1_339)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M45 12.0464C42.7853 12.0464 40.9036 10.3071 40.9036 8H15.1486C15.1486 10.304 13.2163 12.0464 11 12.0464V14.6671H45V12.0464ZM12.7004 17.9999L17.9067 48H38.2008L43.3013 17.9999H12.7004ZM39.2861 21.3264L38.1519 28H17.954L16.8198 21.3264H39.2861ZM20.7872 44.6672L19.6532 38.0001H36.4528L35.3203 44.6672H20.7872Z" fill={fill}/>
      </g>
      <defs>
        <clipPath id="clip0_1_339">
          <rect width="34" height="40" fill={fill} transform="translate(11 8)"/>
        </clipPath>
      </defs>
    </svg>
  )
}
