import { Dispatch, InputHTMLAttributes, SetStateAction } from "react"

export type CheckboxStateType = "default" | "error" | "disabled" 

export type CheckboxType = {
    name: string,
    label: string,
    value?: string
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
    Omit<InputHTMLAttributes<HTMLInputElement>, "name"> & {
        state: CheckboxStateType;
        selected: string[];
        setSelected: Dispatch<SetStateAction<string[]>>;
        required?: boolean;
        align?: string;
    } & {
        [K in Key]: Value;
};

export type CheckboxGroupProps = BaseCheckboxProps<"checkboxes", CheckboxListType>;

export type ConfigMainCheckboxType = {
    mainIsChecked: boolean,
    class: string
}