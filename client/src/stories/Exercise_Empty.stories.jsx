import Empty from "../components/Exercise/Empty";
import { action } from "@storybook/addon-actions";
import library from "../helpers/fontAwesomeLibrary";

export default {
  component: Empty,
  title: "Exercise -- Empty",
};

const Template = (args) => <Empty {...args} />;

export const EmptyDefault = Template.bind({});
EmptyDefault.args = {
  onClick: action("on click action!")
};

