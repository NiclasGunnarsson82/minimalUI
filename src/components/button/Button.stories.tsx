import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"

const meta = {
    title: "Components/Button",
    component: Button,
    argTypes: {
        label: {
            description: 'The HTMLButtonElement button text.',
            table: {
                type: {
                    summary: 'string',
                }
            }
        },
        style: {
            description: 'Provides visual hierarchy.',
            table: {
                type: {
                    summary: 'style: "primary", state: "enabled" | "loading" | "success" | "error" | "disabled"; style: "secondary" | "tertiary", state: "enabled" | "disabled"',
                }
            }
        },
        state: {
            description: 'Gives the user visual interaction feedback.',
            table: {
                type: {
                    summary: '"enabled" | "loading" | "success" | "error" | "disabled"',
                }
            }
        },
        minWidth: {
            description: 'The button doesn\'t shrink below the defined width.',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: '0',
                }
            }
        },
        fullWidth: {
            description: 'Makes the button span the full width of its parent container.',
            table: {
                type: {
                    summary:'boolean',
                },
                defaultValue: {
                    summary: 'false',
                }
            }
        },
        stateLabels: {
            description: 'Customises the button text for success, error and loading states.',
            table: {
                type: {
                    summary:'style: "primary", stateLabels: {loading?: string, success?: string, error?: string}',
                },
                defaultValue: {
                    summary: 'undefined',
                }
            }
        },
    }

} satisfies Meta<typeof Button>


export default meta

type Story = StoryObj<typeof meta>

export const Enabled: Story = {
    args: {
        label: "Save",
        style: "primary",
        state: "enabled",
        minWidth: 120
    }
}

export const Disabled: Story = {
    args: {
        label: "Save",
        style: "primary",
        state: "disabled",
    }
}

export const Success: Story = {
    args: {
        label: "Save",
        style: "primary",
        state: "success",
    }
}

export const Error: Story = {
    args: {
        label: "Save",
        style: "primary",
        state: "error",
    }
}

export const Loading: Story = {
    args: {
        label: "Save",
        style: "primary",
        state: "loading",
    }
}

export const Hierarchy: Story = {
     args: {
        label: "",
        style: "primary",
        state: "enabled",
    },
    render: () => (
        <div
            style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                flexDirection: "column"
            }}>
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                }}>
                <Button
                    label="Submit"
                    style="primary"
                    state="enabled"
                    minWidth={120}/>

                <Button
                    label="Cancel"
                    style="secondary"
                    state="enabled"
                    minWidth={120}/>
            </div>
    
            <Button
                label="Reset form"
                style="tertiary"
                state="enabled"/>
        </div>
    ),
}


export const States: Story = {
     args: {
        label: "",
        style: "primary",
        state: "enabled",
    },
    render: () => (
        <div
            style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                flexDirection: "column"
            }}>
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                }}>
                    <Button
                        label="Save"
                        style="primary"
                        state="enabled"
                        minWidth={110}
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="loading"
                        minWidth={110}
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="success"
                        minWidth={110}
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="error"
                        minWidth={110}
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="disabled"
                        minWidth={110}/>     
            </div>
        </div>
    ),
}

export const StateLabels: Story = {
     args: {
        label: "",
        style: "primary",
        state: "enabled",
    },
    render: () => (
        <div
            style={{
                display: "flex",
                gap: "12px",
                alignItems: "flex-start",
                flexDirection: "column"
            }}>
            <div
                style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "center",
                }}>
                    <Button
                        label="Save"
                        style="primary"
                        state="loading"
                        minWidth={150}
                        stateLabels={{loading: "Saving"}}/>
                    <Button
                        label="Save"
                        style="primary"
                        state="success"
                        minWidth={150}
                        stateLabels={{success: "Saved"}}/>
                    <Button
                        label="Save"
                        style="primary"
                        state="error"
                        minWidth={150}
                        stateLabels={{error: "Server error"}}/>    
            </div>
        </div>
    ),
}
