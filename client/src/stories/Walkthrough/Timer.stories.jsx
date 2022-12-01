import React from 'react'

import { action } from "@storybook/addon-actions"
import Timer from '../../components/Walkthrough/Timer';

export default {
  component: Timer,
  title: 'Timer'
}

const Template = args => <Timer {...args} />

export const ThirtySeconds = Template.bind({});
ThirtySeconds.args = {
    onComplete: action("timer done"),
    duration: {seconds: 30}
}

export const TenSeconds = Template.bind({});
TenSeconds.args = {
    onComplete: action("timer done"),
    duration: {seconds: 10}
}

export const FiveMinutes = Template.bind({});
FiveMinutes.args = {
    onComplete: action("timer done"),
    duration: {seconds: 300}
}