import React from 'react'

import { action } from "@storybook/addon-actions"
import Toggle from '../components/buttons_toggles/Toggle';

export default {
  component: Toggle,
  title: 'Toggle'
}

const Template = args => <Toggle {...args} />

export const Default = Template.bind({});
Default.args = {
    rightClick: action("right button clicked"),
    leftClick: action("left button clicked"),
    rightLabel: "Shared Workouts",
    leftLabel: "My Workouts"
}
