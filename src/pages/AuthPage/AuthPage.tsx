import { useTheme } from "shared/hooks/useTheme"

export const AuthPage = () => {
    const {theme, setTheme} = useTheme()

    return(
        <div>
            <button onClick={()=> setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>Theme</button>
        </div>
    )
}