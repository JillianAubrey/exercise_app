import React from 'react'

import { action } from "@storybook/addon-actions"
import ToggleButton from '../components/buttons_toggles/ToggleButton';

export default {
  component: ToggleButton,
  title: 'Toggle Button (looks better in toggle component)'
}

const Template = args => <ToggleButton {...args} />

export const Default = Template.bind({});
Default.args = {
    onClick: action("button clicked"),
    children: "Toggle Button",
    selected: false
}

export const Selected = Template.bind({});
Selected.args = {
    onClick: action("button clicked"),
    children: "Toggle Button",
    selected: true
}