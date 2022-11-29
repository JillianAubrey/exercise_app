import Search from "../components/Exercise/Search";
import { action } from "@storybook/addon-actions";



export default {
  component: Search,
  title: "Exercise - Search",
};

const Template = (args) => <Search {...args} />;

export const SearchInitialState = Template.bind({})
SearchInitialState.args = {
  user: 1
};

