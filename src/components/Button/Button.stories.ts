import type { Meta, StoryObj } from '@storybook/vue3-vite'
import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: args => ({
    components: { Button },
    setup: () => ({ args }),
    template: '<Button>Button</Button>',
  }),
}
