import { ButtonHTMLAttributes, Dispatch, InputHTMLAttributes, SetStateAction } from "react"

//BUTTON COMPONENT
export type ButtonStateType = "enabled" | "loading" | "success" | "error" | "disabled"
export type ButtonStyleType = "primary" | "secondary" | "tertiary" 
export type ButtonStateLabelType = {
    loading?: string 
    success?: string
    error?: string
}

type CommonButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
    "style" | "disabled" | "className"
> & {
  label: string,
  stateLabels?: ButtonStateLabelType
}  & (
    | {
        fullWidth?: false
        minWidth?: number
      }
    | {
        fullWidth: true
        minWidth?: never
      }
  )

type PrimaryButtonProps = CommonButtonProps & {
    style: "primary"
    state: ButtonStateType
}

type SecondaryButtonProps = CommonButtonProps & {
    style: "secondary" | "tertiary"
    state: "enabled" | "disabled"
}

export type ButtonProps = PrimaryButtonProps | SecondaryButtonProps

export type ButtonConfigType = {
    state: ButtonStateType,
    minWidth: string,
    width: string,
    label: string,
    scss: string,
    disabled: boolean
}

export type ConfigureButtonType = {
    state: ButtonStateType,
    style: ButtonStyleType,
    minWidth?: number,
    fullWidth: boolean,
    label: string,
    scss: Record<string, string>,
    stateLabels?: ButtonStateLabelType
}

//CHECKBOX COMPONENTS
export type CheckboxStateType = "default" | "error" 

export type CheckboxType = {
    option: string,
    value: string
}
export type CheckboxListType = {
    group: string,
    checkboxes: CheckboxType[]
}

export type CheckboxProps = {
    state: CheckboxStateType;
    required?: boolean;
    checkbox: CheckboxType
}

type BaseCheckboxProps<Key extends string, Value> =
    InputHTMLAttributes<HTMLInputElement> & {
        state: CheckboxStateType;
        selected: string[],
        setSelected: Dispatch<SetStateAction<string[]>>,
        required?: boolean,
        align?: string
    } & {
        [K in Key]: Value;
    };

export type CheckboxGroupProps = BaseCheckboxProps<"checkboxes", CheckboxListType>;

export type ConfigMainCheckboxType = {
    mainIsChecked: boolean,
    class: string
}