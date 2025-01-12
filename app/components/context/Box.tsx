import { useContext } from "react"
import { ThemContext } from "./ThemeContext"
 
const Box = () => {
  const theme = useContext(ThemContext)
  return (<>
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>
      Theme context
    </div>
    <div style={{backgroundColor: theme.secondary.main, color: theme.secondary.text}}>
    Theme context
  </div>
  </>
  )
}

export default Box
