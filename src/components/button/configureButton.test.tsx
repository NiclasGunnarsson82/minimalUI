import { describe, expect, it } from "vitest"
import { configureButton }  from "../../helpers/button"

const scss = {
    primary: "primary",
    secondary: "secondary",
    tertiary: "tertiary",
    isSuccess: "isSuccess",
    isError: "isError",
    isLoading: "isLoading",
}

/* export type ButtonConfigType = {
    state: ButtonStateType,
    minWidth: string,
    width: string,
    label: string,
    scss: string,
    disabled: boolean
} */

describe("configureButton", () => {
    //PRIMARY STYLE

    //Primary enabled 
    it("returns the correct config for a primary button in enabled state", () => {
        const result = configureButton({
            style: "primary",
            state: "enabled",
            minWidth: 120,
            fullWidth: false,
            label: "Save",
            scss
        })

        expect(result).toEqual({
            state: "enabled",
            minWidth: "120px",
            width: "auto",
            label: "Save",
            scss: "primary",
            disabled: false
        })
    })

    //Primary loading without loading stateLabel
    it("returns the correct config for a primary button in loading state without loading stateLabel", () => {
        const result = configureButton({
            style: "primary",
            state: "loading",
            minWidth: 120,
            fullWidth: false,
            label: "Save",
            scss
        })

        expect(result).toEqual({
            state: "loading",
            minWidth: "120px",
            width: "auto",
            label: "",
            scss: "primary isLoading",
            disabled: true
        })
    })

    //Primary loading with loading stateLabel
    it("returns the correct config for a primary button in loading state with loading stateLabel", () => {
        const result = configureButton({
            style: "primary",
            state: "loading",
            minWidth: 120,
            fullWidth: false,
            label: "Save",
            stateLabels: {
                loading: "Saving",
            },
            scss
        })

        expect(result).toEqual({
            state: "loading",
            minWidth: "120px",
            width: "auto",
            label: "Saving",
            scss: "primary isLoading",
            disabled: true
        })
    })

    //Primary success without success stateLabel
    it("returns the correct config for a primary button in success state without success stateLabel", () => {
        const result = configureButton({
            style: "primary",
            state: "success",
            minWidth: 120,
            fullWidth: false,
            label: "Success",
            scss
        })

        expect(result).toEqual({
            state: "success",
            minWidth: "120px",
            width: "auto",
            label: "Success",
            scss: "primary isSuccess",
            disabled: true
        })
    })

    //Primary success with success stateLabel
    it("returns the correct config for a primary button in success state with success stateLabel", () => {
        const result = configureButton({
            style: "primary",
            state: "success",
            minWidth: 120,
            fullWidth: false,
            label: "Save",
            stateLabels: {
                success: "Saved",
            },
            scss
        })

        expect(result).toEqual({
            state: "success",
            minWidth: "120px",
            width: "auto",
            label: "Saved",
            scss: "primary isSuccess",
            disabled: true
        })
    })

    //Primary error without error stateLabel
    it("returns the correct config for a primary button in error state without error stateLabel", () => {
        const result = configureButton({
            style: "primary",
            state: "error",
            minWidth: 120,
            fullWidth: false,
            label: "Error",
            scss
        })

        expect(result).toEqual({
            state: "error",
            minWidth: "120px",
            width: "auto",
            label: "Error",
            scss: "primary isError",
            disabled: true
        })
    })

    //Primary error with error stateLabel
    it("returns the correct config for a primary button in error state with error stateLabel", () => {
        const result = configureButton({
            style: "primary",
            state: "error",
            minWidth: 120,
            fullWidth: false,
            label: "Save",
            stateLabels: {
                error: "Server error",
            },
            scss
        })

        expect(result).toEqual({
            state: "error",
            minWidth: "120px",
            width: "auto",
            label: "Server error",
            scss: "primary isError",
            disabled: true
        })
    })

    //Primary disabled
    it("returns the correct config for a primary button in disabled state", () => {
        const result = configureButton({
            style: "primary",
            state: "disabled",
            minWidth: 120,
            fullWidth: false,
            label: "Save",
            scss
        })

        expect(result).toEqual({
            state: "disabled",
            minWidth: "120px",
            width: "auto",
            label: "Save",
            scss: "primary",
            disabled: true
        })
    })

    //SECONDARY STYLE

    //Secondary enabled
    it("returns the correct config for a secondary button in enabled state", () => {
        const result = configureButton({
            style: "secondary",
            state: "enabled",
            minWidth: 120,
            fullWidth: false,
            label: "Cancel",
            scss
        })

        expect(result).toEqual({
            state: "enabled",
            minWidth: "120px",
            width: "auto",
            label: "Cancel",
            scss: "secondary",
            disabled: false
        })
    })

    //Secondary disabled
    it("returns the correct config for a secondary button in disabled state", () => {
        const result = configureButton({
            style: "secondary",
            state: "disabled",
            minWidth: 120,
            fullWidth: false,
            label: "Cancel",
            scss
        })

        expect(result).toEqual({
            state: "disabled",
            minWidth: "120px",
            width: "auto",
            label: "Cancel",
            scss: "secondary",
            disabled: true
        })
    })


    //TERTIARY STYLE

    //Tertiary enabled
    it("returns the correct config for a tertiary button in enabled state", () => {
        const result = configureButton({
            style: "tertiary",
            state: "enabled",
            minWidth: 120,
            fullWidth: false,
            label: "Reset form",
            scss
        })

        expect(result).toEqual({
            state: "enabled",
            minWidth: "120px",
            width: "auto",
            label: "Reset form",
            scss: "tertiary",
            disabled: false
        })
    })

    //Tertiary disabled
    it("returns the correct config for a tertiary button in disable state", () => {
        const result = configureButton({
            style: "tertiary",
            state: "disabled",
            minWidth: 120,
            fullWidth: false,
            label: "Reset form",
            scss
        })

        expect(result).toEqual({
            state: "disabled",
            minWidth: "120px",
            width: "auto",
            label: "Reset form",
            scss: "tertiary",
            disabled: true
        })
    })

    
    //FULLWIDTH BUTTON

    //Primary fullwidth
    it("returns the correct config for a primary button in fullWidth", () => {
        const result = configureButton({
            style: "primary",
            state: "enabled",
            fullWidth: true,
            label: "Save",
            scss
        })

        expect(result).toEqual({
            state: "enabled",
            minWidth: "0",
            width: "100%",
            label: "Save",
            scss: "primary",
            disabled: false
        })
    })




    //Tertiary fullWidth


    
})