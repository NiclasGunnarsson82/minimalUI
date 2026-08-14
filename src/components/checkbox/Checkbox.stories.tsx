import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "./Checkbox"

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
    argTypes: {
        state: {
            description: 'Determines the styling of the checkbox and the disabled attribute value.',
            table: {
                type: {
                    summary: '"default" | "error" | "disabled"'
                }
            }
        },
        required: {
            description: 'Signifies whether the checkbox is required or not.',
            table: {
                type: {
                    summary: 'boolean'
                }
            }
        },
        checkbox: {
            description: 'The checkbox item object.',
            table: {
                type: {
                    summary: '{name: string, label: string, value?: string}'
                }
            }
        },
    }
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    tags: ["!dev"],
    args: {
        state: "default",
        checkbox:{
            name: "terms_conditions", 
            label: "Accept terms and conditions"
        }
    }
}

export const Disabled: Story = {
    tags: ["!dev"],
    args: {
        state: "disabled",
        checkbox:{
            name: "terms_conditions", 
            label: "Accept terms and conditions"
        }
    }
}


