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
        ref: {
            description: 'Provides direct reference to the HTMLButtonElement.',
            table: {
                type: {
                    summary: 'React.Ref<HTMLButtonElement>',
                },
                defaultValue: {
                    summary: 'undefined',
                }
            }
        },
        eventHandler: {
            description: 'The HTMLButtonElement onClick attribute value.',
            table: {
                type: {
                    summary:'(event: MouseEvent<HTMLButtonElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                }
            }
        },
        type: {
            description: 'The HTMLButtonElement type attribute value.',
            table: {
                type: {
                    summary: '"button" | "submit" | "reset"',
                },
                defaultValue: {
                    summary: '"button"',
                }
            }
        },
        width: {
            description: 'Customises the values of the CSS width property.',
            table: {
                type: {
                    summary: '"auto" | `${number}%` | `${number}px` | "initial" | "inherit"',
                },
                defaultValue: {
                    summary: '"auto"',
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
        state: "enabled"
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
                    state="enabled"/>

                <Button
                    label="Cancel"
                    style="secondary"
                    state="enabled"/>
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
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="loading"
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="success"
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="error"
                    />
                    <Button
                        label="Save"
                        style="primary"
                        state="disabled"/>     
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
                        stateLabels={{loading: "Saving"}}/>
                    <Button
                        label="Save"
                        style="primary"
                        state="success"
                        stateLabels={{success: "Saved"}}/>
                    <Button
                        label="Save"
                        style="primary"
                        state="error"
                        stateLabels={{error: "Server error"}}/>    
            </div>
        </div>
    ),
}
