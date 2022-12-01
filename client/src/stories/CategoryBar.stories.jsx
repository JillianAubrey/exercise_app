import React from 'react'
import CategoryBar from '../components/CategoryBar';

export default {
  component: CategoryBar,
  title: 'Category Bar'
}

const Template = args => <CategoryBar {...args} />

export const ExampleBar = Template.bind({});
ExampleBar.args = {
  arms: 7,
  chest: 3,
  core: 2,
}

export const AllCategories = Template.bind({});
AllCategories.args = {
  arms: 1,
  back: 1,
  chest: 1,
  core: 1,
  legs: 1,
  shoulders: 1,
  cardio: 1,
  stretch: 1,
  other: 1,
  rest: 1,
}