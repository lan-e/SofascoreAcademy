import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryVariant: string
      primaryHighlight:string
      secondary: string
      secondaryVariant: string
      secondaryHighlight:string
      surface: string
      surface1:string
      surface2:string
      onsurfacelv1:string
      onsurfacelv2:string
      onsurfacelv3:string
      onsurfacelv4:string
      color: string
    }
  }
  export interface DarkTheme extends DefaultTheme{}
}
