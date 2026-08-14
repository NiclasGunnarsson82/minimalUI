import type { ButtonConfigType, ConfigureButtonType } from "@/types/button"


export const configureButton = ({
    state,
    style,
    minWidth,
    fullWidth,
    label,
    scss,
    stateLabels
}: ConfigureButtonType): ButtonConfigType => {
    
    const styles = {
        primary: scss.primary,
        secondary: scss.secondary,
        tertiary: scss.tertiary,
    }
    const styleClass = styles[style]

    const config = {
        state: state,
        minWidth: minWidth ? `${minWidth}px` : "0",
        width: fullWidth ? "100%" : "auto",
        disabled: state !== "enabled", 
    }

    switch (state) {
        case "enabled":
        case "disabled":
            return {
                ...config,
                scss: styleClass,
                label: label  
            }
        case "success":
            return {
                ...config,
                scss: [styleClass,scss.isSuccess].join(" "),
                label: stateLabels?.success ?? "Success",
            }
        case "error":
            return {
                ...config,
                scss: [styleClass,scss.isError].join(" "),
                label: stateLabels?.error ?? "Error"
            }
        case "loading":
            return {
                ...config,
                scss: [styleClass,scss.isLoading].join(" "),
                label: stateLabels?.loading ?? ""
            }
    }
    
}
