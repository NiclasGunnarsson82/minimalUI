import type { Meta, StoryObj } from "@storybook/react-vite"
import { NestedCheckboxList } from "./NestedCheckboxList"

const meta = {
    title: "Components/Nested checkboxes",
    component: NestedCheckboxList,
 

} satisfies Meta<typeof NestedCheckboxList>

export default meta

type Story = StoryObj<typeof meta>



