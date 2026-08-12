export type ColourSchemeSelectorType = 
    | "blue" 

export const ColourSchemeSelectorDefault: ColourSchemeSelectorType = "blue" 

export type ColoursType = {
    c100: string,
    c200: string,
    c300: string,
    c400: string
}

export type ColourSchemeType = {
    [theme: string]: ColoursType 
}

export interface IColourScheme {
    [colour: string]: ColourSchemeType
}

export const colourTokens: IColourScheme = {
    blue: {
        light: {
            c100:"#030650",
            c200:"#040877",
            c300:"#060b9f",
            c400:"#070ec7"
        },
        dark: {
            c100:"#1c5f7c",
            c200:"#1f6888",
            c300:"#227195",
            c400:"#247BA1"
        }        
    },
}