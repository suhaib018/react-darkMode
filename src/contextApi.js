
import  react,{createContext,useState} from "react" 
import App from "./App";

export const ThemeContext = createContext();

const ContextApi = ({children}) => {
    const [mode,setMode] = useState(true);
  return (
    <ThemeContext.Provider value={{mode,setMode}}>
        {children}
    </ThemeContext.Provider>
  )
}
export default ContextApi;