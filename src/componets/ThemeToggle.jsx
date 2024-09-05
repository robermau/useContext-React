import { useTheme } from "../context/ThemeProvider"





const ThemeToggle = () => {
  const { toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>Cambiar el tema de color</button>
  )
}

export default ThemeToggle
