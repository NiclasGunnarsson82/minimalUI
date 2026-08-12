import { CSSProperties, forwardRef } from "react"
import { useComponentsProvider } from "@/utils/ComponentsContext"
import scss from "./Button.module.scss"
import type { ButtonProps } from "../types"
import { configureButton } from "./configureButton"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            label,
            style,
            state,
            minWidth,
            fullWidth = false,
            type = "button",
            stateLabels,
            ...props
        },
        ref
    ) => {

            const { tokens } = useComponentsProvider()

            const config = configureButton({
                label,
                scss,
                minWidth,
                fullWidth,
                state,
                style,
                stateLabels
            })

            const styles = {
                "--width": config.width,
                "--min-width": config.minWidth,
                "--font-size": tokens.general.font.baseSize,
                "--font-family": tokens.general.font.fontfamily,
                "--font-weight": tokens.general.font.fontWeightBold,
                "--border-radius": tokens.general.borders.buttonBorderRadius,
                "--colour-enabled": tokens.colours.c300,
                "--colour-hover": tokens.colours.c200,
                "--colour-focus": tokens.colours.c300,
                "--colour-active": tokens.colours.c100,
                "--colour-disabled": tokens.colours.c400,
                "--colour-secondary": tokens.colours.c400,
                "--colour-error": tokens.theme.error,
                "--colour-loader": tokens.general.misc.white,
                "--colour-success": tokens.theme.success,
                "--shadow-enabled": tokens.general.shadows.buttonEnabled,
                "--shadow-hover": tokens.general.shadows.buttonHover
            } as CSSProperties

            return (
                <button
                    ref={ref}
                    type={type}
                    className={config.scss}
                    disabled={config.disabled}
                    aria-disabled={config.disabled}
                    style={styles}
                    {...props}>
                        {config.state === "loading"
                            ? 
                            <>
                                <span className={scss.loader}/>
                                {config.label}
                            </>
                            : config.label
                        }
                </button>
            )
        }
)
