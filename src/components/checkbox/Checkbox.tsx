import { CSSProperties, forwardRef } from "react";
import { useComponentsProvider } from "@/utils/ComponentsContext";
import scss from "../checkboxes/Checkbox.module.scss"
import type { CheckboxProps } from "@/types/checkboxes";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({  
        state = "default",
        required,
        checkbox,
        ...props }, ref) => {

    const { tokens } = useComponentsProvider()

    const styles = {
        "--input-padding": tokens.general.form.inputPadding,
        "--input-shadow": tokens.general.form.inputShadow,
        "--checkbox-height": tokens.general.form.checkboxHeight,
        "--checkbox-width": tokens.general.form.checkboxWidth,
        "--input-font-size": tokens.general.font.baseSize,
        "--font-family": tokens.general.font.fontfamily,
        "--font-weight": tokens.general.font.fontWeightRegular,
        "--border-radius": tokens.general.form.inputBorderRadius,
        "--colour-error": tokens.theme.error,
        "--colour-hover": tokens.colours.c200,
        "--border-colour": tokens.theme.inputBorder,
        "--colour-success": tokens.theme.success
    } as CSSProperties
    
    return(
        <label 
            className={scss.checkbox}
            style={styles} 
            htmlFor={checkbox.name}>
                <input 
                    ref={ref}
                    {...props} 
                    type="checkbox"
                    disabled={state === "disabled"} 
                    name={checkbox.name}
                    value={checkbox.value}/>
                    <span className={scss.checkmark}></span>
                {required && <strong>*</strong>}
                {checkbox.label}               
        </label>  
    )
})
