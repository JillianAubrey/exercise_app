import React from 'react'

import { action } from "@storybook/addon-actions"
import SmallButton from '../buttons_toggles/SmallButton';

export default {
  component: SmallButton,
  title: 'Small Button'
}

const Template = args => <SmallButton {...args} />

export const Edit = Template.bind({});
Edit.args = {
    onClick: action("button clicked"),
    children: "Edit",
    type: "edit"
}

export const Delete = Template.bind({});
Delete.args = {
    onClick: action("button clicked"),
    children: "Delete",
    type: "delete"
}

export const Cancel = Template.bind({});
Cancel.args = {
    onClick: action("button clicked"),
    children: "Cancel",
    type: "cancel"
}

export const Save = Template.bind({});
Save.args = {
    onClick: action("button clicked"),
    children: "Save",
    type: "save"
}