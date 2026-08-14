import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "./Checkbox"

const meta = {
    title: "Components/Checkbox",
    component: Checkbox,
 

} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

export const Terms: Story = {
    tags: ["!dev"],
    args: {
        state: "default",
        checkbox:{
            name: "terms_conditions", 
            label: "Accept terms and conditions"
        }
    }
}


