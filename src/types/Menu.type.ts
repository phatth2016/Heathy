export interface MenuItem  {
  label: string,
  action: () => void
}

export interface MenuProps {
  menuList?: [
    MenuItem
  ]
}

export interface HexagonMenuProps {
  icon: any, 
  action: Function, 
  label: string
 }