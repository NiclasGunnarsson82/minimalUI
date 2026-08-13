export type ThemeSelectorType = "light" | "dark" 

export const ThemeSelectorDefault: ThemeSelectorType = "dark" 

export type ThemeType = {
    foreground: string,
    background: string,
    theme100: string,
    theme200: string,
    error: string,
    success: string,
    inputBorder: string,
    inputBackground: string
}

export interface IThemes {
    [theme: string]: ThemeType,
}

export const themeTokens: IThemes = {
    light: {
        foreground: "#1b1f23",
        background: "#F8F8F8",
        theme100: "#dfdfdf",
        theme200: "#ececec",
        error: "#950606",
        success: "#06402B",
        inputBorder: "#898989",
        inputBackground: "#FFFFFF",
    },
    dark: {
        foreground: "#F8F8F8",
        background: "#1b1f23",
        theme100: "#262a2e",
        theme200: "#3d4144",
        error: "#C6413A",
        success: "#147638",
        inputBorder: "#898989",
        inputBackground: "#1b1f23"
    }    
}